class Time {
    private url: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet'

    checkUrl = ():void => {
        cy.url().should('eql',this.url)
    }
}
export const TimePage = new Time()