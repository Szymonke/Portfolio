import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";
import { MaintenancePage } from "../pages/Maintenance";

describe('Tests functionality of the Maintenance login page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
        DashboardPage.accessPage("Maintenance")
    });

    it('Tests valid login credentials', () => {
        MaintenancePage.checkIfUsernameFieldIsDisabled()
        MaintenancePage.submitLogin('admin123')
    });

    it('Tests invalid login credentials', () => {
        MaintenancePage.submitLogin('wrongPassword')
        MaintenancePage.checkIfPasswordIsValid()
    });

    it('Tests missing login credentials', () => {
        MaintenancePage.submitLogin('')
        MaintenancePage.checkIfPasswordIsFilled()
    });
});