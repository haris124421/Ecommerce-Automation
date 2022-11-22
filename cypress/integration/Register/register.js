import poRegister from "../../fixtures/page_objects/register.json";
import testDataRegister from "../../fixtures/test_data/register.json";
import poDashboard from "../../fixtures/page_objects/dashboard.json";
let GLOBAL_EMAIL = "email" +Math.floor(Math.random() * 1000) + "@gmail.com";

describe('Test suite for registration module', ()=> {
    beforeEach(()=> {
        cy.visit("https://demowebshop.tricentis.com/");
    })

    afterEach(()=> {
        if (Cypress.$('.header-links > ul > :nth-child(1) > .account').length > 1) {
            cy.get(poDashboard.button_logout).click();
        }
    })

    it('tc01 Verify user is able to access application', () => {
        //Verify user is able to access application
        // cy.visit('https://demowebshop.tricentis.com/')
        //asserts
        cy.url().should('eq','https://demowebshop.tricentis.com/')
    } )

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

    it('Verify an error message should appear when user enter different password and confirm password values', ()=> {
        // 2. Click register button
        cy.get('.ico-register').click();
        // 3. Fill information for registration
        cy.get('#FirstName').type("First");
        cy.get('#LastName').type("last");
        cy.get('#Email').type('echo233399@gmail.com');

        // 4. provide password
        cy.get('#Password').type('1234567');

        // 5. enter confirm password different than password field value
        cy.get('#ConfirmPassword').type('123456');

        // 6. Click on register button"
        cy.get('#register-button').click();

        cy.get('.field-validation-error > span').should('be.visible');
        cy.get('.field-validation-error > span').should('contain', 'The password and confirmation password do not match.');
    })

    it.only('verify user is able to perform sign in with new account and when user logout then user email should not be displayed', ()=>{
        // 2. Click register button
        cy.get('.ico-register').click();
        // 3. Fill information for registration
        cy.get('#FirstName').type("First");
        cy.get('#LastName').type("last");
        cy.get('#Email').type(GLOBAL_EMAIL);
        // 4. provide password
        cy.get('#Password').type('1234567');
        // 5. enter confirm password different than password field value
        cy.get('#ConfirmPassword').type('1234567');
        cy.get('#register-button').click();
        // verify user is logged in
        cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible');
        // click on logout
        cy.get('.ico-logout').click();
        // verify span is not visible
        cy.get('.header-links > ul > :nth-child(1) > .account').should('not.exist');
    })

    it('WITH FIXTURES - verify user is able to perform sign in with new account and when user logout then user email should not be displayed', ()=>{
        cy.get(poDashboard.button_register).click();
        cy.get(poRegister.field_firstName).type("First");
        cy.get(poRegister.field_lastName).type("last");
        cy.get(poRegister.field_email).type(GLOBAL_EMAIL);
        cy.get(poRegister.field_password).type(testDataRegister.valid_password);
        cy.get(poRegister.field_confirm_password).type(testDataRegister.valid_password);
        cy.get(poRegister.button_register).click();
        cy.get(poRegister.error_message_mismatch_password).should('be.visible');
        cy.get(poDashboard.button_logout).click();
        cy.get(poRegister.error_message_mismatch_password).should('not.exist');
    })

    it.only('perform login and leave the state as it is..', ()=>{
        cy.get(poDashboard.button_register).click();
        cy.get(poRegister.field_firstName).type("First");
        cy.get(poRegister.field_lastName).type("last");
        cy.get(poRegister.field_email).type(GLOBAL_EMAIL);
        cy.get(poRegister.field_password).type(testDataRegister.valid_password);
        cy.get(poRegister.field_confirm_password).type(testDataRegister.valid_password);
        cy.get(poRegister.button_register).click();
        cy.get(poRegister.error_message_mismatch_password).should('be.visible');
        // cy.get(poDashboard.button_logout).click();
        // cy.get(poRegister.error_message_mismatch_password).should('not.exist');
    })
})