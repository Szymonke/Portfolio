describe('Testing an online webpage designed for testing', () => {
    it('Tests log in functionality', () => {
        cy.intercept('GET','/logged-in-successfully/').as('loginRequest')
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password123')
        cy.get('button').contains('Submit').click()
        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(200); // Verify successful response
          });
        cy.url().should('eq', 'https://practicetestautomation.com/logged-in-successfully/')
    })

})