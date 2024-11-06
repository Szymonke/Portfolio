class Dashboard {
    private dashboardPage: string = `https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index`

    private searchInput: string = `input[placeholder="Search"]`
    private navBarItems = [
        { page: 'Admin', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers', selector: `//span[text()='Admin']`},
        { page: 'PIM', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList', selector: `//span[text()='PIM']`},
        { page: 'Leave', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList', selector: `//span[text()='Leave']`},
        { page: 'Time' , url: 'https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet', selector: `//span[text()='Time']`},
        { page: 'Recruitment', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates', selector: `//span[text()='Recruitment']`},
        { page: 'My Info', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7', selector: `//span[text()='My Info']`},
        { page: 'Performance', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview', selector: `//span[text()='Performance']`},
        { page: 'Dashboard', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index', selector: `//span[text()='Dashboard']`},
        { page: 'Directory', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory', selector: `//span[text()='Directory']`},
        { page: 'Maintenance', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee', selector: `//span[text()='Maintenance']`},
        { page: 'Claim', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim', selector: `//span[text()='Claim']`}]
      
    checkNavigationBarContents = () => {
        this.navBarItems.forEach(item =>{
            cy.xpath(item.selector).should('contain',item.page)
        })
    }

    checkNavigationBarFunctionality = () => {
        this.navBarItems.forEach(item => {
            cy.xpath(item.selector).click()
            cy.url().should('eql', item.url)
            if(item.page === "Maintenance"){
                cy.get('button.oxd-button--ghost').click()
            }
        })
    }

    checkSearchBarFunctionality = () => {
        this.navBarItems.forEach(item => {
            cy.get(this.searchInput).type(item.page)
            cy.xpath(item.selector).should('be.visible')
            cy.get(this.searchInput).clear()
        })
    }
    checkURL = () =>{
        cy.url().should('eql', this.dashboardPage)
    }
}

export const DashboardPage = new Dashboard(); 