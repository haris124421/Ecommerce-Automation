import {Given, Then, And} from "cypress-cucumber-preprocessor/steps";
import login from "../../../pages/login/login"

Then("I click on login link",() =>{
    login.clickOnLoginLinkToOpenForm();
})

Then("I enter valid credentials",() =>{
    login.iEnterValidCredentials();
})

Then("I click on login button",() =>{
    login.iClickOnLoginButton();
})

Then("I should able to login into application",() =>{
    login.iShouldAbleToLoginIntoApplication();
})

