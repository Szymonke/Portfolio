describe('Mocha introduction', () => {
    before(()=>{
        cy.log('before hook')
    })
    after(()=>{
        cy.log('after hook')
    })
    beforeEach(() =>{
        cy.log('this calls after each test')
    })
    afterEach(() =>{
        cy.log('this calls before each test')
    })
    it('testcase #1', () =>{
        cy.log('testcase#1')
    })
    it('testcase #2', () =>{
        cy.log('testcase#2')
    })
    it('testcase #3', () =>{
        cy.log('testcase#3')
    })
    it('testcase #4', () =>{
        cy.log('testcase#3')
    })
})