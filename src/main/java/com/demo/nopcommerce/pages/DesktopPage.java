package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DesktopPage extends Utility {

    private static final Logger log = LogManager.getLogger(DesktopPage.class.getName());


    @FindBy(xpath = "//a[contains(text(),'Build your own computer')]")
    WebElement _builtYrOwnComLink;

    @FindBy(id = "product_attribute_3_7")
    WebElement _harddrive400GB;

    @FindBy(id = "add-to-cart-button-1")
    WebElement _addtoCartbtn;

    @FindBy(xpath = "//p[@class='content']")
    WebElement _productAddSfullyText;

    // METHOD FOR CLICK ON BUILD YOUR OWN COMPUTER LINK
    public void clickOnBuiltYourOwnComputerLink() {
        waitUntilElementToBeClickable(_builtYrOwnComLink, 20);
        Reporter.addStepLog("Clicking on build your computer link" + _builtYrOwnComLink.toString());
        clickOnElement(_builtYrOwnComLink);
        log.info("Clicking on build your computer link" + _builtYrOwnComLink.toString());
    }

    // METHOD FOR CLICK ON 400GB HARDDRIVE
    public void clickOn400GBHarddrive() {
        Reporter.addStepLog("Clicking on 400GB hard disk drive" + _harddrive400GB.toString());
        clickOnElement(_harddrive400GB);
        log.info("Clicking on 400GB hard disk drive" + _harddrive400GB.toString());
    }

    // METHOD FOR CLICK ON ADD TO CART BUTTON
    public void clickAddToCartButton() {
        Reporter.addStepLog("Clicking on add to card button" + _addtoCartbtn.toString());
        clickOnElement(_addtoCartbtn);
        log.info("Clicking on add to card button" + _addtoCartbtn.toString());
    }
    // METHOD FOR ASSERT PRODUCT ADD SUCESSFULLY TEXT

    public String assertProductAddSuccessfullyText() {
        Reporter.addStepLog("Verify product add successfuly text" + _productAddSfullyText.toString());
       log.info("Verify product add successfuly text" + _productAddSfullyText.toString());
        return getTextFromElement(_productAddSfullyText);
    }
}
