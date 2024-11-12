const homePage = {
    addRemoveElementsNavButton: '//a[(text()="Add/Remove Elements")]' as string,
    visit():void {
        cy.visit('https://practice.cydeo.com/')
    },

    accessPage(page: string):void {
        cy.xpath(`${page}`).click()
    }    
  };
  
  export default homePage;