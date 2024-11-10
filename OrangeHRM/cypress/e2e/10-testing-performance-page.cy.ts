import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";
import { PerformancePage } from "../pages/Performance";

describe('Testing functionality of the Performance Page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
        DashboardPage.accessPage('Performance')
    });
    it('Testing Performance Page functionality', () => {
        PerformancePage.checkUrl()
    });
});