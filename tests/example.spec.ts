import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://messages.pasha.biz/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Pasha SMS Dashboard/);

  // create a locator
  const forgotPassword = page.locator('text=Forgot password');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(forgotPassword).toHaveAttribute('href', 'forgot-password');

  // Click the get started link.
  await forgotPassword.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*forgot/);
});
