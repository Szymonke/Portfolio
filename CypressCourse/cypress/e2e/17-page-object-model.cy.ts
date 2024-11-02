import { LoginPage } from "../pages/Login"

describe('Introduction to Page Object Model', () => {
    beforeEach(() => {
        LoginPage.visit()
    });
    it('Positive scenario', () => {
        LoginPage.submitLogin('test','Test1234*')
    });
    it('Negative scenario', ()=>{
        LoginPage.submitLogin('wrongUsername','wrongPassword')
        LoginPage.checkInvalidCredentialsMessage()
    })
});