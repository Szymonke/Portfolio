import { DashboardPage } from "../pages/Dashboard";
import { LeavePage } from "../pages/Leave";
import { Loginpage } from "../pages/Login";

describe('Testing functionality of the Leave page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
        DashboardPage.accessPage('Leave')
    });
    it('Testing leave page', () => {
        LeavePage.checkUrl()
    });
});