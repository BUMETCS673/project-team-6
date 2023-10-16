import { test, expect } from 'playwright-test-coverage';

test.describe('Sign in', () => {
  test('Success', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('authPopup').click();
    await expect(page.getByTestId('email')).toBeVisible();

    await page.getByTestId('email').fill('qqqq@qqq.com');
    await page.getByTestId('password').fill('qqqqqq');

    await page.getByTestId('signIn').click();

    await expect(page.getByTestId('signOut')).toBeVisible();
    await expect(page).toHaveScreenshot();
  });

  test('Failure', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('authPopup').click();
    await expect(page.getByTestId('email')).toBeVisible();

    const dateString = new Date().toString().replace(/[\s+\)\(\:]/g, '');
    await page.getByTestId('email').fill(dateString);
    await page.getByTestId('password').fill('qqqqqq');

    await page.getByTestId('signIn').click();

    await expect(page.getByTestId('message')).toBeVisible();
    await expect(page).toHaveScreenshot();
  });
});
