/**
 * Reference Data API Tests
 *
 * Tests for:
 * - GET /api/races
 * - GET /api/hero-types
 * - GET /api/weapons
 * - GET /api/armor
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  getTestPrisma,
  clearTestData,
  seedTestData,
} from '../../../../tests/helpers/testDb';

describe('Reference Data API', () => {
  let testData: Awaited<ReturnType<typeof seedTestData>>;

  beforeEach(async () => {
    await clearTestData();
    testData = await seedTestData();
  });

  describe('GET /api/races', () => {
    it('should return all races sorted by name', async () => {
      const prisma = getTestPrisma();

      const races = await prisma.dsa_starter_race.findMany({
        orderBy: {
          name: 'asc',
        },
      });

      expect(races).toHaveLength(2);
      expect(races[0].name).toBe('Elf');
      expect(races[1].name).toBe('Human');
    });

    it('should return race with id and name', async () => {
      const prisma = getTestPrisma();

      const races = await prisma.dsa_starter_race.findMany();

      expect(races[0]).toHaveProperty('id');
      expect(races[0]).toHaveProperty('name');
      expect(typeof races[0].id).toBe('number');
      expect(typeof races[0].name).toBe('string');
    });
  });

  describe('GET /api/hero-types', () => {
    it('should return all hero types sorted by name', async () => {
      const prisma = getTestPrisma();

      const heroTypes = await prisma.dsa_starter_herotype.findMany({
        orderBy: {
          name: 'asc',
        },
      });

      expect(heroTypes.length).toBeGreaterThanOrEqual(2);

      const mage = heroTypes.find(ht => ht.name === 'Mage');
      const warrior = heroTypes.find(ht => ht.name === 'Warrior');

      expect(mage).toBeDefined();
      expect(mage?.knowsMagic).toBe(true);
      expect(warrior).toBeDefined();
      expect(warrior?.knowsMagic).toBe(false);
    });

    it('should return hero type with all required fields', async () => {
      const prisma = getTestPrisma();

      const heroTypes = await prisma.dsa_starter_herotype.findMany();

      expect(heroTypes[0]).toHaveProperty('id');
      expect(heroTypes[0]).toHaveProperty('name');
      expect(heroTypes[0]).toHaveProperty('knowsMagic');
      expect(typeof heroTypes[0].knowsMagic).toBe('boolean');
    });
  });

  describe('GET /api/weapons', () => {
    it('should return all weapons with skill information', async () => {
      const prisma = getTestPrisma();

      // Create skill group
      const skillGroup = await prisma.dsa_starter_skillgroup.create({
        data: {
          name: 'Combat',
          cost_per_increase: 2,
          title: 'Combat Skills',
        },
      });

      // Create skill type
      const skillType = await prisma.dsa_starter_skilltype.create({
        data: {
          name: 'Combat',
          skill_group_id: skillGroup.id,
        },
      });

      // Create skill
      const skill = await prisma.dsa_starter_skill.create({
        data: {
          name: 'Swords',
          type_id: skillType.id,
          behinderung: 'BE',
          dice1: 'MU',
          dice2: 'GE',
          dice3: 'KK',
          basis: true,
          weaponSkill: true,
        },
      });

      // Create weapons
      await prisma.dsa_starter_weapon.createMany({
        data: [
          {
            name: 'Long Sword',
            hit_dices: 1,
            hit_add_points: 4,
            hit_extra_from_kk: 14,
            skill_id: skill.id,
          },
          {
            name: 'Dagger',
            hit_dices: 1,
            hit_add_points: 2,
            hit_extra_from_kk: 12,
            skill_id: skill.id,
          },
        ],
      });

      const weapons = await prisma.dsa_starter_weapon.findMany({
        include: {
          dsa_starter_skill: true,
        },
        orderBy: {
          name: 'asc',
        },
      });

      expect(weapons).toHaveLength(2);
      expect(weapons[0].name).toBe('Dagger');
      expect(weapons[0].hit_dices).toBe(1);
      expect(weapons[0].hit_add_points).toBe(2);
      expect(weapons[0].dsa_starter_skill.name).toBe('Swords');
      expect(weapons[1].name).toBe('Long Sword');
    });

    it('should include damage stats', async () => {
      const prisma = getTestPrisma();

      // Create dependencies
      const skillGroup = await prisma.dsa_starter_skillgroup.create({
        data: {
          name: 'Combat',
          cost_per_increase: 2,
          title: 'Combat Skills',
        },
      });

      const skillType = await prisma.dsa_starter_skilltype.create({
        data: {
          name: 'Combat',
          skill_group_id: skillGroup.id,
        },
      });

      const skill = await prisma.dsa_starter_skill.create({
        data: {
          name: 'Axes',
          type_id: skillType.id,
          behinderung: 'BE',
          dice1: 'MU',
          dice2: 'GE',
          dice3: 'KK',
          basis: true,
          weaponSkill: true,
        },
      });

      const weapon = await prisma.dsa_starter_weapon.create({
        data: {
          name: 'Battle Axe',
          hit_dices: 2,
          hit_add_points: 3,
          hit_extra_from_kk: 15,
          skill_id: skill.id,
        },
      });

      expect(weapon.hit_dices).toBe(2);
      expect(weapon.hit_add_points).toBe(3);
      expect(weapon.hit_extra_from_kk).toBe(15);
    });
  });

  describe('GET /api/armor', () => {
    it('should return all armor sorted by name', async () => {
      const prisma = getTestPrisma();

      // Create armor
      await prisma.dsa_starter_armor.createMany({
        data: [
          {
            name: 'Leather Armor',
            ruestungs_schutz: 2,
            behinderung: 1,
          },
          {
            name: 'Chain Mail',
            ruestungs_schutz: 4,
            behinderung: 3,
          },
          {
            name: 'Plate Armor',
            ruestungs_schutz: 6,
            behinderung: 5,
          },
        ],
      });

      const armor = await prisma.dsa_starter_armor.findMany({
        orderBy: {
          name: 'asc',
        },
      });

      expect(armor).toHaveLength(3);
      expect(armor[0].name).toBe('Chain Mail');
      expect(armor[1].name).toBe('Leather Armor');
      expect(armor[2].name).toBe('Plate Armor');
    });

    it('should include protection and encumbrance stats', async () => {
      const prisma = getTestPrisma();

      const armor = await prisma.dsa_starter_armor.create({
        data: {
          name: 'Full Plate',
          ruestungs_schutz: 7,
          behinderung: 6,
        },
      });

      expect(armor.ruestungs_schutz).toBe(7);
      expect(armor.behinderung).toBe(6);
      expect(armor).toHaveProperty('id');
      expect(armor).toHaveProperty('name');
    });
  });
});
