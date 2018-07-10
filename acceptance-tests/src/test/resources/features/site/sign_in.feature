@SignIn
Feature: Test SignIn

  As an admin user
  I want to sign in to WebApp
  So that I can view admin dashbaord

  Scenario: Verify valid Sign in
    Given I navigate to the "sign-in" page
    Then I should see the page titled "Sign in"
    And I type username "abc@def.co.uk" and password "test123"
    And I can click Sign in button
    Then I should see the page titled "Sample Page Title"
    And I should see username as "Sampath"
    And I should see signout link