import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests-screenshots",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { outputFolder: "./playwright-report-screenshots" }]],
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    /* Test against mobile viewports. */
    {
      name: "Mobile Chrome",
      testIgnore: /-print.spec.ts$/,
      use: { ...devices["Pixel 5"] }, // 393px
    },
    {
      name: "Mobile Chrome Small",
      testIgnore: /-print.spec.ts$/,
      use: { ...devices["Nexus 4 landscape"] }, // 660px
    },
    {
      name: "iPad Medium",
      testIgnore: /-print.spec.ts$/,
      use: { ...devices["iPad (gen 5)"] }, // 768px
    },
    {
      name: "iPad Landscape Large",
      testIgnore: /-print.spec.ts$/,
      use: { ...devices["iPad (gen 5) landscape"] }, // 1024px
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run preview",
    url: "http://localhost:5173",
    reuseExistingServer: true,
  },
  
  /* Increase timeout for expect assertions, especially for screenshots */
  expect: {
    timeout: 30000,
    toHaveScreenshot: {
      maxDiffPixels: 100,
    },
  },
});
