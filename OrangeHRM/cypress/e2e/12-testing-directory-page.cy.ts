import { DashboardPage } from "../pages/Dashboard";
import { DirectoryPage } from "../pages/Directory";
import { Loginpage } from "../pages/Login";

describe('Testing functionality of the Directory Page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
        DashboardPage.accessPage('Directory')
    });
    it('Testing Directory Page functionality', () => {
        DirectoryPage.checkUrl()
    });
});