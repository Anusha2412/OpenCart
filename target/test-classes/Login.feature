Feature: As a end user I want to test Login is working as required

  Scenario Outline:
    Given User is on your store page
    When User clicks on my Account
    And On Login button
    And User enters Email as "<email>" and Password as "<password>"
    And Click on Login button
    Then User navigates to MyAccount page

    Examples:
      | email                   |   password        |
      | anu.suri@gmail.com      |   Anusha12        |
      | anu.asuri@gmail.com     |   Anusha1234      |
      | anu.suri@gmail.com      |   Anusha123       |
      | anu.asuri@gmail.com     |   Anusha123       |

