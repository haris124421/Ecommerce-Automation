let GLOBAL_ORDER_NUMBER = ""

class common {

    static iAmAtTheStorefront() {
        cy.visit("https://demowebshop.tricentis.com/");
    }

    static iPerformSignInWithRegisteredUser() {
        if ((Cypress.$('#Email').length > 0)) {
            cy.get('#Email').should('be.visible').type("dummytester@gmail.com");
            cy.get('#Password').should('be.visible').type("abcd@1234");
            cy.get('form > .buttons > .button-1').click();
        } else {
            // TBI
        }
    }

    static iClickContinueOnBillingScreen() {
        cy.get('#billing-buttons-container > .button-1').click();
    }

    static iClickContinueOnShippingAddressScreen() {
        cy.get('#shipping-buttons-container > .button-1').click();
    }

    static iAcceptTermsAndConditionsAndClickOnCheckoutButton() {
        this.acceptTermAndConditions();
        this.clickOnCheckoutButton();
    }

    static acceptTermAndConditions() {
        cy.get('#termsofservice').click();
    }

    static clickOnCheckoutButton() {
        cy.get('#checkout').click();
    }

    static iClickContinueButtonOnShippingMethodScreen() {
        cy.get('#shipping-method-buttons-container > .button-1').click();
    }

    static iClickContinueButtonOnPaymentMethodScreen() {
        cy.get('#payment-method-buttons-container > .button-1').click();
    }

    static iClickContinueButtonOnPaymentInformationScreen() {
        cy.get('#payment-info-buttons-container > .button-1').click();
    }

    static iConfirmOrder() {
        cy.get('#confirm-order-buttons-container > .button-1').click();
    }

    static navigateToOrdersHistory() {
        cy.visit('https://demowebshop.tricentis.com/customer/orders')
        cy.get(':nth-child(1) > .buttons > .button-2').click();
    }

    static verifyOrderIsPlacedSuccessfully() {
        cy.get('strong').should('be.visible').should('have.text', 'Your order has been successfully processed!');
        this.navigateToOrdersHistory();
        let locator = ".order-number > strong";

        cy.get('body').then((body) => {
            cy.waitUntil(() => body.find(locator).length > 0, {
                errorMsg: 'Element not found',  // overrides the default error message
                timeout: 30000,                 // waits up to 30000 ms, default to 5000
                interval: 300,                  // performs the check every 300 ms, default to 200
            });
        });
        cy.url().then(urlString => {
            let url = urlString
            let order_number = url.replace("https://demowebshop.tricentis.com/orderdetails/", "")
            GLOBAL_ORDER_NUMBER = order_number
            cy.log(`url: ${url}`)
            cy.log(`order_number: ${order_number}`)
            // database.insertIntoProdDB(order_number);
        })
    }
}

export default common;