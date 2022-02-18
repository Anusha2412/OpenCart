package pageObjects;

import drivers.DriversFactory;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

//OpenCart password: Anusha123,

public class MyStorePage extends DriversFactory {

    @FindBy(xpath= "//span[contains(text(),'My Account')]")
    WebElement myAccountBtn;

    @FindBy(xpath = "//a[contains(text(),'Register')]")
    WebElement registerBtn;

    @FindBy(xpath = "//a[contains(text(),'Login')]")
    WebElement LoginBtn;

    @FindBy(xpath = "//a[contains(text(), 'Continue')]")
    WebElement continueBtn;

    @FindBy(id = "input-email")
    WebElement EmailTxt;

    @FindBy(id = "input-password")
    WebElement PasswordTxt;

    @FindBy(xpath = "//input[@class='btn btn-primary']")
    WebElement ReturningCustomerLoginBtn;






//Action method

    public void clickMyAccountBtn(){
        myAccountBtn.click();
    }

    public void clickRegistrationBtn(){
        registerBtn.click();
    }

    public void clickLoginBtn(){
        LoginBtn.click();
    }

    public void clickContinue(){
        continueBtn.click();
    }

    public void EnterEmail(String email){
        EmailTxt.sendKeys(email);
    }

    public void EnterPassword(String Password){
        PasswordTxt.sendKeys(Password);
    }

    public void clickReturnCustomerLoginBtn(){
        ReturningCustomerLoginBtn.click();
    }








}
