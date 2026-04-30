import { chromium } from 'playwright';

const consoleMessages = [];
const pageErrors = [];

async function inspectConsoleErrors() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Listen to console messages
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    consoleMessages.push({ type, text });

    if (type === 'error' || type === 'warning') {
      console.log(`[${type.toUpperCase()}] ${text}`);
    }
  });

  // Listen to page errors
  page.on('pageerror', error => {
    pageErrors.push(error.message);
    console.log(`[PAGE ERROR] ${error.message}`);
  });

  // Listen to failed requests
  page.on('requestfailed', request => {
    console.log(`[REQUEST FAILED] ${request.url()} - ${request.failure().errorText}`);
  });

  try {
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Wait a bit for any async errors to occur
    await page.waitForTimeout(3000);

    console.log('\n=== Summary ===');
    console.log(`Total console messages: ${consoleMessages.length}`);
    console.log(`Errors: ${consoleMessages.filter(m => m.type === 'error').length}`);
    console.log(`Warnings: ${consoleMessages.filter(m => m.type === 'warning').length}`);
    console.log(`Page errors: ${pageErrors.length}`);

    // Try to navigate to admin/characters if we can
    try {
      console.log('\nNavigating to /admin/characters...');
      await page.goto('http://localhost:3000/admin/characters', {
        waitUntil: 'networkidle',
        timeout: 30000
      });
      await page.waitForTimeout(3000);
    } catch (e) {
      console.log('Could not navigate to /admin/characters:', e.message);
    }

    // Try to navigate to API endpoint
    try {
      console.log('\nNavigating to /api/characters...');
      await page.goto('http://localhost:3000/api/characters', {
        waitUntil: 'networkidle',
        timeout: 30000
      });
      await page.waitForTimeout(2000);

      // Get the response text
      const content = await page.content();
      console.log('API Response preview:', content.substring(0, 200));
    } catch (e) {
      console.log('Could not navigate to /api/characters:', e.message);
    }

  } catch (error) {
    console.error('Error during inspection:', error);
  } finally {
    await browser.close();
  }

  return { consoleMessages, pageErrors };
}

inspectConsoleErrors()
  .then(() => {
    console.log('\n=== Inspection complete ===');
  })
  .catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
