describe('Hover Challenge', () => {
    beforeEach(() => {
        cy.visit('/mouseOver')
    });
    it('Hover solution for Cypress//cypress-real-events plugin', () => {
        cy.get(':nth-child(7) > .text-primary').realHover()
    });
});