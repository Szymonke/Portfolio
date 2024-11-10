class Recruitment {
    private url:string = `https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates`

    checkUrl = ():void => {
        cy.url().should('eql', this.url)
    }
}

export const RecruitmentPage = new Recruitment()