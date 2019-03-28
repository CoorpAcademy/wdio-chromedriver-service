const assert = require('assert');

describe('webdriver.io page', function() {
  it('should have the right title - the fancy generator way', async function() {
    browser.url('/');
    const title = await browser.getTitle();

    assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });
});
