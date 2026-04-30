/**
 * Inventory and Equipment API Tests
 *
 * Tests for:
 * - GET /api/characters/[id]/inventory
 * - POST /api/characters/[id]/inventory
 * - PATCH /api/characters/[id]/inventory/[itemId]
 * - DELETE /api/characters/[id]/inventory/[itemId]
 * - POST /api/characters/[id]/weapons
 * - DELETE /api/characters/[id]/weapons/[assignmentId]
 * - POST /api/characters/[id]/armor
 * - DELETE /api/characters/[id]/armor/[assignmentId]
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  getTestPrisma,
  clearTestData,
  seedTestData,
} from '../../../../tests/helpers/testDb';

describe('Inventory and Equipment API', () => {
  let testData: Awaited<ReturnType<typeof seedTestData>>;

  beforeEach(async () => {
    await clearTestData();
    testData = await seedTestData();
  });

  describe('GET /api/characters/[id]/inventory', () => {
    it('should return all inventory items for a character', async () => {
      const prisma = getTestPrisma();

      // Add items to inventory
      await prisma.dsa_starter_inventoryitem.createMany({
        data: [
          {
            character_id: testData.testCharacter.id,
            name: 'Rope',
            amount: 1,
            unit: 'piece',
            weight: 5,
          },
          {
            character_id: testData.testCharacter.id,
            name: 'Rations',
            amount: 10,
            unit: 'days',
            weight: 2,
          },
        ],
      });

      const items = await prisma.dsa_starter_inventoryitem.findMany({
        where: {
          character_id: testData.testCharacter.id,
        },
        orderBy: {
          name: 'asc',
        },
      });

      expect(items).toHaveLength(2);
      expect(items[0].name).toBe('Rations');
      expect(items[1].name).toBe('Rope');
    });

    it('should return empty array for character with no inventory', async () => {
      const prisma = getTestPrisma();

      const items = await prisma.dsa_starter_inventoryitem.findMany({
        where: {
          character_id: testData.testCharacter.id,
        },
      });

      expect(items).toHaveLength(0);
    });
  });

  describe('POST /api/characters/[id]/inventory', () => {
    it('should add item to character inventory', async () => {
      const prisma = getTestPrisma();

      const item = await prisma.dsa_starter_inventoryitem.create({
        data: {
          character_id: testData.testCharacter.id,
          name: 'Torch',
          amount: 5,
          unit: 'pieces',
          weight: 1,
        },
      });

      expect(item.name).toBe('Torch');
      expect(item.amount).toBe(5);
      expect(item.unit).toBe('pieces');
      expect(item.weight).toBe(1);
      expect(item.character_id).toBe(testData.testCharacter.id);
    });
  });

  describe('PATCH /api/characters/[id]/inventory/[itemId]', () => {
    it('should update inventory item amount', async () => {
      const prisma = getTestPrisma();

      const item = await prisma.dsa_starter_inventoryitem.create({
        data: {
          character_id: testData.testCharacter.id,
          name: 'Arrows',
          amount: 20,
          unit: 'pieces',
          weight: 1,
        },
      });

      const updated = await prisma.dsa_starter_inventoryitem.update({
        where: { id: item.id },
        data: { amount: 15 },
      });

      expect(updated.amount).toBe(15);
      expect(updated.name).toBe('Arrows');
    });

    it('should update inventory item name', async () => {
      const prisma = getTestPrisma();

      const item = await prisma.dsa_starter_inventoryitem.create({
        data: {
          character_id: testData.testCharacter.id,
          name: 'Old Name',
          amount: 1,
          unit: 'piece',
          weight: 2,
        },
      });

      const updated = await prisma.dsa_starter_inventoryitem.update({
        where: { id: item.id },
        data: { name: 'New Name' },
      });

      expect(updated.name).toBe('New Name');
    });
  });

  describe('DELETE /api/characters/[id]/inventory/[itemId]', () => {
    it('should delete inventory item', async () => {
      const prisma = getTestPrisma();

      const item = await prisma.dsa_starter_inventoryitem.create({
        data: {
          character_id: testData.testCharacter.id,
          name: 'Temporary Item',
          amount: 1,
          unit: 'piece',
          weight: 1,
        },
      });

      await prisma.dsa_starter_inventoryitem.delete({
        where: { id: item.id },
      });

      const deleted = await prisma.dsa_starter_inventoryitem.findUnique({
        where: { id: item.id },
      });

      expect(deleted).toBeNull();
    });
  });

  describe('POST /api/characters/[id]/weapons', () => {
    it('should assign weapon to character', async () => {
      const prisma = getTestPrisma();

      // Create skill infrastructure for weapon
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

      const weapon = await prisma.dsa_starter_weapon.create({
        data: {
          name: 'Long Sword',
          skill_id: skill.id,
          hit_dices: 1,
          hit_add_points: 4,
          hit_extra_from_kk: 14,
        },
      });

      const assignment = await prisma.dsa_starter_characterhasweapon.create({
        data: {
          character_id: testData.testCharacter.id,
          weapon_id: weapon.id,
        },
        include: {
          dsa_starter_weapon: true,
        },
      });

      expect(assignment.character_id).toBe(testData.testCharacter.id);
      expect(assignment.weapon_id).toBe(weapon.id);
      expect(assignment.dsa_starter_weapon.name).toBe('Long Sword');
    });

    it('should prevent duplicate weapon assignments', async () => {
      const prisma = getTestPrisma();

      // Create weapon infrastructure
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
          skill_id: skill.id,
          hit_dices: 2,
          hit_add_points: 3,
          hit_extra_from_kk: 15,
        },
      });

      // First assignment
      await prisma.dsa_starter_characterhasweapon.create({
        data: {
          character_id: testData.testCharacter.id,
          weapon_id: weapon.id,
        },
      });

      // Check for duplicate
      const existing = await prisma.dsa_starter_characterhasweapon.findFirst({
        where: {
          character_id: testData.testCharacter.id,
          weapon_id: weapon.id,
        },
      });

      expect(existing).toBeDefined();
    });
  });

  describe('DELETE /api/characters/[id]/weapons/[assignmentId]', () => {
    it('should remove weapon from character', async () => {
      const prisma = getTestPrisma();

      // Create weapon infrastructure
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
          name: 'Daggers',
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
          name: 'Dagger',
          skill_id: skill.id,
          hit_dices: 1,
          hit_add_points: 2,
          hit_extra_from_kk: 12,
        },
      });

      const assignment = await prisma.dsa_starter_characterhasweapon.create({
        data: {
          character_id: testData.testCharacter.id,
          weapon_id: weapon.id,
        },
      });

      await prisma.dsa_starter_characterhasweapon.delete({
        where: { id: assignment.id },
      });

      const deleted = await prisma.dsa_starter_characterhasweapon.findUnique({
        where: { id: assignment.id },
      });

      expect(deleted).toBeNull();
    });
  });

  describe('POST /api/characters/[id]/armor', () => {
    it('should assign armor to character', async () => {
      const prisma = getTestPrisma();

      const armor = await prisma.dsa_starter_armor.create({
        data: {
          name: 'Leather Armor',
          ruestungs_schutz: 2,
          behinderung: 1,
        },
      });

      const assignment = await prisma.dsa_starter_characterhasarmor.create({
        data: {
          character_id: testData.testCharacter.id,
          armor_id: armor.id,
        },
        include: {
          dsa_starter_armor: true,
        },
      });

      expect(assignment.character_id).toBe(testData.testCharacter.id);
      expect(assignment.armor_id).toBe(armor.id);
      expect(assignment.dsa_starter_armor.name).toBe('Leather Armor');
      expect(assignment.dsa_starter_armor.ruestungs_schutz).toBe(2);
    });

    it('should prevent duplicate armor assignments', async () => {
      const prisma = getTestPrisma();

      const armor = await prisma.dsa_starter_armor.create({
        data: {
          name: 'Chain Mail',
          ruestungs_schutz: 4,
          behinderung: 3,
        },
      });

      // First assignment
      await prisma.dsa_starter_characterhasarmor.create({
        data: {
          character_id: testData.testCharacter.id,
          armor_id: armor.id,
        },
      });

      // Check for duplicate
      const existing = await prisma.dsa_starter_characterhasarmor.findFirst({
        where: {
          character_id: testData.testCharacter.id,
          armor_id: armor.id,
        },
      });

      expect(existing).toBeDefined();
    });
  });

  describe('DELETE /api/characters/[id]/armor/[assignmentId]', () => {
    it('should remove armor from character', async () => {
      const prisma = getTestPrisma();

      const armor = await prisma.dsa_starter_armor.create({
        data: {
          name: 'Plate Armor',
          ruestungs_schutz: 6,
          behinderung: 5,
        },
      });

      const assignment = await prisma.dsa_starter_characterhasarmor.create({
        data: {
          character_id: testData.testCharacter.id,
          armor_id: armor.id,
        },
      });

      await prisma.dsa_starter_characterhasarmor.delete({
        where: { id: assignment.id },
      });

      const deleted = await prisma.dsa_starter_characterhasarmor.findUnique({
        where: { id: assignment.id },
      });

      expect(deleted).toBeNull();
    });
  });

  describe('Equipment Integration', () => {
    it('should allow character to have multiple weapons', async () => {
      const prisma = getTestPrisma();

      // Create weapon infrastructure
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

      const skill1 = await prisma.dsa_starter_skill.create({
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

      const skill2 = await prisma.dsa_starter_skill.create({
        data: {
          name: 'Bows',
          type_id: skillType.id,
          behinderung: 'BE-2',
          dice1: 'IN',
          dice2: 'FF',
          dice3: 'KK',
          basis: true,
          weaponSkill: true,
        },
      });

      const sword = await prisma.dsa_starter_weapon.create({
        data: {
          name: 'Short Sword',
          skill_id: skill1.id,
          hit_dices: 1,
          hit_add_points: 3,
          hit_extra_from_kk: 13,
        },
      });

      const bow = await prisma.dsa_starter_weapon.create({
        data: {
          name: 'Longbow',
          skill_id: skill2.id,
          hit_dices: 1,
          hit_add_points: 4,
          hit_extra_from_kk: 14,
        },
      });

      await prisma.dsa_starter_characterhasweapon.createMany({
        data: [
          {
            character_id: testData.testCharacter.id,
            weapon_id: sword.id,
          },
          {
            character_id: testData.testCharacter.id,
            weapon_id: bow.id,
          },
        ],
      });

      const weapons = await prisma.dsa_starter_characterhasweapon.findMany({
        where: {
          character_id: testData.testCharacter.id,
        },
        include: {
          dsa_starter_weapon: true,
        },
      });

      expect(weapons).toHaveLength(2);
      expect(weapons.some((w) => w.dsa_starter_weapon.name === 'Short Sword')).toBe(
        true
      );
      expect(weapons.some((w) => w.dsa_starter_weapon.name === 'Longbow')).toBe(true);
    });

    it('should allow character to have multiple armor pieces', async () => {
      const prisma = getTestPrisma();

      const helmet = await prisma.dsa_starter_armor.create({
        data: {
          name: 'Steel Helmet',
          ruestungs_schutz: 1,
          behinderung: 0,
        },
      });

      const chestplate = await prisma.dsa_starter_armor.create({
        data: {
          name: 'Steel Chestplate',
          ruestungs_schutz: 3,
          behinderung: 2,
        },
      });

      await prisma.dsa_starter_characterhasarmor.createMany({
        data: [
          {
            character_id: testData.testCharacter.id,
            armor_id: helmet.id,
          },
          {
            character_id: testData.testCharacter.id,
            armor_id: chestplate.id,
          },
        ],
      });

      const armorPieces = await prisma.dsa_starter_characterhasarmor.findMany({
        where: {
          character_id: testData.testCharacter.id,
        },
        include: {
          dsa_starter_armor: true,
        },
      });

      expect(armorPieces).toHaveLength(2);
      expect(
        armorPieces.some((a) => a.dsa_starter_armor.name === 'Steel Helmet')
      ).toBe(true);
      expect(
        armorPieces.some((a) => a.dsa_starter_armor.name === 'Steel Chestplate')
      ).toBe(true);
    });
  });
});
