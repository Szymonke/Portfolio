describe('Links which open a new tab', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/links`)
    });
    it('First approach to a link that opens another tab, not clicking the link', () => {
        cy.get('#simpleLink').then((link)=>{
            expect(link).to.have.attr('href','https://demoqa.com')
            expect(link).to.have.attr('target','_blank')
        })
    });
    it('Second approach to a link that opens another tab, removing target attr', () => {
        cy.get('#simpleLink').invoke('removeAttr','target').click()
        cy.url().should('eq','https://demoqa.com/')
    });
});

describe('Intercepting API requests', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/links`)
        cy.intercept('GET', `${Cypress.env('demoQA')}/created`).as('createdStatus')
    });
    it('', () => {
        cy.get('#created').click()
        cy.wait('@createdStatus').then((interception)=>{
            cy.log('This is the interception: ', interception)
            expect(interception.response.statusCode).to.be.equal(201)
            expect(interception.response.statusMessage).to.be.equal('Created')
        })
    });
});