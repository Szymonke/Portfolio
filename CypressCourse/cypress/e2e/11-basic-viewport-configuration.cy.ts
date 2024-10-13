describe('Basic Viewport Configurations', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("Angular")}/angularjs-protractor-practice-site`)
    });
    it('Device Viewport', () => {
        cy.viewport('iphone-6')
        cy.get('#mobile_menu_toggler').should('be.visible')
    });
    it('Specific Viewport', () => {
        cy.viewport(550, 750)
        cy.get('#mobile_menu_toggler').should('be.visible')
    });
});