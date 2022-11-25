import {Given, Then, And} from "cypress-cucumber-preprocessor/steps";
import login from "../../../pages/login/login"
import common from "../../../pages/common/common"

Given("I am at the storefront",() =>{
    common.iAmAtTheStorefront();
})

Then("I perform sign in with registered user",() =>{
    common.iPerformSignInWithRegisteredUser();
})

Then("I click continue on billing screen",() =>{
    common.iClickContinueOnBillingScreen()
})

Then("I click continue on shipping address screen",() =>{
    common.iClickContinueOnShippingAddressScreen()
})

Then("I accept terms and conditions and click on checkout button",() =>{
    common.iAcceptTermsAndConditionsAndClickOnCheckoutButton()
})

Then("I click continue button on shipping method screen",() =>{
    common.iClickContinueButtonOnShippingMethodScreen()
})

Then("I click continue button on payment method screen",() =>{
    common.iClickContinueButtonOnPaymentMethodScreen();
})

Then("I click continue button on payment information screen",() =>{
    common.iClickContinueButtonOnPaymentInformationScreen();
})

Then("I confirm order",() =>{
    common.iConfirmOrder();
})

Then("I verify my order should be place successfully",() =>{
    common.verifyOrderIsPlacedSuccessfully();
})




Then("I verify that filtered results",() =>{
    common.verifyFilteredResults();
})

Then("I go to product detail page",() =>{
    ecommerce.iGoToProductDetailPage()
})

// Then("I proceed to checkout",() =>{
//     ecommerce.iProceedToCheckout()
// })
//
// Then("I proceed to shopping cart screen",() =>{
//     ecommerce.iProceedToCheckout()
// })

And("I submit the order",() =>{
    ecommerce.performSignInAgainIfPrompted();
    ecommerce.iSubmitTheOrder();
})

Then("I verify that my order is submitted",() =>{
    ecommerce.iVerifyThatMyOrderIsSubmitted()
})

Then("I verify that login registration page should display",() =>{
    ecommerce.iVerifyThatLoginRegistrationPageShouldDisplay()
})



Then("I perform login with valid credentials",() =>{
    ecommerce.iPerformSignInWithRegisteredUser();
})

Then("I click continue on billing screen",() =>{
    ecommerce.iClickContinueOnBillingScreen()
})

Then("I click continue on shipping address screen",() =>{
    ecommerce.iClickContinueOnShippingAddressScreen()
})



Then("I click continue button on shipping method screen",() =>{
    ecommerce.iClickContinueButtonOnShippingMethodScreen()
})

Then("I click continue button on payment method screen",() =>{
    ecommerce.iClickContinueButtonOnPaymentMethodScreen();
})

Then("I click continue button on payment information screen",() =>{
    ecommerce.iClickContinueButtonOnPaymentInformationScreen();
})

Then("I confirm order",() =>{
    ecommerce.iConfirmOrder();
})

Then("I submit order",() =>{
    ecommerce.iConfirmOrder();
})
