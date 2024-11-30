const DropdownPage = {
    simpleDropdown: '#dropdown' as string,
    yearOfBirthDropdown: '#year' as string,
    monthOfBirthDropdown: '#month' as string,
    dayOfBirthDropdown: '#day' as string,
    currentYearSelected: '#year option:selected' as string,
    currentMonthSelected: '#month option:selected' as string,
    currentDaySelected: '#day option:selected' as string,
    stateDropdown: '#state' as string,
    languagesDropdown: '[name="Languages"]' as string,
    linkDropdown: '#dropdownMenuLink' as string,

    get todayDate(): Date {
        return new Date()
    },

    get todayDay(): string {
        return this.todayDate.getDate()
    },
    get todayMonth(): string {
        return this.todayDate.getMonth()
    },
    get todayYear(): string {
        return this.todayDate.getFullYear()
    },

    months: [
        {monthName: 'January', days: 31},
        {monthName: 'February', days: 28},
        {monthName: 'March', days: 31},
        {monthName: 'April', days: 30},
        {monthName: 'May', days: 31},
        {monthName: 'June', days: 30},
        {monthName: 'July', days: 31},
        {monthName: 'August', days: 31},
        {monthName: 'September', days: 30},
        {monthName: 'October', days: 31},
        {monthName: 'November', days: 30},
        {monthName: 'December', days: 31}],

    visit(): void {
        cy.visit('https://practice.cydeo.com/dropdown')
    },

    simpleDropdownCheckDefaultState(): void {
        cy.get(this.simpleDropdown).find('option').then((selections)=>{
            expect(selections).to.have.length(3)
            expect(selections[0]).to.be.disabled
            expect(selections[0]).to.be.selected
        })
    },

    simpleDropdownSelectOption(option: number): void {
        if(option === 1 || option === 2){ 
            cy.get(this.simpleDropdown).select(option).should('have.value', option)
        }else{
            cy.log(`There is no ${option} option`)
        }
    },

    dateOfBirthDefaultState(): void {
        cy.get(this.currentYearSelected).invoke('text').should('contain',this.todayYear)
        cy.get(this.currentMonthSelected).invoke('text').should('contain',this.months[this.todayMonth].monthName)
        cy.get(this.currentDaySelected).invoke('text').should('contain',this.todayDay)
    },

    dateOfBirthSelectOptions(year: string, month: string, day: string): void {
        cy.get(this.yearOfBirthDropdown).select(year)
        cy.get(this.monthOfBirthDropdown).select(month)
        cy.get(this.dayOfBirthDropdown).select(day)
    },

    dateOfBirthLeapYearDynamic(year: string): void {
        let isLeapYear: number = +year
        cy.get(this.yearOfBirthDropdown).select(year)
        cy.get(this.monthOfBirthDropdown).select("February")
        if(isLeapYear%4 == 0){
            cy.get(this.dayOfBirthDropdown).find('option').should('have.length','29')
        } else {
            cy.get(this.dayOfBirthDropdown).find('option').should('have.length','28')
        }
    }
}
export default DropdownPage;