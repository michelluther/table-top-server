# Testing Guide

This directory contains the testing infrastructure for the DSA Cockpit backend.

## Test Stack

- **Vitest** - Fast, modern test runner
- **@testing-library/react** - React component testing
- **Happy DOM** - Lightweight DOM implementation for tests
- **In-Memory SQLite** - Isolated database for each test run

## Running Tests

```bash
# Run tests in watch mode (recommended during development)
npm test

# Run tests once
npm run test:run

# Run tests with UI (great for debugging)
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

```
tests/
├── setup.ts              # Global test setup
├── helpers/
│   ├── testDb.ts         # In-memory database utilities
│   └── mockData.ts       # Test data fixtures
src/
├── lib/__tests__/        # Unit tests for lib functions
└── app/api/__tests__/    # Integration tests for API routes
```

## Writing Tests

### Unit Tests

Test individual functions in isolation:

```typescript
import { describe, it, expect } from 'vitest';
import { myFunction } from '../myFunction';

describe('myFunction', () => {
  it('should do something', () => {
    const result = myFunction('input');
    expect(result).toBe('expected output');
  });
});
```

### Integration Tests (API Routes)

Test API routes with database:

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { getTestPrisma, clearTestData, seedTestData } from '../../../tests/helpers/testDb';

describe('My API', () => {
  beforeEach(async () => {
    await clearTestData();
    await seedTestData();
  });

  it('should fetch data from database', async () => {
    const prisma = getTestPrisma();
    const data = await prisma.myTable.findMany();
    expect(data).toBeDefined();
  });
});
```

## Test Helpers

### Database Helpers

- `setupTestDatabase()` - Initialize in-memory test database
- `cleanupTestDatabase()` - Clean up after all tests
- `clearTestData()` - Clear all data between tests
- `seedTestData()` - Seed database with test fixtures
- `getTestPrisma()` - Get Prisma client for testing

### Mock Data

- `createMockUser()` - Create test user
- `createMockStaffUser()` - Create staff user
- `createMockSuperuser()` - Create superuser
- `createMockCharacter()` - Create test character
- `createMockAdventure()` - Create test adventure

## Best Practices

1. **Isolation**: Each test should be independent
2. **Clean Up**: Use `beforeEach` to reset database state
3. **Descriptive Names**: Test names should describe what they test
4. **Arrange-Act-Assert**: Structure tests clearly
5. **Fast Tests**: Keep tests fast by using in-memory database

## Example Test

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { getTestPrisma, clearTestData, seedTestData } from '../../../tests/helpers/testDb';

describe('Character API', () => {
  let testData: Awaited<ReturnType<typeof seedTestData>>;

  beforeEach(async () => {
    // Arrange: Reset and seed database
    await clearTestData();
    testData = await seedTestData();
  });

  it('should return character by ID', async () => {
    // Arrange
    const prisma = getTestPrisma();

    // Act
    const character = await prisma.dsa_starter_character.findUnique({
      where: { id: testData.testCharacter.id },
    });

    // Assert
    expect(character).toBeDefined();
    expect(character?.name).toBe('Test Hero');
  });
});
```

## Debugging Tests

### Using Vitest UI

```bash
npm run test:ui
```

This opens a browser UI where you can:
- See test results visually
- Debug failing tests
- Re-run specific tests
- View test coverage

### Debug Logs

Set `DEBUG_TESTS=true` to see Prisma queries:

```bash
DEBUG_TESTS=true npm test
```

## Coverage

Generate coverage reports:

```bash
npm run test:coverage
```

Coverage reports are generated in `coverage/` directory.

## Troubleshooting

### Tests fail with "Test database not initialized"

Make sure `setupTestDatabase()` runs in `tests/setup.ts`.

### Database schema errors

Run Prisma generate:

```bash
npx prisma generate
```

### Slow tests

- Check if you're creating too much test data
- Use `test:run` instead of watch mode for CI
- Consider mocking external dependencies

## CI/CD Integration

Add to your CI pipeline:

```yaml
- name: Run tests
  run: npm run test:run

- name: Generate coverage
  run: npm run test:coverage

- name: Upload coverage
  uses: codecov/codecov-action@v3
```
