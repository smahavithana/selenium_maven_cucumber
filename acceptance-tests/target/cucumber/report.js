$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("site/sign_in.feature");
formatter.feature({
  "line": 2,
  "name": "Dft BlueBadge LA Sign In Page",
  "description": "\nAs an admin user\nI want to sign in to LA webapp\nSo that I can view admin dashbaord",
  "id": "dft-bluebadge-la-sign-in-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SignIn"
    }
  ]
});
formatter.before({
  "duration": 1045589609,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify valid Sign in",
  "description": "",
  "id": "dft-bluebadge-la-sign-in-page;verify-valid-sign-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I navigate to the \"sign-in\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see the page titled \"Sign in - GOV.UK Manage Blue Badges\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I type username \"abc@dft.gov.uk\" and password \"test123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can click Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the page titled \"GOV.UK Manage Blue Badges\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I should see LA name as \"Manchester City Council\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see username as \"Sampath\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see signout link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "sign-in",
      "offset": 19
    }
  ],
  "location": "SiteSteps.givenINavigateToPage(String)"
});
formatter.result({
  "duration": 697734509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in - GOV.UK Manage Blue Badges",
      "offset": 30
    }
  ],
  "location": "SiteSteps.thenIShouldSeePageTitled(String)"
});
formatter.result({
  "duration": 12369125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@dft.gov.uk",
      "offset": 17
    },
    {
      "val": "test123",
      "offset": 47
    }
  ],
  "location": "SiteSteps.andITypeUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 5181632751,
  "error_message": "java.lang.RuntimeException: Failed to find element matching \u0027By.id: emailAddress\u0027\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:48)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:35)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElement(PageHelper.java:31)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.site.SignInPage.findPageElementById(SignInPage.java:75)\n\tat uk.gov.service.bluebadge.test.acceptance.steps.SiteSteps.andITypeUsernameAndPassword(SiteSteps.java:165)\n\tat ✽.And I type username \"abc@dft.gov.uk\" and password \"test123\"(site/sign_in.feature:11)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for uk.gov.service.bluebadge.test.acceptance.pages.PageHelper$$Lambda$180/1640458320@49798e84 (tried for 5 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.10.0\u0027, revision: \u0027176b4a9\u0027, time: \u00272018-03-02T19:03:16.397Z\u0027\nSystem info: host: \u0027SampathMahavithanas-MacBook-Pro.local\u0027, ip: \u002710.241.70.27\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528157 (4429ca2590d698..., userDataDir: /var/folders/dv/1w_shrr9373...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: 1fa634ec488fdaf21295093063a357db\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:42)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:35)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElement(PageHelper.java:31)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.site.SignInPage.findPageElementById(SignInPage.java:75)\n\tat uk.gov.service.bluebadge.test.acceptance.steps.SiteSteps.andITypeUsernameAndPassword(SiteSteps.java:165)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:369)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:275)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:239)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:160)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:373)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:334)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:119)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:407)\n",
  "status": "failed"
});
formatter.match({
  "location": "SiteSteps.andICanClickSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GOV.UK Manage Blue Badges",
      "offset": 30
    }
  ],
  "location": "SiteSteps.thenIShouldSeePageTitled(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester City Council",
      "offset": 25
    }
  ],
  "location": "SiteSteps.iShouldSeeLANameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sampath",
      "offset": 26
    }
  ],
  "location": "SiteSteps.iShouldSeeUsernameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SiteSteps.iShouldSeeSignoutLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 53551512,
  "status": "passed"
});
formatter.before({
  "duration": 639071168,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Sign in with an invalid email address",
  "description": "",
  "id": "dft-bluebadge-la-sign-in-page;verify-sign-in-with-an-invalid-email-address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I navigate to the \"sign-in\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I type username \"example\" and password \"test123\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can click Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the validation message for \"invalid email\" as \"Enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sign-in",
      "offset": 19
    }
  ],
  "location": "SiteSteps.givenINavigateToPage(String)"
});
formatter.result({
  "duration": 192731767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example",
      "offset": 17
    },
    {
      "val": "test123",
      "offset": 40
    }
  ],
  "location": "SiteSteps.andITypeUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 5151672001,
  "error_message": "java.lang.RuntimeException: Failed to find element matching \u0027By.id: emailAddress\u0027\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:48)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:35)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElement(PageHelper.java:31)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.site.SignInPage.findPageElementById(SignInPage.java:75)\n\tat uk.gov.service.bluebadge.test.acceptance.steps.SiteSteps.andITypeUsernameAndPassword(SiteSteps.java:165)\n\tat ✽.And I type username \"example\" and password \"test123\"(site/sign_in.feature:20)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for uk.gov.service.bluebadge.test.acceptance.pages.PageHelper$$Lambda$180/1640458320@14e2e1c3 (tried for 5 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.10.0\u0027, revision: \u0027176b4a9\u0027, time: \u00272018-03-02T19:03:16.397Z\u0027\nSystem info: host: \u0027SampathMahavithanas-MacBook-Pro.local\u0027, ip: \u002710.241.70.27\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528157 (4429ca2590d698..., userDataDir: /var/folders/dv/1w_shrr9373...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: 1d9813067f851611933e5d7b1f010c57\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:42)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:35)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElement(PageHelper.java:31)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.site.SignInPage.findPageElementById(SignInPage.java:75)\n\tat uk.gov.service.bluebadge.test.acceptance.steps.SiteSteps.andITypeUsernameAndPassword(SiteSteps.java:165)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:369)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:275)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:239)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:160)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:373)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:334)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:119)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:407)\n",
  "status": "failed"
});
formatter.match({
  "location": "SiteSteps.andICanClickSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid email",
      "offset": 41
    },
    {
      "val": "Enter a valid email address",
      "offset": 60
    }
  ],
  "location": "SiteSteps.iShouldSeeTheValidationMessageForAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 53714179,
  "status": "passed"
});
formatter.before({
  "duration": 532113404,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify Sign in with an invalid password",
  "description": "",
  "id": "dft-bluebadge-la-sign-in-page;verify-sign-in-with-an-invalid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I navigate to the \"sign-in\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I type username \"example@gmail.com\" and password \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can click Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the validation message for \"invalid password\" as \"Enter a password\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sign-in",
      "offset": 19
    }
  ],
  "location": "SiteSteps.givenINavigateToPage(String)"
});
formatter.result({
  "duration": 214754681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example@gmail.com",
      "offset": 17
    },
    {
      "val": "",
      "offset": 50
    }
  ],
  "location": "SiteSteps.andITypeUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 5154394071,
  "error_message": "java.lang.RuntimeException: Failed to find element matching \u0027By.id: emailAddress\u0027\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:48)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:35)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElement(PageHelper.java:31)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.site.SignInPage.findPageElementById(SignInPage.java:75)\n\tat uk.gov.service.bluebadge.test.acceptance.steps.SiteSteps.andITypeUsernameAndPassword(SiteSteps.java:165)\n\tat ✽.And I type username \"example@gmail.com\" and password \"\"(site/sign_in.feature:26)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for uk.gov.service.bluebadge.test.acceptance.pages.PageHelper$$Lambda$180/1640458320@4a6c18ad (tried for 5 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.10.0\u0027, revision: \u0027176b4a9\u0027, time: \u00272018-03-02T19:03:16.397Z\u0027\nSystem info: host: \u0027SampathMahavithanas-MacBook-Pro.local\u0027, ip: \u002710.241.70.27\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528157 (4429ca2590d698..., userDataDir: /var/folders/dv/1w_shrr9373...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: bcef6a1c3e964fb0b7ebee5bb47438bc\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:42)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:35)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElement(PageHelper.java:31)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.site.SignInPage.findPageElementById(SignInPage.java:75)\n\tat uk.gov.service.bluebadge.test.acceptance.steps.SiteSteps.andITypeUsernameAndPassword(SiteSteps.java:165)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:369)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:275)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:239)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:160)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:373)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:334)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:119)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:407)\n",
  "status": "failed"
});
formatter.match({
  "location": "SiteSteps.andICanClickSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid password",
      "offset": 41
    },
    {
      "val": "Enter a password",
      "offset": 63
    }
  ],
  "location": "SiteSteps.iShouldSeeTheValidationMessageForAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 53113823,
  "status": "passed"
});
formatter.before({
  "duration": 528194461,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify Sign out",
  "description": "",
  "id": "dft-bluebadge-la-sign-in-page;verify-sign-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I navigate to the \"sign-in\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I type username \"abc@dft.gov.uk\" and password \"test123\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I can click Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I can click on the \"Sign out\" link",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the title \"Sign in\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sign-in",
      "offset": 19
    }
  ],
  "location": "SiteSteps.givenINavigateToPage(String)"
});
formatter.result({
  "duration": 190654109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@dft.gov.uk",
      "offset": 17
    },
    {
      "val": "test123",
      "offset": 47
    }
  ],
  "location": "SiteSteps.andITypeUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 5138261109,
  "error_message": "java.lang.RuntimeException: Failed to find element matching \u0027By.id: emailAddress\u0027\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:48)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:35)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElement(PageHelper.java:31)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.site.SignInPage.findPageElementById(SignInPage.java:75)\n\tat uk.gov.service.bluebadge.test.acceptance.steps.SiteSteps.andITypeUsernameAndPassword(SiteSteps.java:165)\n\tat ✽.When I type username \"abc@dft.gov.uk\" and password \"test123\"(site/sign_in.feature:32)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for uk.gov.service.bluebadge.test.acceptance.pages.PageHelper$$Lambda$180/1640458320@16c8b7bd (tried for 5 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.10.0\u0027, revision: \u0027176b4a9\u0027, time: \u00272018-03-02T19:03:16.397Z\u0027\nSystem info: host: \u0027SampathMahavithanas-MacBook-Pro.local\u0027, ip: \u002710.241.70.27\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528157 (4429ca2590d698..., userDataDir: /var/folders/dv/1w_shrr9373...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: e2f410ec0d4dfee5c1d6af7fd98cdab0\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:42)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElements(PageHelper.java:35)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.PageHelper.findElement(PageHelper.java:31)\n\tat uk.gov.service.bluebadge.test.acceptance.pages.site.SignInPage.findPageElementById(SignInPage.java:75)\n\tat uk.gov.service.bluebadge.test.acceptance.steps.SiteSteps.andITypeUsernameAndPassword(SiteSteps.java:165)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:369)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:275)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:239)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:160)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:373)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:334)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:119)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:407)\n",
  "status": "failed"
});
formatter.match({
  "location": "SiteSteps.andICanClickSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign out",
      "offset": 20
    }
  ],
  "location": "SiteSteps.whenIClickOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 24
    }
  ],
  "location": "SiteSteps.iShouldSeeTheTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 53207891,
  "status": "passed"
});
});