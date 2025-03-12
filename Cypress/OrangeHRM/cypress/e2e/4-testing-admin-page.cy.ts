import { AdminPage } from "../pages/Admin";
import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";

describe('Testing functionality of the Admin page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
        DashboardPage.accessPage('Admin')
    });
    it('Tests Admin Page functionality', () => {
        AdminPage.checkURL()
        AdminPage.selectAllRecords()
        AdminPage.checkIfDeleteButtonIsVisible()
        AdminPage.testing()
    });
});