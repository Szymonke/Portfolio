import { ClaimPage } from "../pages/Claim";
import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";

describe('Testing functionality of the Claim Page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
        DashboardPage.accessPage('Claim')
    });
    it('Testing Claim Page functionality', () => {
        ClaimPage.checkUrl()
    });
});