import poRegister from "../../fixtures/page_objects/register.json";
import testDataRegister from "../../fixtures/test_data/register.json";
import poDashboard from "../../fixtures/page_objects/dashboard.json";
let GLOBAL_EMAIL = "email" +Math.floor(Math.random() * 1000) +Math.floor(Math.random() * 1000) + "@gmail.com";

describe('Test suite for registration module', ()=> {
    beforeEach(()=> {
        cy.visit("https://demowebshop.tricentis.com/");
    })

    afterEach(()=> {
        if (Cypress.$(poRegister.user_logged_in_tag).length > 1) {
            cy.get(poDashboard.button_logout).click();
        }
    })

    it('perform login and leave the state as it is..', ()=>{
        cy.visit("https://demowebshop.tricentis.com/");
        cy.get(poDashboard.button_register).click();
        cy.get(poRegister.field_firstName).type("First");
        cy.get(poRegister.field_lastName).type("last");
        cy.get(poRegister.field_email).type(GLOBAL_EMAIL);
        cy.get(poRegister.field_password).type(testDataRegister.valid_password);
        cy.get(poRegister.field_confirm_password).type(testDataRegister.valid_password);
        cy.get(poRegister.button_register).click();
        cy.get(poRegister.user_logged_in_tag).should('be.visible');
    })

    it('try to perform login when user is already logged in..', ()=>{
        cy.get(poDashboard.button_login).click()
        //
        //
    })
})