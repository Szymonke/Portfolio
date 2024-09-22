import { clickFormButton,
   checkIfRequiredAreFilled,
   checkIfCorrectPageIsAccessed, 
   checkIfLogInCredentialsAreValid, 
   logIn, 
   logInAsAdmin, 
   containsAccurateAmountOfItems, 
   accessSubject,
   selectFromADropdown, 
   navBarTerms } from './HRDemoUtilities.js';


describe('Testing HR Management Website', () => {
  it('Should display error messages with invalid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    clickFormButton('Login')
    checkIfRequiredAreFilled()
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
    logInAsAdmin()
    clickFormButton('Login')
    checkIfCorrectPageIsAccessed('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  })

  it('Tests if search bar functions as intended', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    logInAsAdmin()
    clickFormButton('Login')

    navBarTerms.forEach(item => {
      cy.get('input[placeholder="Search"]').type(item.page).clear()
      cy.get('li.oxd-main-menu-item-wrapper').contains(item.page).should('be.visible').and('contain', item.page).as(`${item.page} is the only item visible`)
    })
  })

  it('Tests if navigation bar functions as intended', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    logInAsAdmin()
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
    accessSubject('Admin')
    containsAccurateAmountOfItems('display')
    cy.get('div.oxd-table-header').find('input[type="checkbox"]').click({force:true})
    containsAccurateAmountOfItems('selection')
    cy.contains('label', 'Username').closest('div.oxd-grid-item').find('input').type('Admin')
    clickFormButton('Search')
    containsAccurateAmountOfItems()
    cy.get('div.oxd-table-card').find('i.oxd-checkbox-input-icon').should('not.be.visible').as('Admin account cannot be selected')
    cy.get('i.bi-trash').should('be.visible').click()
    cy.get('div[id="oxd-toaster_1"]').should('be.visible').should('contain', 'Cannot be deleted').as('User is informed that main admin cannot be deleted')
    cy.get('i.bi-pencil-fill').should('be.visible').click()
    checkIfCorrectPageIsAccessed(/^https:\/\/opensource-demo\.orangehrmlive\.com\/web\/index\.php\/admin\/saveSystemUser\/\d+$/)
    selectFromADropdown('div.oxd-input-group', '-- Select --', 'Admin')
    checkIfRequiredAreFilled()
    selectFromADropdown('div.oxd-select-text', '-- Select --', 'Enabled')
    checkIfRequiredAreFilled()
  })

  it('Tests Maintenance page access', () => {
    accessSubject('Maintenance')
    cy.get('input[name="username"]').clear({force: true}) //
    clickFormButton('Confirm')
    checkIfRequiredAreFilled()
    logIn('Admin','123123123',{force:true})
    clickFormButton('Confirm')
    checkIfLogInCredentialsAreValid()
    logIn('Admin','admin123',{force:true})
    clickFormButton('Confirm')
    checkIfCorrectPageIsAccessed('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee')
  })
})
