class Login {
    private username: string = "#userName"
    private password: string = "#password"
    private loginButton: string = "#login"
    private invalidCredentialsMessage: string = "#name"

    get usernameElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.username)
    }
    get passwordElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.password)
    }
    get loginElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.loginButton)
    }
    get invalidMessageElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.invalidCredentialsMessage)
    }

    submitLogin = (username:string,password:string):void =>{
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.loginButton).click()
    }

    checkInvalidCredentialsMessage = ():void =>{
        cy.get(this.invalidCredentialsMessage).should('be.visible').and('contain','Invalid')
    }

    visit = ():void =>{
        cy.visit(`${Cypress.env("demoQA")}/login`)
    }
}



export const LoginPage = new Login();