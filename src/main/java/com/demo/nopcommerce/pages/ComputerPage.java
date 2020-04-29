package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());


    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement _computerText;

    @FindBy(xpath = "//li[@class='inactive']//a[@href='/desktops']")
    WebElement _desktopbtn;

    // METHOD FOR ASSERT COMPUTER TEXT
    public String assertComputerText() {
        Reporter.addStepLog(" verify Computer text " + _computerText.toString());
        log.info(" verify Computer text " + _computerText.toString());
        return getTextFromElement(_computerText);

    }

    // METHOD FOR CLICK ON DESKTOP BUTTON
    public void clickOnDesktopButton() {
        Reporter.addStepLog("Clicking on Desktop Button" + _desktopbtn.toString());
        clickOnElement(_desktopbtn);
        log.info("Clicking on Desktop Button" + _desktopbtn.toString());
    }

}
