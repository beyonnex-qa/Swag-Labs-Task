import { defineConfig, devices } from "@playwright/test";

/**Hidden Challenges*/
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    // **Challenge 1: Screenshots & Videos!**
    // Can you enable screenshots and videos for failed tests or retries?
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // **Challenge 2: Multi-Browser Testing!**
    // Can you add configurations for other browsers like Firefox or WebKit?
  ],
});
