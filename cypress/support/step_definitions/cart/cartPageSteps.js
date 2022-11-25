import {Given, Then, And} from "cypress-cucumber-preprocessor/steps";
import login from "../../../pages/login/login"
import common from "../../../pages/common/common"
import cart from "../../../pages/cart/cart"

Then("I proceed to shopping cart screen",() =>{
    cart.iProceedToCheckout()
})

Then("I accept terms and conditions and click on checkout button",() =>{
    cart.iAcceptTermsAndConditionsAndClickOnCheckoutButton()
})