package pageObjects;

import drivers.DriversFactory;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import sun.plugin.dom.html.HTMLDocument;

public class RegisterAccountPage extends DriversFactory  {




    @FindBy(id = "input-firstname")
    WebElement txtfirstName;

    @FindBy(id = "input-lastname")
    WebElement txtlastName;

    @FindBy(id = "input-email")
    WebElement txtemail;

    @FindBy(id= "input-telephone")
    WebElement txtphone;

    @FindBy(id= "input-password")
    WebElement txtSetPassword;

    @FindBy(id= "input-confirm")
    WebElement txtConformSetPswd;

    @FindBy(css = "input[name=agree]")
    WebElement policyAgreeCheckBox;

    @FindBy(xpath = "//input[@class=\"btn btn-primary\"]")
    WebElement continueBtn;

    //Action Methods

    public void EnterFirstName(String fName){
        txtfirstName.sendKeys(fName);
    }

    public void EnterLastName(String lName ){
        txtlastName.sendKeys(lName);
    }

    public void EnterEmail(String eMail){
        txtemail.sendKeys(eMail);
    }

    public void EnterPhoneNo(String phoneNo){
        txtphone.sendKeys(phoneNo);
    }

    public void SetAPassword(String SetPassword1){
        txtSetPassword.sendKeys(SetPassword1);
    }

    public void ReEnterPassword(String SetPassword2){
        txtConformSetPswd.sendKeys(SetPassword2);
    }

    public void ClickPolicyAgreeBox(){
        policyAgreeCheckBox.click();
    }

    public void ClickContinueBtn(){
        continueBtn.click();
    }


}
