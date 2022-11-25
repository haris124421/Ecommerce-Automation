import {Given, Then, And} from "cypress-cucumber-preprocessor/steps";
import plp from "../../../pages/PLP/plp";

Then("I open product details page",() =>{
    plp.iGoToProductDetailPage();
})