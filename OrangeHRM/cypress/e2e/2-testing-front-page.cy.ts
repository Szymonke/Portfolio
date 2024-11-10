import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";

describe('Tests if front page works as intended', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
    });
    
    it('Tests if search bar works as intended', () => {
        DashboardPage.checkUrl()
        DashboardPage.checkNavigationBarContents()
        DashboardPage.checkSearchBarFunctionality()
    });
    it('Tests if navigation bar works as intended', () => {
        DashboardPage.checkNavigationBarFunctionality()
    });
});