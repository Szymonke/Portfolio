describe('Finds elements using XPath', () => {
    beforeEach(()=>{
        cy.visit('/classattr')
    })
    it('Finds an element by its text', ()=>{
        cy.xpath("//*[text()='Scenario']").should('be.visible')
    })
    it('Finds an element by its class attribute', () => {
        cy.xpath("//pre[@class=' language-html']").should('be.visible')
    })
    it('Finds an element by one of the middle classes', () => {
        cy.xpath("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]").should('have.css','background-color','rgb(0, 123, 255)')
    })
})