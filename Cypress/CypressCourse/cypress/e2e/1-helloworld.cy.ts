import { any } from "cypress/types/bluebird"

describe('Introduces absolute basics of typescript and cypress', () => {
  it('passes', () => {
    cy.log('hello world')
  })
  it.only('typescript introduction', () => {
    let stringVariable: string = "Hello world" 
    let numberVariable: number = 9
    let boolVariable: boolean = true
    let anyVariable: any = false
    cy.log(String(stringVariable))
    cy.log(String(numberVariable))
    cy.log(String(boolVariable))
    cy.log(String(anyVariable))

    function addition(a: number, b: number){
      let result: number = a+b
      cy.log(String(result))
    }
    addition(85856533,632886553)

    interface User {
      username: string
      password: string
    }

    function returnUserInformation(user: User):void {
      cy.log(user.username)
      cy.log(user.password)
    }
  })
})