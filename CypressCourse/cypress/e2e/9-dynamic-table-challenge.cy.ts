describe('Dynamic Table Challenge', () => {
    beforeEach(() => {
        cy.visit('/dynamictable')
    });
    it('Chrome CPU Test', () => {
        cy.get(`div[role="row"] span`).each(($cell)=>{
            if($cell.text().includes('Chrome')){
                cy.log(`I have found the ${$cell.text()} value`)
                let chromeRowValues:string[] = []
                chromeRowValues.push($cell.next().text())
                chromeRowValues.push($cell.next().next().text())
                chromeRowValues.push($cell.next().next().next().text())
                chromeRowValues.push($cell.next().next().next().next().text())
                chromeRowValues.forEach((rowValue)=>{
                    if(rowValue.includes('%')){
                        cy.log(rowValue)
                        cy.get('.bg-warning').should('contain',`${rowValue}`)
                    }
                })
            }
        })
    });
});