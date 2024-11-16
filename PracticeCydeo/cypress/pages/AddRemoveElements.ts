const addRemoveElementsPage = {
    addElementButton: 'button[onclick="addElement()"]' as string,
    deleteElementButton: 'button[onclick="deleteElement()"]' as string,
    amountOfDeleteButtons: 0 as number,

    clickButtonXTimes(x: number): void {
        for(let y: number = 0; x>y; y++) {
            cy.get(this.addElementButton).click()
            this.amountOfDeleteButtons++
        }
        if(this.amountOfDeleteButtons>0){
            cy.get(this.deleteElementButton).should('be.visible').and('have.length',this.amountOfDeleteButtons)
        }else{
            cy.log('No elemets were created')            
        }
    },

    deleteXElements(x: number): void{
        let deletions: number = Math.min(x, this.amountOfDeleteButtons);
        
        for(let y: number = 0; y<deletions; y++){
            cy.get(this.deleteElementButton).first().click()
            this.amountOfDeleteButtons--
        }
        if(this.amountOfDeleteButtons>0){
            cy.get(this.deleteElementButton).should('be.visible').and('have.length',this.amountOfDeleteButtons)
        }else{
            cy.log('No more elements to delete')            
        }
    }

    
}

export default addRemoveElementsPage;