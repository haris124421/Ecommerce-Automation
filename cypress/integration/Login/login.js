describe('Login Functionality', () => {
    beforeEach(()=>{
        cy.visit('https://demowebshop.tricentis.com/')
    })

    it('tc01 Verify user is able to access application', () => {
        //Verify user is able to access application
        cy.visit('https://demowebshop.tricentis.com/')
        //asserts
        cy.url().should('eq','https://demowebshop.tricentis.com/')
    })

    it('tc02 Click login link and assert for the login page', () => {
        // cy.visit('https://demowebshop.tricentis.com/')
        //click register button
        cy.get('.ico-login').should('be.visible').click()
        //assert
        cy.get('h1').should('be.visible').should('have.text', 'Welcome, Please Sign In!')
    })

    it('Fill the fields for login and assert for the logged in user', () => {
        cy.get('#Email').should('be.visible').type('demo@cyz.com', {delay: 100})
        cy.get('#Password').should('be.visible').type('1234567', {delay: 100})
        cy.get('form > .buttons > .button-1').should('be.visible').click()
        //assert
        cy.get('.header-links [href="/customer/info"]').should('have.text','demo@cyz.com')
    })
})