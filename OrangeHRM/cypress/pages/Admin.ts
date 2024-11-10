import { toInteger } from "cypress/types/lodash"

class Admin {
    private url:string = `https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers`
    private headerCheckbox:string = `.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon`
    private deleteSelectedButton: string = `.orangehrm-horizontal-padding > div > .oxd-button`
    private deleteAccountButton: string = `i.bi-trash`
    private allEntries: string = `div.oxd-table-row--with-border`

    selectAllRecords = () => {
        cy.get(this.headerCheckbox).click()
    }

    checkIfDeleteButtonIsVisible = () => {
        cy.get(this.deleteSelectedButton).should('be.visible')
    }

    testing = () => {
        cy.get(this.allEntries).contains('Admin')
    }

    checkURL = () => {
        cy.url().should('eql', this.url)
    }
}
export const AdminPage = new Admin()