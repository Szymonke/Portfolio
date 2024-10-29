class Dashboard {
    private dashboardPage: string = `https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index`

    private searchBar: string = `input[placeholder="Search"]`

    checkURL = () =>{
        cy.url().should('eql', this.dashboardPage)
    }
}

export const DashboardPage = new Dashboard(); 