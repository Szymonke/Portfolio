//===Functions===================================================================================

function logIn(username, password, option){
  cy.get('input[name="username"]').type(username, option)
  cy.get('input[name="password"]').type(password, option)
}

function clickFormButton(content){
  cy.get('button').contains(content).click()
}

function checkIfLogInCredentialsAreValid(){
  cy.get('[role=alert]').as('Alert noticing about invalid credentials').should('be.visible').and('contains', 'Invalid')
}

function checkIfLogInCredentialsWereFilled(){
  cy.get('span').contains('Required').as('Alert about empty fields').should('be.visible')
}

function checkIfCorrectPageIsAccessed(targetUrl){
  cy.url().should('eq',targetUrl).as('Does it access correct page?')
}

const navBarTerms = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim']

//===Tests===================================================================================

describe('Testing HR Management Website', () => {
  it('Should display error messages with invalid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    clickFormButton('Login')
    checkIfLogInCredentialsWereFilled()
    logIn('123123123','123123123')
    clickFormButton('Login')
    checkIfLogInCredentialsAreValid()
    logIn('#%##@!!@#','@#!#!@#^^##@@')
    clickFormButton('Login')
    checkIfLogInCredentialsAreValid()
    logIn('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    clickFormButton('Login')
    checkIfLogInCredentialsAreValid()
  })

  it('Should log in sucessfully', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    logIn('Admin','admin123')
    clickFormButton('Login')
    checkIfCorrectPageIsAccessed('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  })
  
  it('Tests if search bar functions as intended', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    logIn("Admin", "admin123")
    clickFormButton('Login')

    navBarTerms.forEach(term => {
      cy.get('input[placeholder="Search"]').type(term).clear()
    })
  })

  it('Tests if navigation bar functions as intended', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    logIn("Admin", "admin123")
    clickFormButton('Login')
    navBarTerms.forEach(term => {
      cy.get('a').contains(term).click()
      if(term === 'Maintenance'){
        logIn('Admin','admin123', {force:true})
        clickFormButton('Confirm')
      }
    })
    cy.get('a').contains('Admin').click()
    cy.get('a').contains('PIM').click()
    cy.get('a').contains('Leave').click()
    cy.get('a').contains('Time').click()
    cy.get('a').contains('Recruitment').click()
    cy.get('a').contains('My Info').click()
    cy.get('a').contains('Performance').click()
    cy.get('a').contains('Dashboard').click()
    cy.get('a').contains('Directory').click()
    cy.get('a').contains('Maintenance').click() // Maintenance page requires administrator credentials to access. Navigation bar is hidden unless valid credentials are used or User leaves the page
    logIn('Admin','admin123', {force:true})
    clickFormButton('Confirm')
    cy.get('a').contains('Claim').click()
  })

  it('Tests Maintenance page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    logIn("Admin", "admin123")
    clickFormButton('Login')
    cy.get('a').contains('Maintenance').click() // Accesses subject of the test case
    
    cy.get('input[name="username"]').clear({force: true}) //
    clickFormButton('Confirm')
    checkIfLogInCredentialsWereFilled()
    logIn('Admin','123123123',{force:true})
    clickFormButton('Confirm')
    checkIfLogInCredentialsAreValid()
    logIn('Admin','admin123',{force:true})
    clickFormButton('Confirm')
    checkIfCorrectPageIsAccessed('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee')
  })
})
