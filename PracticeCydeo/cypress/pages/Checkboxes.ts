const CheckboxesPage = {
    checkboxNumberOne: 'input#box1' as string,
    checkboxNumberTwo: 'input#box2' as string,

    checkDefaultCheckboxStatus(): void {
        cy.get(this.checkboxNumberOne).should('not.have.attr', 'checked').as('Box 1 is unchecked by default')
        cy.get(this.checkboxNumberTwo).should('have.attr', 'checked').as('Box 2 is checked by default')
    },

    checkBoxOne(): void {
        cy.get(this.checkboxNumberOne).then((checkbox) => {
            if(checkbox.is(':checked')){
                cy.wrap(checkbox).should('be.checked')
            }else{
                cy.wrap(checkbox).should('not.be.checked')
            }
        })
    },

    checkBoxTwo(): void {
        cy.get(this.checkboxNumberTwo).then((checkbox) => {
            if(checkbox.is(':checked')){
                cy.wrap(checkbox).should('be.checked')
            }else{
                cy.wrap(checkbox).should('not.be.checked')
            }
        })
    }
}

export default CheckboxesPage;