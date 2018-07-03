# WDIO ChromeDriver service

[![Build Status](https://travis-ci.com/CoorpAcademy/wdio-chromedriver-service.svg?branch=master)](https://travis-ci.com/CoorpAcademy/wdio-chromedriver-service)

This service help you to run chromedriver from npm package or from local install when runnings test with WDIO.

## Installation

Install `@coorpacademy/wdio-chromedriver-service` and `chromedriver` packages.
```sh
npm install --save-dev @coorpacademy/wdio-chromedriver-service chromedriver
```

Adds service in `wdio.config.js`
```
const ChromeDriverService = require('@coorpacademy/wdio-chromedriver-service');

exports.config = {
  host: '0.0.0.0',
  port: '9515',
  path: '/',

  services: [new ChromeDriverService()],

  chromeDriverArgs: ['--port=9516'],
  chromeDriverPath: '/usr/bin/chromedriver',

  capabilities: [
    {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless', '--disable-gpu', '--no-sandbox']
      }
    }
  ]
};
```

## Options

### chromeDriverArgs
Array of arguments to pass to the ChromeDriver executable, see [https://helpmanual.io/help/chromedriver](https://helpmanual.io/help/chromedriver).

Type: `string[]`
### chromeDriverPath
Path of chromedriver bin. Overwrite this value to use local chromedriver install.

Type: `string`
