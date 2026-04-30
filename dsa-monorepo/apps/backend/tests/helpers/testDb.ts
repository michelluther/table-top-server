/**
 * Test Database Helper
 *
 * Sets up an in-memory SQLite database for testing.
 * This gives us fast, isolated tests that still use real Prisma queries.
 */

import { PrismaClient } from '@/generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import Database from 'better-sqlite3';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

let testPrisma: PrismaClient | null = null;
let testDb: Database.Database | null = null;

/**
 * Get the test Prisma client
 */
export function getTestPrisma(): PrismaClient {
  if (!testPrisma) {
    throw new Error('Test database not initialized. Call setupTestDatabase() first.');
  }
  return testPrisma;
}

/**
 * Setup the test database
 */
export async function setupTestDatabase() {
  console.log('[Test DB] Setting up test database...');

  // Use a dedicated test database file
  const testDbPath = path.join(__dirname, '../../test.db');

  console.log('[Test DB] Using test database:', testDbPath);

  // Remove existing test database if it exists
  if (fs.existsSync(testDbPath)) {
    fs.unlinkSync(testDbPath);
    console.log('[Test DB] Removed existing test database');
  }

  // Run Prisma migrations to set up the schema
  console.log('[Test DB] Running Prisma migrations...');
  execSync(`npx prisma db push --accept-data-loss --url file:${testDbPath}`, {
    stdio: 'inherit',
  });

  // Create Prisma adapter with test database URL
  const adapter = new PrismaBetterSqlite3({ url: `file:${testDbPath}` });

  // Create Prisma client
  testPrisma = new PrismaClient({
    adapter: adapter as any,
    log: process.env.DEBUG_TESTS ? ['query', 'error', 'warn'] : ['error'],
  });

  console.log('[Test DB] Test database ready');
}

/**
 * Clean up the test database
 */
export async function cleanupTestDatabase() {
  console.log('[Test DB] Cleaning up test database...');

  if (testPrisma) {
    await testPrisma.$disconnect();
    testPrisma = null;
  }

  // Remove the test database file
  const testDbPath = path.join(__dirname, '../../test.db');
  if (fs.existsSync(testDbPath)) {
    fs.unlinkSync(testDbPath);
    console.log('[Test DB] Removed test database file');
  }

  console.log('[Test DB] Test database cleaned up');
}

/**
 * Clear all data from test database tables
 */
export async function clearTestData() {
  const prisma = getTestPrisma();

  // Delete in correct order to respect foreign keys
  await prisma.$transaction([
    prisma.dsa_starter_inventoryitem.deleteMany(),
    prisma.dsa_starter_characterhasarmor.deleteMany(),
    prisma.dsa_starter_characterhasweapon.deleteMany(),
    prisma.dsa_starter_weaponskilldistribution.deleteMany(),
    prisma.dsa_starter_actualspellskill.deleteMany(),
    prisma.dsa_starter_actualskill.deleteMany(),
    prisma.dsa_starter_fightparticipation.deleteMany(),
    prisma.dsa_starter_fight.deleteMany(),
    prisma.dsa_starter_adventureimage.deleteMany(),
    prisma.dsa_starter_adventurelocation.deleteMany(),
    prisma.dsa_starter_adventurecharacter.deleteMany(),
    prisma.dsa_starter_adventure.deleteMany(),
    prisma.dsa_starter_nonplayercharacterhasweapon.deleteMany(),
    prisma.dsa_starter_nonplayercharacter.deleteMany(),
    prisma.dsa_starter_character.deleteMany(),
    prisma.auth_user_user_permissions.deleteMany(),
    prisma.auth_user_groups.deleteMany(),
    prisma.auth_user.deleteMany(),
  ]);
}

/**
 * Seed test database with minimal data
 */
export async function seedTestData() {
  const prisma = getTestPrisma();

  // Create test user
  const testUser = await prisma.auth_user.create({
    data: {
      username: 'testuser',
      email: 'test@example.com',
      password: 'pbkdf2_sha256$260000$test', // Django hash format
      first_name: 'Test',
      last_name: 'User',
      is_active: true,
      is_staff: false,
      is_superuser: false,
      date_joined: new Date(),
    },
  });

  // Create test races
  const humanRace = await prisma.dsa_starter_race.create({
    data: { name: 'Human' },
  });

  const elfRace = await prisma.dsa_starter_race.create({
    data: { name: 'Elf' },
  });

  // Create test hero types
  const warriorType = await prisma.dsa_starter_herotype.create({
    data: { name: 'Warrior', knowsMagic: false },
  });

  const mageType = await prisma.dsa_starter_herotype.create({
    data: { name: 'Mage', knowsMagic: true },
  });

  // Create test character
  const testCharacter = await prisma.dsa_starter_character.create({
    data: {
      name: 'Test Hero',
      created_date: new Date(),
      type_id: warriorType.id,
      race_id: humanRace.id,
      experience: 100,
      experience_used: 0,
      life: 30,
      life_lost: 0,
      magic_energy: 0,
      magic_energy_lost: 0,
      armor: 2,
      culture: 'Test Culture',
      gender: 'Male',
      size: 180,
      weight: 75,
      social_rank: 1,
      hair_color: 'Brown',
      eye_color: 'Blue',
      money_dukaten: 10,
      money_silbertaler: 50,
      money_heller: 100,
      money_kreuzer: 25,
      MU: 12,
      KL: 11,
      IN: 13,
      CH: 10,
      FF: 14,
      GE: 12,
      KO: 13,
      KK: 15,
      isHero: true,
    },
  });

  // Create test adventure
  const testAdventure = await prisma.dsa_starter_adventure.create({
    data: {
      name: 'Test Adventure',
      isActive: true,
    },
  });

  return {
    testUser,
    testCharacter,
    testAdventure,
    humanRace,
    elfRace,
    warriorType,
    mageType,
  };
}
