import AutocompletePage from "../pages/Autocomplete";
import homePage from "../pages/Home";

describe('', () => {
    beforeEach(() => {
        homePage.visit()
        homePage.accessPage(homePage.autocompleteNavButton)
    });
    it('', () => {
        AutocompletePage.submitCountry('Poland')
        AutocompletePage.checkAutoComplete('A')
    });
});