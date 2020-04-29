$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "As a user I want to login into nope commerce website",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13233354800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 57707300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 769620900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 58475200,
  "status": "passed"
});
formatter.after({
  "duration": 851421300,
  "status": "passed"
});
formatter.before({
  "duration": 11499249100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"bjrpatel17@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 997348600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bjrpatel17@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 152408100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 121578300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 74864600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 30140983300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-3OIKVFP\u0027, ip: \u0027192.168.0.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\VB-HP2\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49448}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5a59c3d347c831b9d0385dd711679c4b\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.demo.nopcommerce.utility.Utility.getTextFromElement(Utility.java:102)\r\n\tat com.demo.nopcommerce.pages.LoginPage.assertgetWelcomeStoreText(LoginPage.java:68)\r\n\tat com.demo.nopcommerce.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:45)\r\n\tat ✽.Then I should login successfully(src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1057495800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 25,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "xyz13@gmail.com",
        "abc123"
      ],
      "line": 26,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;2"
    },
    {
      "cells": [
        "xyz1@gmail.com",
        "abc1234"
      ],
      "line": 27,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;3"
    },
    {
      "cells": [
        "ram111@yahoo.com",
        "london3"
      ],
      "line": 28,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;4"
    },
    {
      "cells": [
        "ram222@yahoo.com",
        "london1"
      ],
      "line": 29,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;5"
    },
    {
      "cells": [
        "ram333@yahoo.com",
        "london2"
      ],
      "line": 30,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;6"
    },
    {
      "cells": [
        "ram444@yahoo.com",
        "london4"
      ],
      "line": 31,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;7"
    },
    {
      "cells": [
        "ram555@yahoo.com",
        "london5"
      ],
      "line": 32,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12556369500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"xyz13@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1523944000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz13@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 160388300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 110519200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12259741200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 42633100,
  "status": "passed"
});
formatter.after({
  "duration": 615070400,
  "status": "passed"
});
formatter.before({
  "duration": 10639803900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"xyz1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"abc1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 11800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1694081600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 150891100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 109084400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 78597300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 30161742000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-3OIKVFP\u0027, ip: \u0027192.168.0.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\VB-HP2\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4cdabeec8f23a937d1922751a866fb73\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.demo.nopcommerce.utility.Utility.getTextFromElement(Utility.java:102)\r\n\tat com.demo.nopcommerce.pages.LoginPage.assertgetWelcomeStoreText(LoginPage.java:68)\r\n\tat com.demo.nopcommerce.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:45)\r\n\tat ✽.Then I should login successfully(src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 980525200,
  "status": "passed"
});
formatter.before({
  "duration": 13905858500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"ram111@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"london3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 17300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1724624200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram111@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 119626700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london3",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 108666700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 86394200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 30125861800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-3OIKVFP\u0027, ip: \u0027192.168.0.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\VB-HP2\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49608}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: cc8e26bfba1a2026ee7d60dcadb14dad\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.demo.nopcommerce.utility.Utility.getTextFromElement(Utility.java:102)\r\n\tat com.demo.nopcommerce.pages.LoginPage.assertgetWelcomeStoreText(LoginPage.java:68)\r\n\tat com.demo.nopcommerce.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:45)\r\n\tat ✽.Then I should login successfully(src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 960914600,
  "status": "passed"
});
formatter.before({
  "duration": 11463087600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"ram222@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"london1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1754346900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram222@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 114323300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london1",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 102075300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 73410600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 30156367300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-3OIKVFP\u0027, ip: \u0027192.168.0.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\VB-HP2\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49660}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1208b1bcbbb30c1e338d5b1d9c9975ec\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.demo.nopcommerce.utility.Utility.getTextFromElement(Utility.java:102)\r\n\tat com.demo.nopcommerce.pages.LoginPage.assertgetWelcomeStoreText(LoginPage.java:68)\r\n\tat com.demo.nopcommerce.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:45)\r\n\tat ✽.Then I should login successfully(src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 975608700,
  "status": "passed"
});
formatter.before({
  "duration": 12464233200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"ram333@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"london2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 22700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 697825200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram333@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 114124300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london2",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 104632800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 89414100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 30108261400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-3OIKVFP\u0027, ip: \u0027192.168.0.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\VB-HP2\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49717}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c893c9f487fb3592ee47bc09db68f428\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.demo.nopcommerce.utility.Utility.getTextFromElement(Utility.java:102)\r\n\tat com.demo.nopcommerce.pages.LoginPage.assertgetWelcomeStoreText(LoginPage.java:68)\r\n\tat com.demo.nopcommerce.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:45)\r\n\tat ✽.Then I should login successfully(src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1036915600,
  "status": "passed"
});
formatter.before({
  "duration": 26557316900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"ram444@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"london4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 12400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 12630944100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram444@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 128298800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london4",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 113837900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12289589400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 42745600,
  "status": "passed"
});
formatter.after({
  "duration": 634023000,
  "status": "passed"
});
formatter.before({
  "duration": 13525955200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"ram555@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"london5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 12000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1429096300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram555@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 160419500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london5",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 132124100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 77341400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 30198305100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-3OIKVFP\u0027, ip: \u0027192.168.0.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\VB-HP2\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49850}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e09a7f08cd28469094a6d6ee20e1b7b2\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027topic-block-title\u0027]//h2[text()\u003d\u0027Welcome to our store\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor19.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.demo.nopcommerce.utility.Utility.getTextFromElement(Utility.java:102)\r\n\tat com.demo.nopcommerce.pages.LoginPage.assertgetWelcomeStoreText(LoginPage.java:68)\r\n\tat com.demo.nopcommerce.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:45)\r\n\tat ✽.Then I should login successfully(src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1242401100,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Feature",
  "description": "As a user I want to register an account on nop commerce website",
  "id": "registration-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12282298200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to Register page successfully",
  "description": "",
  "id": "registration-feature;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to Register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1786338300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 102757100,
  "status": "passed"
});
formatter.after({
  "duration": 634925400,
  "status": "passed"
});
formatter.before({
  "duration": 11880100500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should Register and create an account successfully",
  "description": "",
  "id": "registration-feature;user-should-register-and-create-an-account-successfully",
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
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter first name \"Jitu\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter day \"01\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter month \"May\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter year \"1979\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter random email address",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter company name \"Prime\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter register password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter register confirm password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able to Register and create an account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 12900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1163874700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jitu",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 110854300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 72788100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 61444600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 45817900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1979",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 47916600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnterRandomEmailAddress()"
});
formatter.result({
  "duration": 95301800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 67481600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 75355500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 72455200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 11854207200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldBeAbleToRegisterAndCreateAnAccountSuccessfully()"
});
formatter.result({
  "duration": 35608800,
  "status": "passed"
});
formatter.after({
  "duration": 613891800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"\u003clast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"\u003ccompany name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"\u003cconfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;",
  "rows": [
    {
      "cells": [
        "last name",
        "day",
        "month",
        "year",
        "email",
        "company name",
        "password",
        "confirm password",
        "errorMessage"
      ],
      "line": 39,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;1"
    },
    {
      "cells": [
        "A",
        "1",
        "February",
        "2008",
        "abc@gmail.com",
        "Prime",
        "abc123",
        "abc123",
        "First name is required."
      ],
      "line": 40,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;2"
    },
    {
      "cells": [
        "B",
        "1",
        "May",
        "2009",
        "def@gmail.com",
        "Testing",
        "def123",
        "def123",
        "First name is required."
      ],
      "line": 41,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;3"
    },
    {
      "cells": [
        "C",
        "1",
        "November",
        "2010",
        "ghi@gmail.com",
        "Square1",
        "ghi123",
        "ghi123",
        "First name is required."
      ],
      "line": 42,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;4"
    },
    {
      "cells": [
        "D",
        "1",
        "February",
        "2014",
        "jkl@gmail.com",
        "Interior Collection",
        "jkl123",
        "jkl123",
        "First name is required."
      ],
      "line": 43,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;5"
    },
    {
      "cells": [
        "E",
        "1",
        "January",
        "2020",
        "mno@gmail.com",
        "HarrowGS",
        "mno123",
        "mno123",
        "First name is required."
      ],
      "line": 44,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11545712900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"A\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"February\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2008\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"abc@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Prime\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"abc123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"abc123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 14600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1676002600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 80077700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 61671300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 64291600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2008",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 59299600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 104841900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 67182000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 80017100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 68406000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 73255000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 35380700,
  "status": "passed"
});
formatter.after({
  "duration": 656924600,
  "status": "passed"
});
formatter.before({
  "duration": 12372299200,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"B\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"May\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2009\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"def@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Testing\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"def123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"def123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 17000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 5309407000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "B",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 71565000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 63753700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 42882600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2009",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 43964000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 86834800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 84625200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 78040000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 109032100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 106914500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 39987700,
  "status": "passed"
});
formatter.after({
  "duration": 2227626900,
  "status": "passed"
});
formatter.before({
  "duration": 14713166500,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"C\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"November\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2010\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"ghi@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Square1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"ghi123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"ghi123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 2084551000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 81588000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 62692200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "November",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 75573900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 51429700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghi@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 101155400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Square1",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 82837000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghi123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 76775700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghi123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 75504000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 81800700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 37332100,
  "status": "passed"
});
formatter.after({
  "duration": 636574000,
  "status": "passed"
});
formatter.before({
  "duration": 14694108300,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"D\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"February\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2014\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"jkl@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Interior Collection\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"jkl123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"jkl123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 39400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1616498400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 65361600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 60353400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 52087300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2014",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 55362100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jkl@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 99418100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Interior Collection",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 92787500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jkl123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 78274900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jkl123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 66416500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 93349100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 36024900,
  "status": "passed"
});
formatter.after({
  "duration": 749210800,
  "status": "passed"
});
formatter.before({
  "duration": 12324928100,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"E\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"January\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"mno@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"HarrowGS\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"mno123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"mno123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 16400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 794157800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 81050900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 71756200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 58987200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 52738800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mno@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 109854600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HarrowGS",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 83917100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mno123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 70942600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mno123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 87477000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 73425800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 38276800,
  "status": "passed"
});
formatter.after({
  "duration": 948689400,
  "status": "passed"
});
});