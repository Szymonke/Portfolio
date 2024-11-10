class Leave {
    private url: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList'

    checkUrl = ():void => {
        cy.url().should('eql', this.url)
    }
}
export const LeavePage = new Leave()