import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";

describe('Tests if log in page works as intended', () => {
  beforeEach(() => {
    Loginpage.visit()
  });

  it('Successfully logs in', () => {
    Loginpage.submitLogin('Admin','admin123')
    DashboardPage.checkURL()

  });

  it('Fails to log in', () => {
    Loginpage.submitLogin('','')
    Loginpage.checkIfCredentialsAreFilled()
    Loginpage.checkURL()
    Loginpage.submitLogin('wrongUsername','wrongPassword')
    Loginpage.checkIfCredentialsAreValid()
    Loginpage.checkURL()
  });
});