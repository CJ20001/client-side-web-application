const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  globalSetup: './global-setup.js',
  globalTeardown: './global-teardown.js',
  reporter: 'html',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
});