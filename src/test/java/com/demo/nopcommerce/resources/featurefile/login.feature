Feature: Login feature
  As a user I want to login into nope commerce website

  Scenario: User should navigate to login page successfully
    Given I am on home page
    When I click on login link
    Then I should navigate to login page successfully

  Scenario: User should login successfully with valid credentials
    Given I am on home page
    When I click on login link
    And I enter email "bjrpatel17@yahoo.com"
    And I enter password "abc123"
    And I click on login button
    Then I should login successfully

  Scenario Outline: User should Login successfully with valid credentials
    Given I am on home page
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should login successfully
    Examples:
      | email            | password |
      | xyz13@gmail.com  | abc123   |
      | xyz1@gmail.com   | abc1234  |
      | ram111@yahoo.com | london3  |
      | ram222@yahoo.com | london1  |
      | ram333@yahoo.com | london2  |
      | ram444@yahoo.com | london4  |
      | ram555@yahoo.com | london5  |
