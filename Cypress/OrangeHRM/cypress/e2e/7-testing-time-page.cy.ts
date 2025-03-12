import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";
import { TimePage } from "../pages/Time";

describe('Testing functionality of the Time Page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
        DashboardPage.accessPage('Time')
    });
    it('Testing Time page functionality', () => {
        TimePage.checkUrl()
    });
});