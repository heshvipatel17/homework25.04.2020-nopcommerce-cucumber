package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(linkText = "Log in")
    WebElement _loginLink;

    @FindBy(xpath = "//a[@class='ico-register']")
    WebElement _registerLink;

    @FindBy(linkText = "Computers")
    WebElement _computerLink;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//li[5]/a")
    WebElement _booksLink;


    // METHOD FOR CLICK ON LOGIN LINK
    public void clickOnLoginLink() {
        Reporter.addStepLog("Clicking on login link : " + _loginLink.toString());
        clickOnElement(_loginLink);
        log.info("Clicking on login link : " + _loginLink.toString());
    }

    public void clickOnRegisterLink() {
        Reporter.addStepLog("Clicking on register link : " + _registerLink.toString());
        clickOnElement(_registerLink);
        log.info("Clicking on register link : " + _registerLink.toString());
    }

    //  METHOD FOR CLICK ON COMPUTER LINK
    public void clickOnComputerLink() {
        Reporter.addStepLog("Clicking on Computer link : " + _computerLink.toString());
        clickOnElement(_computerLink);
        log.info("Clicking on Computer link : " + _computerLink.toString());
    }
    public void clickOnBooksLink() {
        Reporter.addStepLog("Click on books link" + _booksLink.toString());
        waitUntilElementToBeClickable(_booksLink, 20);
        clickOnElement(_booksLink);
        log.info("Click on books link" + _booksLink.toString());
    }
}
