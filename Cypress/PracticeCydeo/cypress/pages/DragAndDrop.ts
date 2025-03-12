const DragAndDropPage = {
    boxA: '#column-a' as string,
    boxB: '#column-b' as string,

    visit(): void{
        cy.visit('https://practice.cydeo.com/drag_and_drop')
    },

    standardCypressDrag(): void {
        cy.get(this.boxA).trigger('dragstart')
        cy.get(this.boxB).trigger('dragend')
        cy.get(this.boxA).should('contain','B')
        cy.get(this.boxB).should('contain','A')
    },

    pluginDrag(): void {
        cy.get(this.boxB).drag(this.boxA)
        cy.get(this.boxA).should('contain','B')
        cy.get(this.boxB).should('contain','A')
    }
}

export default DragAndDropPage;