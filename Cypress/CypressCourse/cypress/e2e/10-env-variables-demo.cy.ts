describe('Environmental Variables Demo', () => {
    it('Demo', () => {
        cy.log(`${Cypress.env("demoVar")}`)
    });
});