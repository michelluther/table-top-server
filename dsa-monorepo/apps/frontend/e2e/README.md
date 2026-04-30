# Frontend Integration Tests (E2E)

This directory contains Playwright integration tests for the DSA Cockpit Angular frontend.

## Overview

The test suite provides comprehensive integration testing for:
- **App Loading & Navigation**: Basic app functionality and routing
- **Characters API**: Backend integration for character data
- **Skills API**: Backend integration for skills and skill types
- **WebSocket**: Socket.IO connections for real-time features

## Test Files

### `app.spec.ts`
Tests basic application functionality:
- App loading and initial routing
- Page title verification
- Navigation between player and master views

### `api-characters.spec.ts`
Tests character API integration:
- Fetching characters from `/api/characters`
- Response structure validation
- Error handling
- Credential/authentication headers

### `api-skills.spec.ts`
Tests skills API integration:
- Fetching skills from `/api/skills`
- Fetching skill types from `/api/skill-types`
- Direct API endpoint testing
- Response structure validation

### `websocket.spec.ts`
Tests WebSocket/Socket.IO functionality:
- Connection to `/heroes` namespace
- Connection to `/remoteControl` namespace
- Reconnection handling
- Server availability

## Running Tests

### Prerequisites

Ensure both servers are running:
- **Backend**: `cd apps/backend && npm run dev` (http://localhost:3000)
- **Frontend**: `cd apps/frontend && npm start` (http://localhost:4200)

Or use the Playwright config which will start them automatically.

### Commands

From the monorepo root:

```bash
# Run all tests (headless)
npm run test:e2e

# Run tests with UI (interactive mode)
npm run test:e2e:ui

# Run tests in headed mode (see browser)
npm run test:e2e:headed

# Run tests in debug mode
npm run test:e2e:debug

# View HTML test report
npm run test:e2e:report
```

### Running Specific Tests

```bash
# Run specific test file
npx playwright test apps/frontend/e2e/api-characters.spec.ts

# Run specific test by name
npx playwright test -g "should fetch characters"

# Run tests matching a pattern
npx playwright test api-
```

## Test Results

Current test coverage (16 tests):
- ✅ 4 App loading & navigation tests
- ✅ 4 Characters API tests
- ✅ 4 Skills API tests
- ✅ 4 WebSocket tests

**All tests passing** ✨

## Configuration

Test configuration is in `playwright.config.ts` at the monorepo root:
- Test directory: `apps/frontend/e2e`
- Base URL: `http://localhost:4200`
- Browser: Chromium
- Timeout: 30 seconds per test
- Screenshots: On failure only
- Traces: On first retry

## CI/CD

The test suite is designed to work in CI environments:
- Uses `process.env.CI` for CI-specific behavior
- Automatically starts servers if not running
- Retries failed tests 2 times on CI
- Runs in parallel with appropriate workers

## Debugging

### View Test Traces

```bash
npx playwright show-trace test-results/path-to-trace.zip
```

### View Screenshots

Screenshots are saved in `test-results/` directory on failure.

### Console Logs

Tests capture console logs from the browser. Check test output for debugging information.

## Adding New Tests

1. Create a new `.spec.ts` file in this directory
2. Import test utilities: `import { test, expect } from '@playwright/test';`
3. Wrap tests in `test.describe()` blocks
4. Use `page` fixture for browser interactions
5. Use `request` fixture for direct API calls

Example:
```typescript
import { test, expect } from '@playwright/test';

test.describe('My Feature', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/my-feature');
    await expect(page).toHaveURL(/my-feature/);
  });
});
```

## Troubleshooting

### Tests timeout
- Increase timeout in `playwright.config.ts`
- Check if servers are running
- Check network connectivity

### WebSocket tests fail
- Ensure Socket.IO server is configured correctly
- Check CORS settings
- Verify namespace paths

### API tests fail
- Verify backend is running on port 3000
- Check authentication/credentials
- Verify CORS middleware is active
