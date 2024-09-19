import * as util from './HR Demo Utilities.ts'

describe('Testing HR Management Website', () => {
  it('Should display error messages with invalid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    util.clickFormButton('Login')
    util.checkIfRequiredAreFilled()
    util.logIn('123123123','123123123')
    util.clickFormButton('Login')
    util.checkIfLogInCredentialsAreValid()
    util.logIn('#%##@!!@#','@#!#!@#^^##@@')
    util.clickFormButton('Login')
    util.checkIfLogInCredentialsAreValid()
    util.logIn('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    util.clickFormButton('Login')
    util.checkIfLogInCredentialsAreValid()
  })

  it('Should log in sucessfully', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    util.logInAsAdmin()
    util.clickFormButton('Login')
    util.checkIfCorrectPageIsAccessed('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  })

  it('Tests if search bar functions as intended', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    util.logInAsAdmin()
    util.clickFormButton('Login')

    util.navBarTerms.forEach(item => {
      cy.get('input[placeholder="Search"]').type(item.page).clear()
      cy.get('li.oxd-main-menu-item-wrapper').contains(item.page).should('be.visible').and('contain', item.page).as(`${item.page} is the only item visible`)
    })
  })

  it('Tests if navigation bar functions as intended', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    util.logInAsAdmin()
    util.clickFormButton('Login')
    util.navBarTerms.forEach(item => {
      cy.get('a').contains(item.page).click()
      util.checkIfCorrectPageIsAccessed(item.url)
      if(item.page === 'Maintenance'){
        util.logIn('Admin','admin123', {force:true})
        util.clickFormButton('Confirm')
      }
      cy.get('li').contains(item.page).should('have.class', 'oxd-main-menu-item active').as('Navigation bar item is marked as active')
    })
  })

  it('Tests functionality of the Admin page', () => {
    util.accessSubject('Admin')
    util.containsAnAccurateAmountOfItems('display')
    cy.get('div.oxd-table-header').find('input[type="checkbox"]').click({force:true})
    util.containsAnAccurateAmountOfItems('selection')
    cy.contains('label', 'Username').closest('div.oxd-grid-item').find('input').type('Admin')
    util.clickFormButton('Search')
    util.containsAnAccurateAmountOfItems()
    cy.get('div.oxd-table-card').find('i.oxd-checkbox-input-icon').should('not.be.visible').as('Admin account cannot be selected')
    cy.get('i.bi-trash').should('be.visible').click()
    cy.get('div[id="oxd-toaster_1"]').should('be.visible').should('contain', 'Cannot be deleted').as('User is informed that main admin cannot be deleted')
    cy.get('i.bi-pencil-fill').should('be.visible').click()
    util.checkIfCorrectPageIsAccessed(/^https:\/\/opensource-demo\.orangehrmlive\.com\/web\/index\.php\/admin\/saveSystemUser\/\d+$/)
    util.selectFromADropdown('div.oxd-input-group', '-- Select --', 'Admin')
    util.checkIfRequiredAreFilled()
    util.selectFromADropdown('div.oxd-select-text', '-- Select --', 'Enabled')
    util.checkIfRequiredAreFilled()
  })

  it('Tests Maintenance page access', () => {
    util.accessSubject('Maintenance')
    cy.get('input[name="username"]').clear({force: true}) //
    util.clickFormButton('Confirm')
    util.checkIfRequiredAreFilled()
    util.logIn('Admin','123123123',{force:true})
    util.clickFormButton('Confirm')
    util.checkIfLogInCredentialsAreValid()
    util.logIn('Admin','admin123',{force:true})
    util.clickFormButton('Confirm')
    util.checkIfCorrectPageIsAccessed('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee')
  })
})
