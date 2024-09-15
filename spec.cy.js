//===Utilities===================================================================================

function logIn(username, password, option) {
  cy.get('input[name="username"]').type(username, option)
  cy.get('input[name="password"]').type(password, option)
}

function clickFormButton(content) {
  cy.get('button').contains(content).click()
}

function checkIfLogInCredentialsAreValid() {
  cy.get('div').contains('Invalid credentials').as('Alert noticing about invalid credentials').should('be.visible').should('contain', 'Invalid credentials')
}

function checkIfRequiredWereFilled() {
  cy.get('span').contains('Required').as('Alert about empty fields').should('be.visible')
}

function checkIfCorrectPageIsAccessed(targetUrl) {
  if(targetUrl === 'string'){
    cy.url().should('eq', targetUrl).as('Does it access correct page?')
  }else if(targetUrl instanceof RegExp){
    cy.url().should('match', targetUrl).as('Does it access correct page?')
  }
}

function accessSubjectOfTheTestCase(subject){
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  logIn('Admin', 'admin123')
  clickFormButton('Login')
  cy.get('a').contains(subject).click()
}

function containsAnAccurateAmountOfItems(option){
  if(option === 'display'){
    cy.get('span.oxd-text').contains(/Record(s)?/).invoke('text').then((text) =>{
      const recordsAmount = parseInt(text.match(/\((\d+)\)/)[1])
      if(recordsAmount === 1){
        cy.get('span.oxd-text').contains(/Record(s)?/).should('contain','Record').as('Grammar matches amount of items(Plural)')
      }else{
        cy.get('span.oxd-text').contains(/Record(s)?/).should('contain','Records').as('Grammar matches amount of items(Singular)')
      }
      cy.get('div.oxd-table-card').should('have.length', recordsAmount).as('Actual amount equals the displayed amount')
    })
    }else if(option === 'selection'){
      cy.get('span.oxd-text').contains(/Record(s)?/).invoke('text').then((text) => {
        const recordsAmount = parseInt(text.match(/\((\d+)\)/)[1])
        cy.get('div.oxd-table-body').find('span.oxd-checkbox-input--active').filter(':visible').should('have.length', recordsAmount).as('Selected amount equals the selected amount')
      })
  }
}

function selectFromADropdown(parent,option,filter){
  cy.get(parent).contains(filter).click()
  cy.get(parent).contains(option).click()
}

const navBarTerms = [
  { page: 'Admin', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers'},
  { page: 'PIM', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList' },
  { page: 'Leave', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList'},
  { page: 'Time' , url: 'https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet'},
  { page: 'Recruitment', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates' },
  { page: 'My Info', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7'},
  { page: 'Performance', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview' },
  { page: 'Dashboard', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index' },
  { page: 'Directory', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory' },
  { page: 'Maintenance', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee'},
  { page: 'Claim', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim' }]

//===Tests===================================================================================

describe('Testing HR Management Website', () => {
  it('Should display error messages with invalid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    clickFormButton('Login')
    checkIfRequiredWereFilled()
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

    navBarTerms.forEach(item => {
      cy.get('input[placeholder="Search"]').type(item.page).clear()
      cy.get('li.oxd-main-menu-item-wrapper').contains(item.page).should('be.visible').and('contain', item.page).as(`${item.page} is the only item visible`)
    })
  })

  it('Tests if navigation bar functions as intended', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    logIn("Admin", "admin123")
    clickFormButton('Login')
    navBarTerms.forEach(item => {
      cy.get('a').contains(item.page).click()
      checkIfCorrectPageIsAccessed(item.url)
      if(item.page === 'Maintenance'){
        logIn('Admin','admin123', {force:true})
        clickFormButton('Confirm')
      }
      cy.get('li').contains(item.page).should('have.class', 'oxd-main-menu-item active').as('Navigation bar item is marked as active')
    })
  })

  it('Tests functionality of the Admin page', () => {
    accessSubjectOfTheTestCase('Admin')
    containsAnAccurateAmountOfItems('display')
    cy.get('div.oxd-table-header').find('input[type="checkbox"]').click({force:true})
    containsAnAccurateAmountOfItems('selection')
    cy.contains('label', 'Username').closest('div.oxd-grid-item').find('input').type('Admin')
    clickFormButton('Search')
    containsAnAccurateAmountOfItems()
    cy.get('div.oxd-table-card').find('i.oxd-checkbox-input-icon').should('not.be.visible').as('Admin account cannot be selected')
    cy.get('i.bi-trash').should('be.visible').click()
    cy.get('div[id="oxd-toaster_1"]').should('be.visible').should('contain', 'Cannot be deleted').as('User is informed that main admin cannot be deleted')
    cy.get('i.bi-pencil-fill').should('be.visible').click()
    checkIfCorrectPageIsAccessed(/^https:\/\/opensource-demo\.orangehrmlive\.com\/web\/index\.php\/admin\/saveSystemUser\/\d+$/)
    selectFromADropdown('div.oxd-input-group', '-- Select --', 'Admin')
    checkIfRequiredWereFilled()
    selectFromADropdown('div.oxd-select-text', '-- Select --', 'Enabled')
    checkIfRequiredWereFilled()
  })

  it('Tests Maintenance page access', () => {
    accessSubjectOfTheTestCase('Maintenance')
    cy.get('input[name="username"]').clear({force: true}) //
    clickFormButton('Confirm')
    checkIfRequiredWereFilled()
    logIn('Admin','123123123',{force:true})
    clickFormButton('Confirm')
    checkIfLogInCredentialsAreValid()
    logIn('Admin','admin123',{force:true})
    clickFormButton('Confirm')
    checkIfCorrectPageIsAccessed('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee')
  })
})
