import { test, expect } from '@playwright/test';

test.describe('DSA Cockpit Frontend - Basic App Loading', () => {
  test('should load the application', async ({ page }) => {
    await page.goto('/');

    // Wait for Angular to load
    await page.waitForLoadState('networkidle');

    // Check that we're redirected to /player/heroes (based on app routes)
    await expect(page).toHaveURL(/\/player\/heroes/);
  });

  test('should have a title', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that the page has a title (actual title is "Helden, Helden")
    await expect(page).toHaveTitle(/Helden/i);
  });

  test('should navigate to master view', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Try to navigate to master view
    await page.goto('/master/heroes');
    await page.waitForLoadState('networkidle');

    // Should be on the master heroes page
    await expect(page).toHaveURL(/\/master\/heroes/);
  });

  test('should navigate to player view', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Navigate to player view
    await page.goto('/player/heroes');
    await page.waitForLoadState('networkidle');

    // Should be on the player heroes page
    await expect(page).toHaveURL(/\/player\/heroes/);
  });
});
