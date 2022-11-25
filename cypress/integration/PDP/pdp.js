import login from "../../pages/login/login";
import pdp from "../../pages/pdp/pdp";

describe('Test suite for pdp module', ()=> {

    beforeEach(()=>{
        cy.visit('https://demowebshop.tricentis.com/')
    })

    it('Verify user is able to add product to cart from pdp screen with logged in user', ()=>{
        login.clickOnLoginLinkToOpenForm();
        login.performLogin();
        pdp.openCategory("Bks");
        pdp.selectFirstProductFromPLP();
        pdp.enterQuantity(5);
        pdp.clickAddToCart();
        pdp.verifyQtyAddedToCart();
    })

    // it('Verify user is able to add product to cart from pdp screen without logged in user', ()=>{
    //     pdp.openCategory("Books");
    //     pdp.selectFirstProductFromPLP();
    //     pdp.enterQuantity(5);
    //     pdp.clickAddToCart();
    //     pdp.verifyQtyAddedToCart();
    // })
})