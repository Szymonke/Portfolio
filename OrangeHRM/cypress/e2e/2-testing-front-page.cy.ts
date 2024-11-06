import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";

describe('Tests if front page works as intended', () => {
    beforeEach(() => {
        Loginpage.visit()
        Loginpage.submitLogin('Admin','admin123')
        DashboardPage.checkURL()
    });
    
    it('Tests if search bar works as intended', () => {
        DashboardPage.checkNavigationBarContents()
        DashboardPage.checkSearchBarFunctionality()
    });
    it('Tests if navigation bar works as intended', () => {
        DashboardPage.checkNavigationBarFunctionality()
    });
});