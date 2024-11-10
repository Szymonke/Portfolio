import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";
import { RecruitmentPage } from "../pages/Recruitment";

describe('Testing functionality of the Recruitment Page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
        DashboardPage.accessPage('Recruitment')
    });
    it('Testing Recruitment Page functionality', () => {
        RecruitmentPage.checkUrl()
    });
});