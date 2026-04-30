/**
 * Mock Data Fixtures
 *
 * Helper functions to create test data
 */

import type { Prisma } from '@/generated/prisma/client';

/**
 * Create a test user
 */
export function createMockUser(
  overrides?: Partial<Prisma.auth_userCreateInput>
): Prisma.auth_userCreateInput {
  return {
    username: 'testuser',
    email: 'test@example.com',
    password: 'pbkdf2_sha256$260000$testsalt$testhash',
    first_name: 'Test',
    last_name: 'User',
    is_active: true,
    is_staff: false,
    is_superuser: false,
    date_joined: new Date(),
    ...overrides,
  };
}

/**
 * Create a staff user
 */
export function createMockStaffUser(
  overrides?: Partial<Prisma.auth_userCreateInput>
): Prisma.auth_userCreateInput {
  return createMockUser({
    username: 'staffuser',
    email: 'staff@example.com',
    is_staff: true,
    ...overrides,
  });
}

/**
 * Create a superuser
 */
export function createMockSuperuser(
  overrides?: Partial<Prisma.auth_userCreateInput>
): Prisma.auth_userCreateInput {
  return createMockUser({
    username: 'superuser',
    email: 'super@example.com',
    is_staff: true,
    is_superuser: true,
    ...overrides,
  });
}

/**
 * Create a test character
 */
export function createMockCharacter(
  raceId: number,
  typeId: number,
  overrides?: Partial<Prisma.dsa_starter_characterCreateInput>
) {
  return {
    name: 'Test Hero',
    created_date: new Date(),
    race_id: raceId,
    type_id: typeId,
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
    ...overrides,
  };
}

/**
 * Create a test adventure
 */
export function createMockAdventure(
  overrides?: Partial<Prisma.dsa_starter_adventureCreateInput>
) {
  return {
    name: 'Test Adventure',
    isActive: true,
    ...overrides,
  };
}
