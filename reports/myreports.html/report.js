$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "As a end user I want to test Login is working as required",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on your store page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on my Account",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "On Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigates to MyAccount page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 12,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;1"
    },
    {
      "cells": [
        "anu.suri@gmail.com",
        "Anusha12"
      ],
      "line": 13,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;2"
    },
    {
      "cells": [
        "anu.asuri@gmail.com",
        "Anusha1234"
      ],
      "line": 14,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;3"
    },
    {
      "cells": [
        "anu.suri@gmail.com",
        "Anusha123"
      ],
      "line": 15,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;4"
    },
    {
      "cells": [
        "anu.asuri@gmail.com",
        "Anusha123"
      ],
      "line": 16,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3978790515,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on your store page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on my Account",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "On Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"anu.suri@gmail.com\" and Password as \"Anusha12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigates to MyAccount page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_your_store_page()"
});
formatter.result({
  "duration": 611175935,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_my_Account()"
});
formatter.result({
  "duration": 113033357,
  "status": "passed"
});
formatter.match({
  "location": "Steps.on_Login_button()"
});
formatter.result({
  "duration": 741197269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anu.suri@gmail.com",
      "offset": 22
    },
    {
      "val": "Anusha12",
      "offset": 59
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 269187897,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 908765905,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_navigates_to_MyAccount_page()"
});
formatter.result({
  "duration": 10208788,
  "error_message": "java.lang.AssertionError: \nExpected: a string containing \"My Account\"\n     but: was \"Account Login\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat stepDefinitions.Steps.user_navigates_to_MyAccount_page(Steps.java:126)\n\tat ✽.Then User navigates to MyAccount page(Login.feature:9)\n",
  "status": "failed"
});
formatter.after({
  "duration": 112022849,
  "status": "passed"
});
formatter.before({
  "duration": 3562421496,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on your store page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on my Account",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "On Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"anu.asuri@gmail.com\" and Password as \"Anusha1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigates to MyAccount page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_your_store_page()"
});
formatter.result({
  "duration": 5058739,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_my_Account()"
});
formatter.result({
  "duration": 48256605,
  "status": "passed"
});
formatter.match({
  "location": "Steps.on_Login_button()"
});
formatter.result({
  "duration": 772688232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anu.asuri@gmail.com",
      "offset": 22
    },
    {
      "val": "Anusha1234",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 253608689,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 951245103,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_navigates_to_MyAccount_page()"
});
formatter.result({
  "duration": 6849263,
  "error_message": "java.lang.AssertionError: \nExpected: a string containing \"My Account\"\n     but: was \"Account Login\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat stepDefinitions.Steps.user_navigates_to_MyAccount_page(Steps.java:126)\n\tat ✽.Then User navigates to MyAccount page(Login.feature:9)\n",
  "status": "failed"
});
formatter.after({
  "duration": 112740970,
  "status": "passed"
});
formatter.before({
  "duration": 2667505097,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on your store page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on my Account",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "On Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"anu.suri@gmail.com\" and Password as \"Anusha123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigates to MyAccount page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_your_store_page()"
});
formatter.result({
  "duration": 10756604,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_my_Account()"
});
formatter.result({
  "duration": 128978566,
  "status": "passed"
});
formatter.match({
  "location": "Steps.on_Login_button()"
});
formatter.result({
  "duration": 672223741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anu.suri@gmail.com",
      "offset": 22
    },
    {
      "val": "Anusha123",
      "offset": 59
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 257847236,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 860147367,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_navigates_to_MyAccount_page()"
});
formatter.result({
  "duration": 16371147,
  "error_message": "java.lang.AssertionError: \nExpected: a string containing \"My Account\"\n     but: was \"Account Login\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat stepDefinitions.Steps.user_navigates_to_MyAccount_page(Steps.java:126)\n\tat ✽.Then User navigates to MyAccount page(Login.feature:9)\n",
  "status": "failed"
});
formatter.after({
  "duration": 110486900,
  "status": "passed"
});
formatter.before({
  "duration": 2378779948,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on your store page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on my Account",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "On Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"anu.asuri@gmail.com\" and Password as \"Anusha123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigates to MyAccount page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_your_store_page()"
});
formatter.result({
  "duration": 6318667,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_my_Account()"
});
formatter.result({
  "duration": 206332125,
  "status": "passed"
});
formatter.match({
  "location": "Steps.on_Login_button()"
});
formatter.result({
  "duration": 680566928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anu.asuri@gmail.com",
      "offset": 22
    },
    {
      "val": "Anusha123",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 266083943,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 1545784589,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_navigates_to_MyAccount_page()"
});
formatter.result({
  "duration": 7426913,
  "status": "passed"
});
formatter.after({
  "duration": 95372490,
  "status": "passed"
});
formatter.uri("Registration.feature");
formatter.feature({
  "line": 1,
  "name": "As a end user I want to test Registration is working as required",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-registration-is-working-as-required",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2378999353,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successful Registration  with valid credentials",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-registration-is-working-as-required;successful-registration--with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on your store page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on my Account",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "On registration button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enters all the required personal details",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "An account should be successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_your_store_page()"
});
formatter.result({
  "duration": 4165500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_my_Account()"
});
formatter.result({
  "duration": 273528462,
  "status": "passed"
});
formatter.match({
  "location": "Steps.on_registration_button()"
});
formatter.result({
  "duration": 772772495,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enters_all_the_required_personal_details()"
});
formatter.result({
  "duration": 636076730,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_continue_button()"
});
formatter.result({
  "duration": 1439652897,
  "status": "passed"
});
formatter.match({
  "location": "Steps.an_account_should_be_successfully_created()"
});
formatter.result({
  "duration": 667341760,
  "status": "passed"
});
formatter.after({
  "duration": 138342134,
  "status": "passed"
});
});