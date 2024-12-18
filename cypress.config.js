const { defineConfig } = require("cypress");
const execa = require('execa')

const findBrowser = () => {
  // the path is hard-coded for simplicity
  // const browserPath =
  //   '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'

  // return execa(browserPath, ['--version']).then((result) => {
  //   // STDOUT will be like "Brave Browser 77.0.69.135"
  //   const [, version] = /Brave Browser (\d+\.\d+\.\d+\.\d+)/.exec(result.stdout)
  //   const majorVersion = parseInt(version.split('.')[0])

  //   return {
  //     name: 'Brave',
  //     channel: 'stable',
  //     family: 'chromium',
  //     displayName: 'Brave',
  //     version,
  //     path: browserPath,
  //     majorVersion,
  //   }
  // })
}

module.exports = defineConfig({
  projectId: "64i67w",
  e2e: {
    specPattern: 'cypress/e2e/first-test.cy.js',
    setupNodeEvents(on, config) {
      on('after:screenshot', () => false);
      // return findBrowser().then((browser) => {
      //   return {
      //     browsers: config.browsers.concat(browser),
      //   }
      // })
    },
  },
  video: true,
  videoCompression: false,
});
