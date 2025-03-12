import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";
import { MaintenancePage } from "../pages/Maintenance";

describe('Testing functionality of the Maintenance Page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
        DashboardPage.accessPage('Maintenance')
        MaintenancePage.authenticateAsAdmin()
    });
    it('Testing Maintenance Page functionality', () => {
        MaintenancePage.checkUrl()
    });
});