var seleniumWebdriver = require('selenium-webdriver');
module.exports = function() {
    // this.World = World;
  
    this.Given(/^the user is on landing page$/, function () {
      let selector = page.exercisePage.elements.items;
      return helpers.loadPage(page.exercisePage.url).then(function() {
        return driver.wait(until.elementLocated(selector), 3000);
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
      return page.exercisePage.assertCountValues(countValues);
    });
  
    this.Then(/^values on the page is greater than Zero$/, function () {
      let flag = page.exercisePage.valueGreaterThanZero();
    });
  
    this.Then(/^values are formatted as currencies$/, function () {
      return page.exercisePage.valuesFormatCurrency();
    });
  
    this.Then(/^total balance is correct based on the values listed on the screen$/, function () {
      // This test case is same as the last test case so I am calling the same 
      // function I wrote for verifying the Total Balance
      return page.exercisePage.totalBalance();
    });
  
    this.Then(/^total balance is equal to the sum of the all the values listed on the page$/, function () {
      return page.exercisePage.totalBalance();
    });
  
  };