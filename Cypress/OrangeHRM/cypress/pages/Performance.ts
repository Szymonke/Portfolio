class Perfo {
    private url: string = `https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview`

    checkUrl = ():void => {
        cy.url().should('eql', this.url)
    }
}

export const PerformancePage = new Perfo()