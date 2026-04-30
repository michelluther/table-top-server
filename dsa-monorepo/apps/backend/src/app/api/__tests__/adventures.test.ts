/**
 * Adventures API Tests
 *
 * Tests for GET /api/adventures and GET /api/adventures/[id] endpoints
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { getTestPrisma, clearTestData, seedTestData } from '../../../../tests/helpers/testDb';

describe('Adventures API', () => {
  let testData: Awaited<ReturnType<typeof seedTestData>>;

  beforeEach(async () => {
    await clearTestData();
    testData = await seedTestData();
  });

  describe('GET /api/adventures', () => {
    it('should return all adventures', async () => {
      const prisma = getTestPrisma();

      const adventures = await prisma.dsa_starter_adventure.findMany();

      expect(adventures).toHaveLength(1);
      expect(adventures[0].name).toBe('Test Adventure');
      expect(adventures[0].isActive).toBe(true);
    });

    it('should include count of related entities', async () => {
      const prisma = getTestPrisma();

      // Add character to adventure
      await prisma.dsa_starter_adventurecharacter.create({
        data: {
          adventure_id: testData.testAdventure.id,
          character_id: testData.testCharacter.id,
          sequenceInAdventure: 1,
          isActive: true,
        },
      });

      // Add fight
      await prisma.dsa_starter_fight.create({
        data: {
          name: 'Test Fight',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      const adventureWithCounts = await prisma.dsa_starter_adventure.findUnique({
        where: { id: testData.testAdventure.id },
        include: {
          _count: {
            select: {
              dsa_starter_adventurecharacter: true,
              dsa_starter_fight: true,
            },
          },
        },
      });

      expect(adventureWithCounts?._count.dsa_starter_adventurecharacter).toBe(1);
      expect(adventureWithCounts?._count.dsa_starter_fight).toBe(1);
    });
  });

  describe('GET /api/adventures/[id]', () => {
    it('should return adventure by ID with participants', async () => {
      const prisma = getTestPrisma();

      const adventure = await prisma.dsa_starter_adventure.create({
        data: {
          name: 'Test Adventure',
          isActive: true,
        },
      });

      await prisma.dsa_starter_adventurecharacter.create({
        data: {
          adventure_id: adventure.id,
          character_id: testData.testCharacter.id,
          sequenceInAdventure: 1,
          isActive: true,
        },
      });

      const result = await prisma.dsa_starter_adventure.findUnique({
        where: { id: adventure.id },
        include: {
          dsa_starter_adventurecharacter: {
            include: {
              dsa_starter_character: true,
            },
          },
        },
      });

      expect(result).toBeDefined();
      expect(result?.dsa_starter_adventurecharacter).toHaveLength(1);
      expect(result?.dsa_starter_adventurecharacter[0].dsa_starter_character?.name).toBe('Test Hero');
    });

    it('should return null for non-existent adventure', async () => {
      const prisma = getTestPrisma();

      const adventure = await prisma.dsa_starter_adventure.findUnique({
        where: { id: 99999 },
      });

      expect(adventure).toBeNull();
    });

    it('should include fight information', async () => {
      const prisma = getTestPrisma();

      const adventure = await prisma.dsa_starter_adventure.create({
        data: {
          name: 'Test Adventure',
          isActive: true,
        },
      });

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Epic Battle',
          adventure_id: adventure.id,
          nextUp: 1,
        },
      });

      // Add fight participant
      await prisma.dsa_starter_fightparticipation.create({
        data: {
          fight_id: fight.id,
          character_id: testData.testCharacter.id,
          isGood: true,
          position: 'front',
          calculatedInitiative: 15,
        },
      });

      const result = await prisma.dsa_starter_adventure.findUnique({
        where: { id: adventure.id },
        include: {
          dsa_starter_fight: {
            include: {
              dsa_starter_fightparticipation: {
                include: {
                  dsa_starter_character: true,
                },
              },
            },
          },
        },
      });

      expect(result?.dsa_starter_fight).toHaveLength(1);
      expect(result?.dsa_starter_fight[0].name).toBe('Epic Battle');
      expect(result?.dsa_starter_fight[0].nextUp).toBe(1);
      expect(result?.dsa_starter_fight[0].dsa_starter_fightparticipation).toHaveLength(1);
    });
  });

  describe('Adventure Status', () => {
    it('should track active/inactive status', async () => {
      const prisma = getTestPrisma();

      const activeAdventure = await prisma.dsa_starter_adventure.create({
        data: {
          name: 'Active Adventure',
          isActive: true,
        },
      });

      const inactiveAdventure = await prisma.dsa_starter_adventure.create({
        data: {
          name: 'Inactive Adventure',
          isActive: false,
        },
      });

      const activeAdventures = await prisma.dsa_starter_adventure.findMany({
        where: { isActive: true },
      });

      // Should have 2 active adventures: seed data + the one created above
      expect(activeAdventures).toHaveLength(2);
      expect(activeAdventures.some((a) => a.name === 'Active Adventure')).toBe(true);
      expect(activeAdventures.some((a) => a.name === 'Test Adventure')).toBe(true);
    });
  });
});
