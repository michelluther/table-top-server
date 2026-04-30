/**
 * Playwright Fixture for Console Error Monitoring
 *
 * This fixture automatically monitors and validates console messages
 * for every test, ensuring no console errors occur during test execution.
 */

import { test as base, expect, Page, ConsoleMessage } from '@playwright/test';

type ConsoleMonitorFixture = {
  page: Page;
  consoleErrors: ConsoleMessage[];
  consoleWarnings: ConsoleMessage[];
};

/**
 * Extended test fixture with automatic console error monitoring
 *
 * Usage:
 * ```typescript
 * import { test, expect } from './fixtures/console-monitor';
 *
 * test('my test', async ({ page }) => {
 *   await page.goto('/');
 *   // Console errors are automatically checked after the test
 * });
 * ```
 */
export const test = base.extend<ConsoleMonitorFixture>({
  consoleErrors: async ({}, use) => {
    const errors: ConsoleMessage[] = [];
    await use(errors);
  },

  consoleWarnings: async ({}, use) => {
    const warnings: ConsoleMessage[] = [];
    await use(warnings);
  },

  page: async ({ page, consoleErrors, consoleWarnings }, use, testInfo) => {
    // Set up console monitoring
    page.on('console', (msg) => {
      const type = msg.type();
      const text = msg.text();

      if (type === 'error') {
        consoleErrors.push(msg);
        console.log(`❌ Console Error in ${testInfo.title}: ${text}`);
      } else if (type === 'warning') {
        consoleWarnings.push(msg);
        console.log(`⚠️  Console Warning in ${testInfo.title}: ${text}`);
      }
    });

    // Listen for uncaught page errors
    page.on('pageerror', (error) => {
      console.log(`💥 Uncaught Error in ${testInfo.title}: ${error.message}`);
    });

    // Use the page in the test
    await use(page);

    // After the test completes, check for console errors
    if (consoleErrors.length > 0) {
      console.log(`\n📊 Console Error Report for "${testInfo.title}":`);
      console.log(`   Errors: ${consoleErrors.length}`);
      console.log(`   Warnings: ${consoleWarnings.length}`);

      console.log('\n❌ Console Errors Found:');
      consoleErrors.forEach((msg, idx) => {
        console.log(`   ${idx + 1}. ${msg.text()}`);
        const location = msg.location();
        console.log(`      Location: ${location.url}:${location.lineNumber}:${location.columnNumber}`);
      });

      // Fail the test with detailed error information
      const errorDetails = consoleErrors.map((msg, idx) => {
        const loc = msg.location();
        return `  ${idx + 1}. ${msg.text()}\n     at ${loc.url}:${loc.lineNumber}:${loc.columnNumber}`;
      }).join('\n');

      expect(
        consoleErrors,
        `Test "${testInfo.title}" produced ${consoleErrors.length} console error(s):\n${errorDetails}`
      ).toHaveLength(0);
    }
  },
});

export { expect } from '@playwright/test';
