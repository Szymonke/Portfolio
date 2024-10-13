describe('Demo QA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/checkbox`)
    });
    it('Checkbox with display:none', () => {
        cy.get('input[type="checkbox"]').click({force:true})
        cy.get('#result > :nth-child(1)').should('have.text','You have selected :')
    });
});
describe.only('', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('theInternet')}/checkboxes`)
    });
    it('Checkboxes in form', () => {
        cy.get('form#checkboxes input').eq(0).should('not.be.checked').click().should('be.checked')
        cy.get('form#checkboxes input').eq(1).should('be.checked')
    });
});