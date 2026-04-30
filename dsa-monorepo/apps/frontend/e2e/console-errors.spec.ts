import { test, expect, Page, ConsoleMessage } from '@playwright/test';

/**
 * Console Error Monitoring Test Suite
 *
 * This test suite monitors browser console messages and ensures no errors
 * are logged during application usage. Console errors are collected throughout
 * each describe block and validated at the end.
 */

/**
 * Helper function to set up console error monitoring for a page
 * @returns An object with methods to start monitoring and get collected errors
 */
function setupConsoleMonitoring() {
  const consoleErrors: ConsoleMessage[] = [];
  const consoleWarnings: ConsoleMessage[] = [];

  const startMonitoring = (page: Page) => {
    page.on('console', (msg) => {
      const type = msg.type();

      if (type === 'error') {
        consoleErrors.push(msg);
        console.log(`❌ Console Error: ${msg.text()}`);
      } else if (type === 'warning') {
        consoleWarnings.push(msg);
        console.log(`⚠️  Console Warning: ${msg.text()}`);
      }
    });

    // Also listen for page errors (uncaught exceptions)
    page.on('pageerror', (error) => {
      console.log(`💥 Page Error: ${error.message}`);
    });
  };

  const getErrors = () => consoleErrors;
  const getWarnings = () => consoleWarnings;
  const clearErrors = () => {
    consoleErrors.length = 0;
    consoleWarnings.length = 0;
  };

  return { startMonitoring, getErrors, getWarnings, clearErrors };
}

test.describe('Player View - Console Error Check', () => {
  const monitor = setupConsoleMonitoring();

  test.beforeEach(async ({ page }) => {
    // Start monitoring console messages
    monitor.clearErrors();
    monitor.startMonitoring(page);
  });

  test('should load player heroes view without console errors', async ({ page }) => {
    await page.goto('/player/heroes');
    await page.waitForLoadState('networkidle');

    // Give Angular time to render
    await page.waitForTimeout(1000);

    // The error check happens in afterAll
  });

  test('should navigate to player view without errors', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.goto('/player/heroes');
    await page.waitForLoadState('networkidle');

    await page.waitForTimeout(500);
  });

  test.afterAll(() => {
    // Check for console errors at the end of the describe block
    const errors = monitor.getErrors();
    const warnings = monitor.getWarnings();

    console.log('\n📊 Console Error Report for "Player View":');
    console.log(`   Errors: ${errors.length}`);
    console.log(`   Warnings: ${warnings.length}`);

    if (errors.length > 0) {
      console.log('\n❌ Console Errors Found:');
      errors.forEach((msg, idx) => {
        console.log(`   ${idx + 1}. ${msg.text()}`);
        console.log(`      Location: ${msg.location().url}`);
      });
    }

    // Assert no console errors
    expect(errors, 'No console errors should be present in Player View').toHaveLength(0);
  });
});

test.describe('Master View - Console Error Check', () => {
  const monitor = setupConsoleMonitoring();

  test.beforeEach(async ({ page }) => {
    monitor.clearErrors();
    monitor.startMonitoring(page);
  });

  test('should load master heroes view without console errors', async ({ page }) => {
    await page.goto('/master/heroes');
    await page.waitForLoadState('networkidle');

    await page.waitForTimeout(1000);
  });

  test('should navigate in master view without errors', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.goto('/master/heroes');
    await page.waitForLoadState('networkidle');

    await page.waitForTimeout(500);
  });

  test.afterAll(() => {
    const errors = monitor.getErrors();
    const warnings = monitor.getWarnings();

    console.log('\n📊 Console Error Report for "Master View":');
    console.log(`   Errors: ${errors.length}`);
    console.log(`   Warnings: ${warnings.length}`);

    if (errors.length > 0) {
      console.log('\n❌ Console Errors Found:');
      errors.forEach((msg, idx) => {
        console.log(`   ${idx + 1}. ${msg.text()}`);
        console.log(`      Location: ${msg.location().url}`);
      });
    }

    expect(errors, 'No console errors should be present in Master View').toHaveLength(0);
  });
});

test.describe('Navigation and Routing - Console Error Check', () => {
  const monitor = setupConsoleMonitoring();

  test.beforeEach(async ({ page }) => {
    monitor.clearErrors();
    monitor.startMonitoring(page);
  });

  test('should handle route changes without errors', async ({ page }) => {
    // Navigate through different routes
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.goto('/player/heroes');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    await page.goto('/master/heroes');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
  });

  test('should load initial route without errors', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
  });

  test.afterAll(() => {
    const errors = monitor.getErrors();
    const warnings = monitor.getWarnings();

    console.log('\n📊 Console Error Report for "Navigation and Routing":');
    console.log(`   Errors: ${errors.length}`);
    console.log(`   Warnings: ${warnings.length}`);

    if (errors.length > 0) {
      console.log('\n❌ Console Errors Found:');
      errors.forEach((msg, idx) => {
        console.log(`   ${idx + 1}. ${msg.text()}`);
        console.log(`      Type: ${msg.type()}`);
        console.log(`      Location: ${msg.location().url}`);
      });
    }

    expect(errors, 'No console errors should be present during Navigation').toHaveLength(0);
  });
});

test.describe('API Integration - Console Error Check', () => {
  const monitor = setupConsoleMonitoring();

  test.beforeEach(async ({ page }) => {
    monitor.clearErrors();
    monitor.startMonitoring(page);
  });

  test('should fetch characters without console errors', async ({ page }) => {
    // Monitor network requests
    const apiRequests: string[] = [];

    page.on('request', (request) => {
      const url = request.url();
      if (url.includes('/api/')) {
        apiRequests.push(url);
        console.log(`📡 API Request: ${url}`);
      }
    });

    await page.goto('/master/heroes');
    await page.waitForLoadState('networkidle');

    // Wait for API calls to complete
    await page.waitForTimeout(2000);

    console.log(`   Made ${apiRequests.length} API requests`);
  });

  test.afterAll(() => {
    const errors = monitor.getErrors();
    const warnings = monitor.getWarnings();

    console.log('\n📊 Console Error Report for "API Integration":');
    console.log(`   Errors: ${errors.length}`);
    console.log(`   Warnings: ${warnings.length}`);

    if (errors.length > 0) {
      console.log('\n❌ Console Errors Found:');
      errors.forEach((msg, idx) => {
        console.log(`   ${idx + 1}. ${msg.text()}`);
        console.log(`      Type: ${msg.type()}`);
        const location = msg.location();
        console.log(`      Location: ${location.url}:${location.lineNumber}:${location.columnNumber}`);
      });
    }

    expect(errors, 'No console errors should be present during API calls').toHaveLength(0);
  });
});
