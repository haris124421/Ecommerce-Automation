import {Given, Then, And} from "cypress-cucumber-preprocessor/steps";
import login from "../../../pages/login/login"
import pdp from "../../../pages/PDP/pdp";
import database from "../../../pages/database/database";

Then('I select category as {string}', (category) => {
    pdp.openCategory(category);
})

Then('I select first product from PLP', () => {
    pdp.selectFirstProductFromPLP();
})

Then('I enter product quantity', () => {
    pdp.enterQuantity(5);
})

Then('I search for in stock product', () => {
    database.searchForInStockProduct();
})

Then('I search for {string} product', (productType) => {
    database.getProductFromDB(productType);
})

And("I add product to the cart",() =>{
    pdp.clickAddToCart()
})
