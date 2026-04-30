/**
 * Vitest Test Setup
 *
 * This file runs before all tests and sets up the testing environment.
 */

import { beforeAll, afterAll, afterEach } from 'vitest';
import { cleanupTestDatabase, setupTestDatabase } from './helpers/testDb';

// Setup test database before all tests
beforeAll(async () => {
  await setupTestDatabase();
});

// Clean up test database after all tests
afterAll(async () => {
  await cleanupTestDatabase();
});

// Reset database state after each test
afterEach(async () => {
  // We'll implement this to clean up test data
});

// Set up environment variables for testing
process.env.NODE_ENV = 'test';
process.env.NEXTAUTH_SECRET = 'test-secret-key-for-testing-only';
process.env.NEXTAUTH_URL = 'http://localhost:3000';
