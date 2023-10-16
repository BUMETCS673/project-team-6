import { test, expect } from 'playwright-test-coverage';

test.describe('Console', () => {
  test('Manage cars', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('authPopup').click();
    await expect(page.getByTestId('email')).toBeVisible();

    await page.getByTestId('email').fill('qqqq@qqq.com');
    await page.getByTestId('password').fill('qqqqqq');

    await page.getByTestId('signIn').click();

    await expect(page.getByTestId('signOut')).toBeVisible();
    await expect(page).toHaveScreenshot();
  });

  test('Add cars', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('authPopup').click();
    await expect(page.getByTestId('email')).toBeVisible();

    await page.getByTestId('email').fill('qqqq@qqq.com');
    await page.getByTestId('password').fill('qqqqqq');

    await page.getByTestId('signIn').click();

    await expect(page.getByTestId('signOut')).toBeVisible();
    await page.getByTestId('addCarMenuItem').click();
    await expect(page.getByTestId('addCarButton')).toBeVisible();
    await expect(page).toHaveScreenshot();
  });

  test('Maintainance', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('authPopup').click();
    await expect(page.getByTestId('email')).toBeVisible();

    await page.getByTestId('email').fill('qqqq@qqq.com');
    await page.getByTestId('password').fill('qqqqqq');

    await page.getByTestId('signIn').click();

    await expect(page.getByTestId('signOut')).toBeVisible();
    await page.getByTestId('maintenanceMenuItem').click();
    await expect(page.getByTestId('maintainancePage')).toBeVisible();
    await expect(page).toHaveScreenshot();
  });
});
