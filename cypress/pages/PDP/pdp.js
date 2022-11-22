import pageObjectsPDP from "../../fixtures/page_objects/pdp.json"
import pageObjectsPLP from "../../fixtures/page_objects/plp.json"

class pdp {

    static openCategory(category) {
        if (category == "Books") {
            cy.get(pageObjectsPDP.category_books).click();
        } else if (category == "Computers") {
            cy.get(pageObjectsPDP.category_computers).click();
        } else if (category == "electronics") {
            cy.get(pageObjectsPDP.category_electronics).click();
        } else {
            cy.get(pageObjectsPDP.category_books).click();
        }
    }

    static selectFirstProductFromPLP() {
        cy.get(pageObjectsPLP.first_product).click();
    }

    static enterQuantity(quantity) {
        cy.get(pageObjectsPDP.field_quantity).clear();
        cy.get(pageObjectsPDP.field_quantity).type(quantity);
    }

    static clickAddToCart() {
        cy.get(pageObjectsPDP.button_add_to_cart).click();
    }

    static verifyQtyAddedToCart() {
        cy.get(pageObjectsPDP.field_atc_value).invoke('val').should('have.text', '5')
    }
}

export default pdp;