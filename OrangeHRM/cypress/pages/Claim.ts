class Claim {
    private url: string = `https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim`

    checkUrl = ():void => {
        cy.url().should('eql',this.url)
    }
}

export const ClaimPage = new Claim()