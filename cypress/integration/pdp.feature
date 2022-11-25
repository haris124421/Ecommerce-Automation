Feature: Test suite for PDP test cases

  Background:
    Given I am at the storefront

  Scenario: Verify user is able to add product to cart from pdp screen with logged in user
    Then I click on login link
    Then I enter valid credentials
    Then I click on login button
    Then I select category as "Books"
    Then I select first product from PLP
    Then I enter product quantity
    Then I add product to the cart

  Scenario: Verify user is able search a low in stock product
    Then I click on login link
    Then I enter valid credentials
    Then I click on login button
    Then I search for "low in stock" product

  Scenario: Verify user is able search a in stock product
    Then I click on login link
    Then I enter valid credentials
    Then I click on login button
    Then I search for "in stock" product
    Then I add product to the cart
