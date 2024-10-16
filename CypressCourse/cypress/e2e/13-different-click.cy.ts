describe('Double Click, Right Click assertions', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/buttons`)
    });
    it('Double click', () => {
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible')
    });
    it('Right click', () => {
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible')
    });
});