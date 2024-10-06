describe('', () => {
    beforeEach(()=>{
        cy.visit('/dynamicid')
    })
    it('', () => {
        cy.contains('Button with Dynamic ID').click().should('be.focused')
    })
})