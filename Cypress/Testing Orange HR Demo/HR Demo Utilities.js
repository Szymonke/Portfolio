/// <reference types="cypress" />

export function logIn(username, password, option) {
  cy.get('input[name="username"]').type(username, option)
  cy.get('input[name="password"]').type(password, option)
}

export function logInAsAdmin(){
  return logIn('Admin', 'admin123', '')
}

export function clickFormButton(content) {
  cy.get('button').contains(content).click()
}

export function checkIfLogInCredentialsAreValid() {
  cy.get('div').contains('Invalid credentials').as('Alert noticing about invalid credentials').should('be.visible').should('contain', 'Invalid credentials')
}

export function checkIfRequiredAreFilled() {
  cy.get('span').contains('Required').as('Alert about empty fields').should('be.visible')
}

export function checkIfCorrectPageIsAccessed(targetUrl) {
  if(targetUrl === 'string'){
    cy.url().should('eq', targetUrl).as('Does it access correct page?')
  }else if(targetUrl instanceof RegExp){
    cy.url().should('match', targetUrl).as('Does it access correct page?')
  }
}

export function accessSubject(subject){
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  logInAsAdmin()
  clickFormButton('Login')
  cy.get('a').contains(subject).click()
}

export function containsAnAccurateAmountOfItems(option){
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

export function selectFromADropdown(parent,option,filter){
  cy.get(parent).contains(filter).click()
  cy.get(parent).contains(option).click()
}

export const navBarTerms = [
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