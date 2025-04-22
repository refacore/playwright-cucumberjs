Feature: Playwright Website
  As a user
  I want to visit Playwright website
  So that I can learn more about it
  
  Background: Background name
    Given I am on the Playwright website

  @playwright @homePage
  Scenario: Visit Playwright homepage
    Given I am on the Playwright website
    When I look at the page title
    Then I should see "Playwright" in the title
