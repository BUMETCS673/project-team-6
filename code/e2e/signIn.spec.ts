import { test } from '@playwright/test'; //, expect

test.describe('Sign in', () => {
  test.beforeAll(async () => {
    // Do smth before all tests in the suite
  });

  test.beforeEach(async () => {
    // Do smth before each test in the suite
  });

  test('test 1', async ({ page }) => {
    await page.goto('/');

    // await expect(page.getByTestId('hello')).toBeVisible();

    // Never use pause!!!!
    await page.waitForTimeout(5000);
  });
});
