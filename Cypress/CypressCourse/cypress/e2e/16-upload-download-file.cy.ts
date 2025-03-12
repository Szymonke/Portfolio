describe('Downloads and Uploads files', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/upload-download`)
    });
    it('Uploads a file', () => {
        cy.get('input#uploadFile').attachFile('example.json')
        cy.get('#uploadedFilePath').should('contain','example.json')
    });
    it('Downloads a file', () => {
        cy.get('#downloadFile').click()
    });
});