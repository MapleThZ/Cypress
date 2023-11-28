const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "64i67w",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  videoCompression: true,
});
