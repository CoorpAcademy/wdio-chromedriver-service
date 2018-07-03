const {execFile} = require('child_process');
const ChromeDriver = require('chromedriver');

class ChromeDriverService {
  onPrepare(config, capabilities) {
    const {chromeDriverArgs, chromeDriverPath = ChromeDriver.path} = config;

    return new Promise((resolve, reject) => {
      this.chromedriverProcess = execFile(
        chromeDriverPath,
        chromeDriverArgs,
        (err, stdout, stderr) => {
          if (err) {
            return reject(err);
          }
        }
      );
      resolve();
    });
  }

  onComplete(exitCode, config, capabilities) {
    if (this.chromedriverProcess) this.chromedriverProcess.kill();
  }
}

module.exports = ChromeDriverService;
