Feature: Test suite for E2E test cases

  Background:
    Given I am at the storefront

  Scenario: Verify user is able to place and order with registered user
    Then I click on login link
#    Then I enter valid credentials
#    Then I click on login button
#    Then I should able to login into application
    Then I search for "in stock" product
    Then I open product details page
    Then I enter product quantity
    Then I add product to the cart
    Then I proceed to shopping cart screen
    Then I accept terms and conditions and click on checkout button
    Then I perform sign in with registered user
    Then I accept terms and conditions and click on checkout button
    Then I click continue on billing screen
    Then I click continue on shipping address screen
    Then I click continue button on shipping method screen
    Then I click continue button on payment method screen
    Then I click continue button on payment information screen
    Then I confirm order
    #Then I verify my order should be place successfully



#    Then I verify that filtered results
#    Then I go to product detail page
#    And I add product to the cart
#    Then I accept terms and conditions and click on checkout button
#    Then I perform sign in with registered user
#    Then I accept terms and conditions and click on checkout button
#    Then I click continue on billing screen
#    Then I click continue on shipping address screen
#    Then I click continue button on shipping method screen
#    Then I click continue button on payment method screen
#    Then I click continue button on payment information screen
#    Then I confirm order
#    Then I verify my order should be place successfully
#    Then I verify my order should exist in system