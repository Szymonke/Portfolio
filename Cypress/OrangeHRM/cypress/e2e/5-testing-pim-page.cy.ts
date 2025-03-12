import { DashboardPage } from "../pages/Dashboard";
import { Loginpage } from "../pages/Login";
import { PimPage } from "../pages/PIM";

describe('Testing funtionality of the PIM page', () => {
    beforeEach(() => {
        Loginpage.loginAsAdmin()
        DashboardPage.accessPage('PIM')
    });
    it('Testing PIM page functionality', () => {
        PimPage.checkURL()
    });
});