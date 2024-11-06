class MaintenanceLogin {
    private usernameField: string = `input[name="username"]`
    private passwordField: string = `input[type="password"]`
    private loginButton: string = `//button[text()=" Confirm "]`
    private invalidCredentialsMessage: string = `//p[text()="Invalid credentials"]`
    private missingCredentialsMessage: string = `//span[text()="Required"]`

    submitLogin = (password: string):void => {
        if(password){
            cy.get(this.passwordField).type(password)
        }
        cy.xpath(this.loginButton).click()
    }

    checkIfPasswordIsFilled = ():void => {
        cy.xpath(this.missingCredentialsMessage).should('be.visible')
    }

    checkIfPasswordIsValid = ():void => {
        cy.xpath(this.invalidCredentialsMessage).should('be.visible')
    }
    
    checkIfUsernameFieldIsDisabled = ():void => {
        cy.get(this.usernameField).should('have.attr', 'disabled')
    }
}

export const MaintenanceLoginPage = new MaintenanceLogin()