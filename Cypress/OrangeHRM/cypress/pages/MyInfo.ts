class MyInfo {
    private url: string = `https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7`

    checkUrl = ():void => {
        cy.url().should('eql', this.url)
    }
}

export const MyInfoPage = new MyInfo()