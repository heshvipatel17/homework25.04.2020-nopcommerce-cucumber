package com.demo.nopcommerce.cucumber.stepdefs;

import com.demo.nopcommerce.pages.ComputerPage;
import com.demo.nopcommerce.pages.DesktopPage;
import com.demo.nopcommerce.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {
    @When("^I click on Computer link$")
    public void iClickOnComputerLink() {
        new HomePage().clickOnComputerLink();
    }

    @Then("^I navigate to Computer page successfully$")
    public void iNavigateToComputerPageSuccessfully() {
        Assert.assertEquals(new ComputerPage().assertComputerText(),"Computers");
    }

    @And("^I click on Desktop link$")
    public void iClickOnDesktopLink() {
        new ComputerPage().clickOnDesktopButton();
    }

    @And("^I select build your own computer$")
    public void iSelectBuildYourOwnComputer() {
        new DesktopPage().clickOnBuiltYourOwnComputerLink();
    }

    @And("^I select HDD$")
    public void iSelectHDD() {
        new DesktopPage().clickOn400GBHarddrive();
    }

    @And("^I click on add to cart$")
    public void iClickOnAddToCart() {
        new DesktopPage().clickAddToCartButton();
    }

    @Then("^The product is added successfully$")
    public void theProductIsAddedSuccessfully() {
        Assert.assertEquals(new DesktopPage().assertProductAddSuccessfullyText(),"The product has been added to your shopping cart");
    }
}
