import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";

describe('Testing functionality of the Dashboard Page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
    });
    it('Testing Dashboard Page functionality', () => {
        DashboardPage.checkUrl()
    });
});