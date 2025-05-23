import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";

describe('Tests if log in page works as intended', () => {
  beforeEach(() => {
    Loginpage.visit()
  });

  it('Tests valid login credentials', () => {
    Loginpage.submitLogin('Admin','admin123')
    DashboardPage.checkUrl()

  });

  it('Tests invalid login credentials', () => {
    Loginpage.submitLogin('wrongUsername','wrongPassword')
    Loginpage.checkIfCredentialsAreValid()
    Loginpage.checkURL()
  });

  it('Tests missing login credentials', () => {
    Loginpage.submitLogin('','')
    Loginpage.checkIfCredentialsAreFilled()
    Loginpage.checkURL()
  });
});