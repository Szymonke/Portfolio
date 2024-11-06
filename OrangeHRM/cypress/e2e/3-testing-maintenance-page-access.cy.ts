import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";
import { MaintenanceLoginPage } from "../pages/MaintenanceLogin";

describe('Tests functionality of the Maintenance login page', () => {
    beforeEach(() => {
        Loginpage.visit()
        Loginpage.submitLogin('Admin','admin123')
        DashboardPage.accessPage("Maintenance")
    });

    it('Tests valid login credentials', () => {
        MaintenanceLoginPage.checkIfUsernameFieldIsDisabled()
        MaintenanceLoginPage.submitLogin('admin123')
    });

    it('Tests invalid login credentials', () => {
        MaintenanceLoginPage.submitLogin('wrongPassword')
        MaintenanceLoginPage.checkIfPasswordIsValid()
    });

    it('Tests missing login credentials', () => {
        MaintenanceLoginPage.submitLogin('')
        MaintenanceLoginPage.checkIfPasswordIsFilled()
    });
});