import CheckboxesPage from "../pages/Checkboxes";
import homePage from "../pages/Home";

describe('', () => {
    beforeEach(() => {
        homePage.visit()
        homePage.accessPage(homePage.checkboxesNavButton)
    });
    it('', () => {
        CheckboxesPage.checkBoxOne()
        CheckboxesPage.checkBoxTwo()
    });
});