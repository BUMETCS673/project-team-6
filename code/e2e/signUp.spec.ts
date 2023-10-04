import { test, expect } from '@playwright/test'; //, expect

test.describe('Sign up', () => {
  test('Success', async ({ page }) => {
    await page.goto('/signin');
    await page.getByTestId('to-signup').click();

    // to get unique email every time
    const dateString = new Date().toString().replace(/\s+/g, '');

    await page.getByTestId('firstName').fill('first');
    await page.getByTestId('lastName').fill('last');
    await page.getByTestId('email').fill('test' + dateString + '@test.test');
    await page.getByTestId('password').fill('password');

    await page.getByTestId('submit-signup').click();

    await expect(page.getByTestId('message')).toBeVisible();
    await page.screenshot({ path: 'screenshot.png' });
  });
});
