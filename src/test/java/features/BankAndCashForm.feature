@LoginFeature  
Feature: Techfios Bank and Cash New Account Functionalty validation

Background:
 Given User is on techfios login page
 
@BankAndCashScenario
 Scenario Outline: User should be able to login with valid credentials and open a new account
   When User enters username as "<username>"
   When User enters password as "<password>"
   When User clicks signin button
   Then User should land on dashboard page 
   And User clicks on bankCash
   And User clicks on newAccount
   And User enters accountTitle as "<accountTitle>" 
   And User enters description as "<description>"
   And User enters initialBalance as "<initialBalance>"
   And User enters accountNumber as "<accountNumber>"
   And User enters contactPerson as "<contactPerson>"
   And User enters phone as "<phone>"
   And User enters internetBankingUrl as "<internetBankingUrl>"
   And User clicks on submit button
   Then User should be able to validate account created successfully

   
   
 Examples:
 |username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|phone|internetBankingUrl|
 
 |demo@techfios.com|abc123|debit12341|salary|22,000|97574353|SP|6666666666|https://www.chase.com/|
 
 

   