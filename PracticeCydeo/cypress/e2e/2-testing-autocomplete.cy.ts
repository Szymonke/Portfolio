import AutocompletePage from "../pages/Autocomplete";
import homePage from "../pages/Home";

describe('', () => {
    beforeEach(() => {
        homePage.visit()
    });
    it('', () => {
        homePage.accessPage(homePage.autocompleteNavButton)
        AutocompletePage.submitCountry('Poland')
        AutocompletePage.checkAutoComplete('P')
    });
});