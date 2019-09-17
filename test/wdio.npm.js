const ChromeDriverService = require('..');
const ChromeDriver = require('chromedriver');

exports.config = {
  host: '0.0.0.0',
  port: 9516,
  path: '/',

  specs: ['./test/test.mocha.js'],
  services: [[ChromeDriverService, {}]],
  chromeDriverArgs: ['--port=9516'],
  chromeDriverPath: ChromeDriver.path,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--no-sandbox']
      }
    }
  ],

  screenshotPath: 'screenshots',
  baseUrl: 'http://webdriver.io',
  framework: 'mocha',

  reporters: ['dot']
};
