import { test, expect } from 'playwright-test-coverage';

test.describe('Sign up', () => {
  test('Success', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('authPopup').click();
    await expect(page.getByTestId('email')).toBeVisible();

    await page.getByTestId('to-signup').click();

    // to get unique email every time
    const dateString = new Date().toString().replace(/[\s+\)\(\:]/g, '');

    await page.getByTestId('firstName').fill('first');
    await page.getByTestId('lastName').fill('last');
    await page
      .getByTestId('email')
      .fill('e2etestinge2etestinge2etest' + dateString + '@test.com');
    await page.getByTestId('password').fill('password');

    await page.getByTestId('submit-signup').click();

    await expect(page.getByTestId('message')).toBeVisible();
    await expect(page).toHaveScreenshot();
  });

  test('Failure', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('authPopup').click();
    await expect(page.getByTestId('email')).toBeVisible();

    await page.getByTestId('to-signup').click();

    await page.getByTestId('firstName').fill('first');
    await page.getByTestId('lastName').fill('last');
    await page.getByTestId('email').fill('aa');
    await page.getByTestId('password').fill('password');

    await page.getByTestId('submit-signup').click();

    await expect(page.getByTestId('message')).toBeVisible();
    await expect(page).toHaveScreenshot();
  });
});
