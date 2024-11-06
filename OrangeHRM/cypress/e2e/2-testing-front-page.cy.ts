import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";

describe('Tests if front page works as intended', () => {
    beforeEach(() => {
        Loginpage.visit()
        Loginpage.submitLogin('Admin','admin123')
    });
    
    it('Tests search bar functionality', () => {
        DashboardPage.checkURL()
        DashboardPage.checkNavigationBarContents()
        DashboardPage.checkSearchBarFunctionality()
        DashboardPage.checkNavigationBarFunctionality()
    });
});