class cart {
    static iProceedToCheckout() {
        cy.get('.ico-cart > .cart-label').click();
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
}

export default cart;