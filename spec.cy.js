describe('Testing HR Management Website', () => {
  it('Negative Log In test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('button').contains('Login').wait(500).click() // tests if it can be accessed without putting in valid credentials 
    cy.get('input.oxd-input:first').wait(500).type('123123123')
    cy.get('input.oxd-input[name="password"]').wait(500).type('123123123')
    cy.get('button').contains('Login').wait(500).click()
    cy.get('[role=alert]').should('be.visible') // Checks if an error appears upon entering invalid password
    cy.get('input.oxd-input:first').wait(500).type('#%##@!!@#')
    cy.get('input.oxd-input[name="password"]').wait(500).type('@#!#!@#^^##@@')
    cy.get('button').contains('Login').wait(500).click()
    cy.get('[role=alert]').should('be.visible') // Checks if an error appears upon entering invalid password
    cy.get('input.oxd-input:first').wait(500).type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    cy.get('input.oxd-input[name="password"]').wait(500).type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    cy.get('button').contains('Login').wait(500).click()
    cy.get('[role=alert]').should('be.visible') // Checks if an error appears upon entering invalid password
  })
  it('Positive Log In test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM') // Checks if title is displayed as intended
    cy.get('input.oxd-input:first').wait(500).type('Admin')
    cy.get('input.oxd-input[name="password"]').wait(500).type('admin123')
    cy.get('button').contains('Login').wait(500).click()
  })
  
  it('Testing search bar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input.oxd-input:first').wait(500).type('Admin')
    cy.get('input.oxd-input[name="password"]').wait(500).type('admin123')
    cy.get('button').contains('Login').wait(500).click()
    cy.get('input[placeholder="Search"]').type('Admin').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('PIM').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('Leave').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('Time').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('Recruitment').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('My info').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('Performance').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('Dashboard').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('Directory').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('Maintenance').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('Claim').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('Buzz').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('Test').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('123123').wait(1000).clear()
    cy.get('input[placeholder="Search"]').type('!@#$%^&').wait(1000).clear()
  })

  it('Testing Navigation Bar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input.oxd-input:first').wait(500).type('Admin')
    cy.get('input.oxd-input[name="password"]').wait(500).type('admin123')
    cy.get('button').contains('Login').wait(500).click()
    cy.get('a').contains('Admin').click()
    cy.get('a').contains('PIM').click()
    cy.get('a').contains('Leave').click()
    cy.get('a').contains('Time').click()
    cy.get('a').contains('Recruitment').click()
    cy.get('a').contains('My Info').click()
    cy.get('a').contains('Performance').click()
    cy.get('a').contains('Dashboard').click()
    cy.get('a').contains('Directory').click()
    cy.get('a').contains('Maintenance').click()
    cy.get('input[name="username"]').clear({force: true}).wait(500).type('Admin', {force: true}) // Enters the username
    cy.get('input[name="password"]').wait(500).type('admin123', {force: true}) // Enters the password
    cy.get('button').contains('Confirm').wait(500).click() // Accesses the page to make navigation tab available again 
    cy.get('a').contains('Claim').click()
    cy.get('a').contains('Buzz').click()
  })

  it('Testing Maintenance Page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input.oxd-input:first').wait(500).type('Admin')
    cy.get('input.oxd-input[name="password"]').wait(500).type('admin123')
    cy.get('button').contains('Login').wait(500).click()

    cy.get('a').contains('Maintenance').click() // Accesses subject of the test case
    cy.get('input[name="username"]').clear({force: true})
    cy.get('button').contains('Confirm').wait(500).click() // Tests if it can be accessed without putting in valid credentials
    cy.get('span').contains('Required').should('be.visible') // Checks if an error appears under required fields
    cy.get('input[name="password"]').wait(500).type('123123123', {force: true}) 
    cy.get('button').contains('Confirm').wait(500).click() // Tests if any password will work
    cy.get('[role=alert]').should('be.visible') // Checks if an error appears upon entering invalid password
    cy.get('input[name="username"]').clear({force: true}).wait(500).type('Admin', {force: true})
    cy.get('input[name="password"]').wait(500).type('admin123', {force: true})
    cy.get('button').contains('Confirm').wait(500).click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee')

  })

})