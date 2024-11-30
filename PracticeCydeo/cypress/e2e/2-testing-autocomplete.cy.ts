import AutocompletePage from "../pages/Autocomplete";

describe('', () => {
    beforeEach(() => {
        AutocompletePage.visit()
    });
    it('', () => {
        AutocompletePage.submitCountry('Poland')
        AutocompletePage.checkAutoComplete('A')
    });
});