let img: HTMLImageElement
describe('Checks images', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/broken`)
    });
    it('A working image', () => {
        cy.get('div > img[src="/images/Toolsqa.jpg"]').should('be.visible').and(($img)=>{
            img = $img[0] as unknown as HTMLImageElement
            expect(img.naturalWidth).to.be.greaterThan(0)
        })
    });
    it('A broken image', () => {
        cy.get('div > img[src="/images/Toolsqa_1.jpg"]').should('be.visible').and(($img)=>{
            img = $img[0] as unknown as HTMLImageElement
            expect(img.naturalWidth).to.be.greaterThan(0)
        })
    });
});

describe('Checks images using first() and last()', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('theInternet')}/broken_images`)
    });
    it('A working image', () => {
        cy.get('div.example img').last().should('be.visible').and(($img)=>{
            img = $img[0] as unknown as HTMLImageElement
            expect(img.naturalWidth).to.be.greaterThan(0)
        })
    });
    it('A broken image', () => {
        cy.get('div.example img').first().should('be.visible').and(($img)=>{
            img = $img[0] as unknown as HTMLImageElement
            expect(img.naturalWidth).to.be.greaterThan(0)
        })
    });
});