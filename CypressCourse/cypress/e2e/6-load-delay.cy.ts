describe('Retry ability demo', () => {
    it('Expects instant visit', () => {
        cy.visit('/loaddelay', {timeout:0})
    });
    it('Waits for page to load', () => {
        cy.visit('/loaddelay')
    });
    it('Tests an element which has a delayed load time', () => {
        Cypress.config('defaultCommandTimeout', 16000)
        cy.visit('/clientdelay')
        cy.get('#ajaxButton').click()
        cy.get('.bg-success').should('contain.text','Data calculated on the client side.')
    })
    //v not efficient because I have to adjust the defaultCommandTimeout
    it('Tests a progress bar//My approach', () => {
        cy.visit('/progressbar')
        cy.get('#startButton').click()
        cy.get('#progressBar').contains('75%').then(()=>{
            cy.get('#stopButton').click()
        })
    });
    it.only('Tests a progress bar//Course approach', () => {
        cy.visit('/progressbar')
        cy.get('#startButton').click()
        cy.get('#progressBar', {timeout: 30000}).should('contain', '75%')
        cy.get('#stopButton').click()
    });
});