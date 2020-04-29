package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(xpath = "//input[@id='Email']")
    WebElement _emailField;

    @FindBy(id = "Password")
    WebElement _passwordField;

    @FindBy(xpath = "//input[@class='button-1 login-button']")
    WebElement _loginBtn;

    @FindBy(xpath = "//div[@class='page-title']//h1")
    WebElement _welcomeText;

    @FindBy(xpath = "//div[@class='topic-block-title']//h2[text()='Welcome to our store']")
    WebElement _welcomeStoreText;

    @FindBy(css = "div.message-error")
    WebElement _loginErrorTxt;

    //  METHOD FOR ENTER EMAIL ON EMAIL FIELD
    public void enterEmailId(String email) {
        waitUntilElementToBeClickable(_emailField,20);
        Reporter.addStepLog("Enter email : " + email + " to email field " + _emailField.toString());
        sendTextToElement(_emailField, email);
        log.info("Enter email : " + email + " to email field " + _emailField.toString());
    }

    //  METHOD FOR ENTER PASSWORD ON PASSWORD FIELD
    public void enterPassword(String password) {
        waitUntilElementToBeClickable(_passwordField, 20);
        Reporter.addStepLog("Enter password: " + password + "to password field" + _passwordField.toString());
        sendTextToElement(_passwordField, password);
        log.info("Enter password: " + password + "to password field" + _passwordField.toString());
    }

    //  METHOD FOR CLICK ON LOGIN BUTTON
    public void clickOnLoginButton() {
        Reporter.addStepLog("Click on login button" + _loginBtn.toString());
        clickOnElement(_loginBtn);
        log.info("Click on login button" + _loginBtn.toString());
    }

    //  METHOD FOR ASSERT WELCOME TEXT
    public String assertgetWelcomeText() {
        Reporter.addStepLog("verify welcome text:  displayed on Login page " + _welcomeText.toString());
        log.info("verify welcome text: displayed on welcome text "+_welcomeText.toString());
        return getTextFromElement(_welcomeText);

    }

    //  METHOD FOR ASSERT WELCOME STORE TEXT
    public String assertgetWelcomeStoreText() {
    //    waitUntilElementToBeClickable(_welcomeStoreText, 20);
        Reporter.addStepLog("Verify welcome store text: displayed on welcome store page "+ _welcomeStoreText.toString());
        log.info("Verify welcome store text: displayed on welcome store page"+_welcomeStoreText.toString());
        return getTextFromElement(_welcomeStoreText);

    }

    public void verifyLoginErrorMessage(String errorTxt) {
        Reporter.addStepLog("Verify error text: " +errorTxt+" displayed on login page " + _loginErrorTxt.toString());
        verifyText(_loginErrorTxt, errorTxt);
        log.info("Verify error text: " +errorTxt+" displayed on login page "+ _loginErrorTxt.toString());
    }
    public void loginToApplication(String username, String password){
        enterEmailId(username);
        enterPassword(password);
        clickOnLoginButton();

    }

}
