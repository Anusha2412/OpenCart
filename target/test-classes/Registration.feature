Feature: As a end user I want to test Registration is working as required

  Scenario: Successful Registration  with valid credentials
    Given User is on your store page
    When User clicks on my Account
    And On registration button
    And Enters all the required personal details
    And Click continue button
    Then An account should be successfully created



