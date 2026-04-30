import { chromium } from 'playwright';

const consoleMessages = [];
const pageErrors = [];

async function inspectAngularErrors() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Listen to console messages
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    consoleMessages.push({ type, text });

    console.log(`[${type.toUpperCase()}] ${text}`);
  });

  // Listen to page errors
  page.on('pageerror', error => {
    pageErrors.push(error.message);
    console.log(`[PAGE ERROR] ${error.message}`);
    console.log(error.stack);
  });

  // Listen to failed requests
  page.on('requestfailed', request => {
    console.log(`[REQUEST FAILED] ${request.url()} - ${request.failure().errorText}`);
  });

  try {
    console.log('Navigating to Angular app at http://localhost:4200...');
    await page.goto('http://localhost:4200', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Wait for any async errors
    await page.waitForTimeout(5000);

    console.log('\n=== Summary ===');
    console.log(`Total console messages: ${consoleMessages.length}`);
    console.log(`Errors: ${consoleMessages.filter(m => m.type === 'error').length}`);
    console.log(`Warnings: ${consoleMessages.filter(m => m.type === 'warning').length}`);
    console.log(`Page errors: ${pageErrors.length}`);

  } catch (error) {
    console.error('Error during inspection:', error);
  } finally {
    await browser.close();
  }

  return { consoleMessages, pageErrors };
}

inspectAngularErrors()
  .then(() => {
    console.log('\n=== Inspection complete ===');
  })
  .catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
