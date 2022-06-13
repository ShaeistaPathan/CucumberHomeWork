$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BankAndCashForm.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios Bank and Cash New Account Functionalty validation",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionalty-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionalty-validation;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@BankAndCashScenario"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountTitle as \"\u003caccountTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters description as \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters initialBalance as \"\u003cinitialBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters phone as \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters internetBankingUrl as \"\u003cinternetBankingUrl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionalty-validation;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingUrl"
      ],
      "line": 28,
      "id": "techfios-bank-and-cash-new-account-functionalty-validation;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "debit12341",
        "salary",
        "22,000",
        "97574353",
        "SP",
        "6666666666",
        "https://www.chase.com/"
      ],
      "line": 30,
      "id": "techfios-bank-and-cash-new-account-functionalty-validation;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1975280100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 1038146600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionalty-validation;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@BankAndCashScenario"
    },
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountTitle as \"debit12341\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters description as \"salary\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters initialBalance as \"22,000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters accountNumber as \"97574353\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters contactPerson as \"SP\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters phone as \"6666666666\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters internetBankingUrl as \"https://www.chase.com/\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3115389900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3061422400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 3776958100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 143446200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 51231900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 222034500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "debit12341",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountTitle_in_accounts_page(String)"
});
formatter.result({
  "duration": 71742900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "salary",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_description_in_accounts_page(String)"
});
formatter.result({
  "duration": 53597600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22,000",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enters_initialBalance_in_accounts_page(String)"
});
formatter.result({
  "duration": 62544400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "97574353",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountNumber_in_accounts_page(String)"
});
formatter.result({
  "duration": 58717800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SP",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactPerson_in_accounts_page(String)"
});
formatter.result({
  "duration": 60956500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6666666666",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_phone_in_accounts_page(String)"
});
formatter.result({
  "duration": 49031100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.chase.com/",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_internetBankingUrl_in_accounts_page(String)"
});
formatter.result({
  "duration": 66144200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 458861500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 164713200,
  "status": "passed"
});
formatter.after({
  "duration": 644996100,
  "status": "passed"
});
});