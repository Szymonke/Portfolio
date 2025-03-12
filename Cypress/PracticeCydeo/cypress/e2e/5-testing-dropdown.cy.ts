import DropdownPage from "../pages/Dropdown";

describe('Tests different dropdown lists', () => {
    beforeEach(() => {
        DropdownPage.visit()
    });

    it('Tests functionality of Simple Dropdown list', () => {
        DropdownPage.simpleDropdownCheckDefaultState()
        DropdownPage.simpleDropdownSelectOption(1)
        DropdownPage.simpleDropdownSelectOption(2)
        DropdownPage.simpleDropdownSelectOption(0)
    });
    it('Tests functionality of the Date of Birth Dropdown list', () => {
        DropdownPage.dateOfBirthDefaultState()
        DropdownPage.dateOfBirthSelectOptions('2021','November','6')
        DropdownPage.dateOfBirthLeapYearDynamic('2024')
        DropdownPage.dateOfBirthLeapYearDynamic('2021')
    });
});