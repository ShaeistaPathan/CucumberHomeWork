package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.NewAccountPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {

	LoginPage loginPageObj;
	NewAccountPage newAccountPageObj;

	@Before
	public void beforeRun() {
		initDriver();
		loginPageObj = PageFactory.initElements(driver, LoginPage.class);
		newAccountPageObj = PageFactory.initElements(driver, NewAccountPage.class);
	}
//	Given User is on techfios login page

	@Given("^User is on techfios login page$")
	public void user_is_on_techfios_login_page() {

		driver.get("https://techfios.com/billing/?ng=login/");
	}

//	When User enters username as "demo@techfios.com"

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		loginPageObj.enterUserName(username);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		loginPageObj.enterPassword(password);
	}

	@When("^User clicks signin button$")
	public void user_clicks_signin_button() {
		loginPageObj.clickSignInButton();
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling", loginPageObj.getPageTitle());
		takeScreenshot(driver);
	}

	@Then("^User clicks on bankCash$")
	public void user_clicks_on_bankCash() {
		newAccountPageObj.clickBankAndCash();
	}

	@Then("^User clicks on newAccount$")
	public void user_clicks_on_newAccount() {
		newAccountPageObj.clickNewAccount();
	}

	@Then("^User enters accountTitle as \"([^\"]*)\"$")
	public void user_enters_accountTitle_in_accounts_page(String accountTitle) {
		newAccountPageObj.enterAccountTitle(accountTitle);
	}

	@Then("^User enters description as \"([^\"]*)\"$")
	public void user_enters_description_in_accounts_page(String description) {
		newAccountPageObj.enterDescription(description);
	}

	@Then("^User enters initialBalance as \"([^\"]*)\"$")
	public void user_enters_initialBalance_in_accounts_page(String initialBalance) {
		newAccountPageObj.enterInitialBalance(initialBalance);
	}

	@Then("^User enters accountNumber as \"([^\"]*)\"$")
	public void user_enters_accountNumber_in_accounts_page(String accountNumber) {
		newAccountPageObj.enterAccountNumber(accountNumber);
	}

	@Then("^User enters contactPerson as \"([^\"]*)\"$")
	public void user_enters_contactPerson_in_accounts_page(String contactPerson) {
		newAccountPageObj.enterContactPerson(contactPerson);
	}

	@Then("^User enters phone as \"([^\"]*)\"$")
	public void user_enters_phone_in_accounts_page(String phone) {
		newAccountPageObj.enterPhone(phone);
	}

	@Then("^User enters internetBankingUrl as \"([^\"]*)\"$")
	public void user_enters_internetBankingUrl_in_accounts_page(String internetBankingUrl) {
		newAccountPageObj.enterInternetBankingUrl(internetBankingUrl);
	}

	@Then("^User clicks on submit button$")
	public void user_clicks_on_submit_button() {
		newAccountPageObj.clickSubmitButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
//		Assert.assertEquals("×\r\n"
//				+ "Account Created Successfully", newAccountPageObj.getSuccessAlert());
//		Assert.assertEquals(2,newAccountPageObj.getSuccessAlert().indexOf("Account Created Successfully"));
		Assert.assertTrue(newAccountPageObj.getSuccessAlert().contains("Account Created Successfully"));
		takeScreenshot(driver);

	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}
