class Directory {
    private url:string = `https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory`

    checkUrl = ():void => {
        cy.url().should('eql',this.url)
    }
}

export const DirectoryPage = new Directory()