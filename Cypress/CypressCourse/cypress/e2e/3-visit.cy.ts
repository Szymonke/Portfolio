describe('basics like visit and get', () => {
    beforeEach(() => {
        cy.visit('/textinput')
    })
    it('visit textinput', () => {
        cy.log('Hello from it')
    })

    it('visit dynamicid', () => {
        cy.url().then((url)=>{
            cy.log(`This is the current URL: ${url}`)
            expect(url).to.contain('/textinput')
        })
        cy.title().then((title)=>{
            expect(title).to.eql('Text Input')
        })
    })
    it('Tests Textinput page', () => {
        cy.get('input#newButtonName').type('test')
        cy.get('button#updatingButton').click().should('have.text','test')
    })
})