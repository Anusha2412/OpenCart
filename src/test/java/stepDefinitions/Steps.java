package stepDefinitions;

import Utilities.Helper;
import com.google.gson.internal.bind.util.ISO8601Utils;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import drivers.DriversFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObjects.MyStorePage;
import pageObjects.RegisterAccountPage;

import java.util.ResourceBundle;


import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class Steps {

    MyStorePage msp = new MyStorePage();
  RegisterAccountPage reg = new RegisterAccountPage();

    Helper hp = new Helper();
    Logger logger;




    @Given("^User is on your store page$")
    public void user_is_on_your_store_page() throws Throwable {


        String ActualPageTitle = "Your Store";
        String expectedPageTitle = msp.getPageTitle();

       assertThat(ActualPageTitle, equalTo(expectedPageTitle));
        logger=  LogManager.getLogger();



    }

    @When("^User clicks on my Account$")
    public void user_clicks_on_my_Account() throws Throwable {
        msp.clickMyAccountBtn();
        logger.info("Clicked on my account button");


    }

    @When("^On registration button$")
    public void on_registration_button() throws Throwable {
        msp.clickRegistrationBtn();
        logger.info("Clicked on registration button");

    }

    @When("^Enters all the required personal details$")
    public void enters_all_the_required_personal_details() throws Throwable {
        reg.EnterFirstName("Anusha");
        reg.EnterLastName("Asuri");
        String Alphabets= hp.getRandomString(8);
        reg.EnterEmail(Alphabets +"@gmail.com");
        String Numbers = hp.getRandomNumbers(10);
        reg.EnterPhoneNo(Numbers);
        reg.SetAPassword(Alphabets);
        reg.ReEnterPassword(Alphabets);
        reg.ClickPolicyAgreeBox();
       logger.info("Clicked on my account button");
        logger.info("Clicked on my account button");
        logger.info("Clicked on my account button");
        logger.info("Clicked on my account button");
        logger.info("Clicked on my account button");


    }

    @When("^Click continue button$")
    public void click_continue_button() throws Throwable {
        reg.ClickContinueBtn();

    }

    @Then("^An account should be successfully created$")
    public void an_account_should_be_successfully_created() throws Throwable {
      String expected = "Your Account Has Been Created";
      String actual=  reg.getPageTitle();

      assertThat(actual, containsString(expected));

      msp.clickContinue();

    }

    @When("^On Login button$")
    public void on_Login_button() throws Throwable {
        msp.clickLoginBtn();

    }

    @When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
    public void user_enters_Email_as_and_Password_as(String email, String password) throws Throwable {

        msp.EnterEmail(email);
        msp.EnterPassword(password);

    }

    @When("^Click on Login button$")
    public void click_on_Login_button() throws Throwable {
        msp.clickReturnCustomerLoginBtn();

    }

    @Then("^User navigates to MyAccount page$")
    public void user_navigates_to_MyAccount_page() throws Throwable {

        String expected ="My Account";
        String actual =msp.getPageTitle();

        assertThat(actual, containsString(expected));

    }

}

