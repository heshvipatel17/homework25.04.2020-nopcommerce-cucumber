$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/book.feature");
formatter.feature({
  "line": 1,
  "name": "Book Feature",
  "description": "\r\nAs a user I want to view products on Books page",
  "id": "book-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11350568100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to Book page successfully",
  "description": "",
  "id": "book-feature;user-should-navigate-to-book-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Book page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 63780800,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iClickOnBookLink()"
});
formatter.result({
  "duration": 1432297700,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iShouldNavigateToBookPageSuccessfully()"
});
formatter.result({
  "duration": 121744200,
  "status": "passed"
});
formatter.after({
  "duration": 586552900,
  "status": "passed"
});
formatter.before({
  "duration": 10656649500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should see results on Book page sorted by AtoZ",
  "description": "",
  "id": "book-feature;user-should-see-results-on-book-page-sorted-by-atoz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I sort books by Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the products displayed on the books page sorted by alphabetic order",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 21300,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iClickOnBookLink()"
});
formatter.result({
  "duration": 1399261700,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iSortBooksByNameAToZ()"
});
formatter.result({
  "duration": 1324063900,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByAlphabeticOrder()"
});
formatter.result({
  "duration": 107430300,
  "status": "passed"
});
formatter.after({
  "duration": 601723300,
  "status": "passed"
});
formatter.before({
  "duration": 10658987200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should see prices on Books page sorted by LowToHigh",
  "description": "",
  "id": "book-feature;user-should-see-prices-on-books-page-sorted-by-lowtohigh",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I sort books by Price: Low to High",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the products displayed on the books page sorted by prices in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iClickOnBookLink()"
});
formatter.result({
  "duration": 1367528800,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iSortBooksByPriceLowToHigh()"
});
formatter.result({
  "duration": 1355804200,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByPricesInAscendingOrder()"
});
formatter.result({
  "duration": 89827200,
  "status": "passed"
});
formatter.after({
  "duration": 605708300,
  "status": "passed"
});
});