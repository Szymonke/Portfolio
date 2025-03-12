class Login{
    private loginPage: string = `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`

    private usernameField: string = `input[name="username"]`
    private passwordField: string = `input[name="password"]`
    private loginButton: string = `button[type="submit"]`
    private missingCredentialsMessage: string = `span.oxd-input-group__message`
    private invalidCredentialsMessage: string = `div.oxd-alert-content--error`

    submitLogin = (username: string, password: string):void => {
        if(username&&password){
            cy.get(this.usernameField).type(username)
            cy.get(this.passwordField).type(password)
        }
        cy.get(this.loginButton).click()
    }

    loginAsAdmin = ():void => {
        this.visit()
        this.submitLogin('Admin', 'admin123')
    }

    checkIfCredentialsAreFilled = ():void => {
        cy.get(this.missingCredentialsMessage).should('be.visible')
    }

    checkIfCredentialsAreValid = ():void => {
        cy.get(this.invalidCredentialsMessage).should('be.visible')
    }
    
    checkURL = ():void => {
        cy.url().should('eql',this.loginPage)
    }

    visit = ():void => {
        cy.visit(this.loginPage)
    }
}

export const Loginpage = new Login() 