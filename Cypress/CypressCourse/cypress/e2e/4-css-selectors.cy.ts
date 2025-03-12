describe('Tests an element with dynamic ID using different selection approaches', () => {
    beforeEach(()=>{
        cy.visit('/dynamicid')
    })
    it('Clicks on a button using contain and asserts it is focused', () => {
        cy.contains('Button with Dynamic ID').click().should('be.focused')
    })
    it('Finds an element using get and find', () => {
        cy.get('div').find('button').click().should('be.focused')
    })
    it('Finds an element using attribute', () => {
        cy.get(`button[class="btn btn-primary"]`).click().should('be.focused')
    })
    it('Finds an element using class', () => {
        cy.get('.btn-primary').click().should('be.focused')
    })
})