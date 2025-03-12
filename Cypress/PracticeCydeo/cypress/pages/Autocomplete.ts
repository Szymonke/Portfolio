import { forEach } from "cypress/types/lodash"

const AutocompletePage = {
    inputCountryField: 'input#myCountry' as string,
    submitButton: 'input.btn-primary' as string,
    resultText: 'p#result' as string,
    autoCompleteList: 'div#myCountryautocomplete-list' as string,

    visit(): void{
        cy.visit('https://practice.cydeo.com/autocomplete')
    },

    submitCountry(country: string): void {
        cy.get(this.inputCountryField).type(country).then(() =>{
            cy.get(this.submitButton).click()
            cy.get(this.resultText).should('contain',`${country}`)
        })
    },

    checkAutoComplete(input: string): void {
        cy.get(this.inputCountryField).type(input)
        cy.get(this.autoCompleteList).find('div').each((autocomplete) =>{
            expect(autocomplete).to.contain(input)
        })
    }
}

export default AutocompletePage;