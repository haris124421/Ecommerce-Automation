import pageObjectsLogin from "../../fixtures/page_objects/login.json"
import testDataLogin from "../../fixtures/test_data/login.json"
import pageObjectDashboard from "../../fixtures/page_objects/dashboard.json"


class login {
    static performLogin() {
        this.enterEmail();
        this.enterPassword();
        this.clickLoginButton();
    }

    static enterEmail() {
        cy.get(pageObjectsLogin.field_email).type(testDataLogin.email);
    }

    static enterPassword() {
        cy.get(pageObjectsLogin.field_password).type(testDataLogin.password);
    }

    static clickLoginButton() {
        cy.get(pageObjectsLogin.button_login).click();
    }

    static clickOnLoginLinkToOpenForm() {
        cy.get(pageObjectDashboard.button_login).click();
    }
}

export default login;