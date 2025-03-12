import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";
import { MyInfoPage } from "../pages/MyInfo";

describe('Testing functionality of My Info Page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
        DashboardPage.accessPage('My Info')
    });
    it('Testing My Info Page functionality', () => {
        MyInfoPage.checkUrl()
    });
});