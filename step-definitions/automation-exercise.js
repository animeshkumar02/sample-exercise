var seleniumWebdriver = require('selenium-webdriver');
module.exports = function() {
    // this.World = World;
  
    this.Given(/^the user is on landing page$/, function () {
      return helpers.loadPage(page.exercisePage.url).then(function() {
        return page.exercisePage.landingPage();
      });
    });
  
    this.When(/^page containing value label and text is displayed$/, function () {
      return driver.getTitle().then(function(title) {
        // Assuming that title of the mocked exercise page is "Automation Exercise"  
        assert.equal(title, "Automation Exercise");
      })
    });
  
    this.Then(/^count of values displayed  on the page is equal to (\d+)$/, function (count) {
      let countValues = 5;
      // return page.exercisePage.assertCountValues();
    });
  
    this.Then(/^values on the page is greater than Zero$/, function () {
      return page.exercisePage.valueGreaterThanZero();
    });
  
    this.Then(/^values are formatted as currencies$/, function () {
      return page.exercisePage.valuesFormatCurrency();
    });
  
    this.Then(/^total balance is same as values listed on the page$/, function () {
      // Write code here that turns the phrase above into concrete actions
    });
  
    this.Then(/^toal balance is equal to the sum of the all the values listed on the page$/, function () {
      return page.exercisePage.totalBalance();
    });
  
  };