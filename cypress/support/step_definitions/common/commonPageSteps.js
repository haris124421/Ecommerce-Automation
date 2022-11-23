import {Given, Then, And} from "cypress-cucumber-preprocessor/steps";
import login from "../../../pages/login/login"
import common from "../../../pages/common/common"

Given("I am at the storefront",() =>{
    common.iAmAtTheStorefront();
})
