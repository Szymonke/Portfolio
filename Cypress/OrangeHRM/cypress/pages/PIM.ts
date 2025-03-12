class Pim {
    private url: string = "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"

    checkURL = ():void => {
        cy.url().should('eql', this.url)
    }
}

export const PimPage = new Pim()