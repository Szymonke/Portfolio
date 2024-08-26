/*

Website used for these tests is no longer available. I'm keeping all this code for 
future reference and as a part of my portfolio for recruitment team/leadership of teams
I will apply to join.

*/
//===Functions===================================================================================

function logIn(username, password, option){
  cy.get('input[name="username"]').type(username, option)
  cy.get('input[name="password"]').type(password, option)
}

function clickFormButton(content){
  cy.get('button').contains(content).click()
}

function checkIfLogInCredentialsAreValid(){
  cy.get('[role=alert]').as('Alert noticing about invalid credentials').should('be.visible')
}

function checkIfLogInCredentialsWereFilled(){
  cy.get('span').contains('Required').as('Alert about empty fields').should('be.visible')
}

function checkIfCorrectPageIsAccessed(targetUrl){
  cy.url().should('eq',targetUrl).as('Does it access correct page?')
}

//===Tests===================================================================================

describe('Testing HR Management Website', () => {
  it('Negative Log In test', () => {
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

  it('Positive Log In test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    logIn('Admin','admin123')
    clickFormButton('Login')
    checkIfCorrectPageIsAccessed('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  })
  
  it('Testing search bar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    logIn("Admin", "admin123")
    clickFormButton('Login')
    cy.get('input[placeholder="Search"]').type('Admin').clear()
    cy.get('input[placeholder="Search"]').type('PIM').clear()
    cy.get('input[placeholder="Search"]').type('Leave').clear()
    cy.get('input[placeholder="Search"]').type('Time').clear()
    cy.get('input[placeholder="Search"]').type('Recruitment').clear()
    cy.get('input[placeholder="Search"]').type('My info').clear()
    cy.get('input[placeholder="Search"]').type('Performance').clear()
    cy.get('input[placeholder="Search"]').type('Dashboard').clear()
    cy.get('input[placeholder="Search"]').type('Directory').clear()
    cy.get('input[placeholder="Search"]').type('Maintenance').clear()
    cy.get('input[placeholder="Search"]').type('Claim').clear()
    cy.get('input[placeholder="Search"]').type('Buzz').clear()
    cy.get('input[placeholder="Search"]').type('Test').clear()
    cy.get('input[placeholder="Search"]').type('123123').clear()
    cy.get('input[placeholder="Search"]').type('!@#$%^&').clear()

    // Previously I've used .wait(1000) before clearing the Search bar, but this is not needed per Cypress functionality
  })

  it('Testing Navigation Bar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    logIn("Admin", "admin123")
    clickFormButton('Login')
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

  it('Testing Maintenance Page', () => {
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
