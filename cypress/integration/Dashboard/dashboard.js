describe('Dashboard Functionality', () => {
    beforeEach(()=>{
        cy.visit('https://demowebshop.tricentis.com/')
    })

    it('TC_DASHB_01: Verify user is able to access application', () => {
        //Verify user is able to access application
        //asserts
        cy.url().should('eq','https://demowebshop.tricentis.com/')
    })

    it('TC_DASHB_02: Verify for the neccessary items on the homepage (example: register, login, add to cart etc)', () => {
        cy.get('.ico-register').should('be.visible')
        cy.get('.ico-login').should('be.visible')
        cy.get('.ico-cart > .cart-label').should('be.visible')
    })
})