import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    trace: 'on-first-retry',
    headless: !!process.env.CI,
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000',
  },
  testDir: './e2e',
  workers: process.env.CI ? 1 : undefined,
  fullyParallel: !!process.env.CI,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.5 },
  },
  snapshotPathTemplate: 'e2e/snapshots/{testFilePath}/{arg}{ext}',
});
