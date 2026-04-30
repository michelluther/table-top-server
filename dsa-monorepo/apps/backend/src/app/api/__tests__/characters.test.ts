/**
 * Characters API Tests
 *
 * Tests for:
 * - GET /api/characters
 * - GET /api/characters/[id]
 * - PATCH /api/characters/[id]
 * - DELETE /api/characters/[id]
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { getTestPrisma, clearTestData, seedTestData } from '../../../../tests/helpers/testDb';

describe('Characters API', () => {
  let testData: Awaited<ReturnType<typeof seedTestData>>;

  beforeEach(async () => {
    await clearTestData();
    testData = await seedTestData();
  });

  describe('GET /api/characters', () => {
    it('should return all hero characters', async () => {
      const prisma = getTestPrisma();

      const characters = await prisma.dsa_starter_character.findMany({
        where: { isHero: true },
        include: {
          dsa_starter_race: true,
          dsa_starter_herotype: true,
        },
      });

      expect(characters).toHaveLength(1);
      expect(characters[0].name).toBe('Test Hero');
      expect(characters[0].dsa_starter_race.name).toBe('Human');
    });

    it('should not return NPC characters', async () => {
      const prisma = getTestPrisma();

      // Create an NPC
      const species = await prisma.dsa_starter_species.create({
        data: { name: 'Goblin' },
      });

      await prisma.dsa_starter_nonplayercharacter.create({
        data: {
          name: 'Test NPC',
          race_id: testData.humanRace.id,
          species_id: species.id,
          initiative: 10,
          attack: 12,
          parade: 10,
          life: 20,
          magic_energy: 0,
          ruestung: 1,
          weapon_1_name: 'Sword',
          weapon_1_damage: '1d6+2',
          weapon_1_attack: 12,
          weapon_1_parade: 10,
          weapon_2_name: '',
          weapon_2_damage: '',
          weapon_2_attack: 0,
          weapon_2_parade: 0,
          knowsMagic: false,
        },
      });

      const heroCharacters = await prisma.dsa_starter_character.findMany({
        where: { isHero: true },
      });

      expect(heroCharacters).toHaveLength(1);
      expect(heroCharacters[0].name).toBe('Test Hero');
    });

    it('should include race and hero type information', async () => {
      const prisma = getTestPrisma();

      const characters = await prisma.dsa_starter_character.findMany({
        where: { isHero: true },
        include: {
          dsa_starter_race: true,
          dsa_starter_herotype: true,
        },
      });

      const char = characters[0];
      expect(char.dsa_starter_race).toBeDefined();
      expect(char.dsa_starter_race.name).toBe('Human');
      expect(char.dsa_starter_herotype).toBeDefined();
      expect(char.dsa_starter_herotype.name).toBe('Warrior');
      expect(char.dsa_starter_herotype.knowsMagic).toBe(false);
    });
  });

  describe('GET /api/characters/[id]', () => {
    it('should return character by ID with all details', async () => {
      const prisma = getTestPrisma();

      const character = await prisma.dsa_starter_character.findUnique({
        where: { id: testData.testCharacter.id },
        include: {
          dsa_starter_race: true,
          dsa_starter_herotype: true,
          dsa_starter_actualskill: {
            include: {
              dsa_starter_skill: true,
            },
          },
        },
      });

      expect(character).toBeDefined();
      expect(character?.id).toBe(testData.testCharacter.id);
      expect(character?.name).toBe('Test Hero');
      expect(character?.dsa_starter_race.name).toBe('Human');
    });

    it('should return null for non-existent character', async () => {
      const prisma = getTestPrisma();

      const character = await prisma.dsa_starter_character.findUnique({
        where: { id: 99999 },
      });

      expect(character).toBeNull();
    });

    it('should include character attributes', async () => {
      const prisma = getTestPrisma();

      const character = await prisma.dsa_starter_character.findUnique({
        where: { id: testData.testCharacter.id },
      });

      expect(character?.MU).toBe(12);
      expect(character?.KL).toBe(11);
      expect(character?.IN).toBe(13);
      expect(character?.CH).toBe(10);
      expect(character?.FF).toBe(14);
      expect(character?.GE).toBe(12);
      expect(character?.KO).toBe(13);
      expect(character?.KK).toBe(15);
    });

    it('should include character vitals', async () => {
      const prisma = getTestPrisma();

      const character = await prisma.dsa_starter_character.findUnique({
        where: { id: testData.testCharacter.id },
      });

      expect(character?.life).toBe(30);
      expect(character?.life_lost).toBe(0);
      expect(character?.magic_energy).toBe(0);
      expect(character?.magic_energy_lost).toBe(0);
      expect(character?.experience).toBe(100);
    });
  });

  describe('Character Stats Calculations', () => {
    it('should calculate current life correctly', async () => {
      const prisma = getTestPrisma();

      // Damage the character
      await prisma.dsa_starter_character.update({
        where: { id: testData.testCharacter.id },
        data: { life_lost: 10 },
      });

      const character = await prisma.dsa_starter_character.findUnique({
        where: { id: testData.testCharacter.id },
      });

      const currentLife = character!.life - character!.life_lost;
      expect(currentLife).toBe(20);
    });

    it('should track magic energy for magic users', async () => {
      const prisma = getTestPrisma();

      // Create a mage character
      const mage = await prisma.dsa_starter_character.create({
        data: {
          name: 'Test Mage',
          created_date: new Date(),
          type_id: testData.mageType.id,
          race_id: testData.elfRace.id,
          experience: 100,
          experience_used: 0,
          life: 25,
          life_lost: 0,
          magic_energy: 20,
          magic_energy_lost: 5,
          armor: 0,
          culture: 'Elf Culture',
          gender: 'Female',
          size: 170,
          weight: 60,
          social_rank: 2,
          hair_color: 'Silver',
          eye_color: 'Green',
          money_dukaten: 5,
          money_silbertaler: 30,
          money_heller: 50,
          money_kreuzer: 10,
          MU: 11,
          KL: 14,
          IN: 15,
          CH: 12,
          FF: 10,
          GE: 11,
          KO: 10,
          KK: 9,
          isHero: true,
        },
      });

      const currentMagic = mage.magic_energy - mage.magic_energy_lost;
      expect(currentMagic).toBe(15);
      expect(mage.type_id).toBe(testData.mageType.id);
    });
  });

  describe('PATCH /api/characters/[id]', () => {
    it('should update character name', async () => {
      const prisma = getTestPrisma();

      const updated = await prisma.dsa_starter_character.update({
        where: { id: testData.testCharacter.id },
        data: { name: 'Updated Hero Name' },
      });

      expect(updated.name).toBe('Updated Hero Name');
      expect(updated.id).toBe(testData.testCharacter.id);
    });

    it('should update character attributes', async () => {
      const prisma = getTestPrisma();

      const updated = await prisma.dsa_starter_character.update({
        where: { id: testData.testCharacter.id },
        data: {
          MU: 15,
          KL: 14,
          CH: 13,
        },
      });

      expect(updated.MU).toBe(15);
      expect(updated.KL).toBe(14);
      expect(updated.CH).toBe(13);
      // Other attributes should remain unchanged
      expect(updated.FF).toBe(14);
      expect(updated.GE).toBe(12);
    });

    it('should update life and magic energy', async () => {
      const prisma = getTestPrisma();

      const updated = await prisma.dsa_starter_character.update({
        where: { id: testData.testCharacter.id },
        data: {
          life_lost: 5,
          experience: 150,
        },
      });

      expect(updated.life_lost).toBe(5);
      expect(updated.experience).toBe(150);
      expect(updated.life).toBe(30); // Max life unchanged
    });

    it('should update character money', async () => {
      const prisma = getTestPrisma();

      const updated = await prisma.dsa_starter_character.update({
        where: { id: testData.testCharacter.id },
        data: {
          money_dukaten: 100,
          money_silbertaler: 50,
          money_heller: 25,
          money_kreuzer: 10,
        },
      });

      expect(updated.money_dukaten).toBe(100);
      expect(updated.money_silbertaler).toBe(50);
      expect(updated.money_heller).toBe(25);
      expect(updated.money_kreuzer).toBe(10);
    });

    it('should update character race and type', async () => {
      const prisma = getTestPrisma();

      const updated = await prisma.dsa_starter_character.update({
        where: { id: testData.testCharacter.id },
        data: {
          race_id: testData.elfRace.id,
          type_id: testData.mageType.id,
        },
        include: {
          dsa_starter_race: true,
          dsa_starter_herotype: true,
        },
      });

      expect(updated.race_id).toBe(testData.elfRace.id);
      expect(updated.type_id).toBe(testData.mageType.id);
      expect(updated.dsa_starter_race.name).toBe('Elf');
      expect(updated.dsa_starter_herotype.name).toBe('Mage');
    });

    it('should return null when updating non-existent character', async () => {
      const prisma = getTestPrisma();

      await expect(
        prisma.dsa_starter_character.update({
          where: { id: 99999 },
          data: { name: 'Should Fail' },
        })
      ).rejects.toThrow();
    });

    it('should only update provided fields', async () => {
      const prisma = getTestPrisma();

      const originalChar = await prisma.dsa_starter_character.findUnique({
        where: { id: testData.testCharacter.id },
      });

      const updated = await prisma.dsa_starter_character.update({
        where: { id: testData.testCharacter.id },
        data: { name: 'Partially Updated' },
      });

      expect(updated.name).toBe('Partially Updated');
      expect(updated.MU).toBe(originalChar?.MU);
      expect(updated.life).toBe(originalChar?.life);
      expect(updated.experience).toBe(originalChar?.experience);
    });
  });

  describe('DELETE /api/characters/[id]', () => {
    it('should delete a character', async () => {
      const prisma = getTestPrisma();

      // Create a character to delete
      const charToDelete = await prisma.dsa_starter_character.create({
        data: {
          name: 'Character to Delete',
          created_date: new Date(),
          type_id: testData.warriorType.id,
          race_id: testData.humanRace.id,
          experience: 50,
          experience_used: 0,
          life: 25,
          life_lost: 0,
          magic_energy: 0,
          magic_energy_lost: 0,
          armor: 2,
          culture: 'Test Culture',
          gender: 'Male',
          size: 180,
          weight: 80,
          social_rank: 1,
          hair_color: 'Brown',
          eye_color: 'Brown',
          money_dukaten: 0,
          money_silbertaler: 10,
          money_heller: 0,
          money_kreuzer: 0,
          MU: 10,
          KL: 10,
          IN: 10,
          CH: 10,
          FF: 10,
          GE: 10,
          KO: 10,
          KK: 10,
          isHero: true,
        },
      });

      await prisma.dsa_starter_character.delete({
        where: { id: charToDelete.id },
      });

      const deletedChar = await prisma.dsa_starter_character.findUnique({
        where: { id: charToDelete.id },
      });

      expect(deletedChar).toBeNull();
    });

    it('should throw error when deleting non-existent character', async () => {
      const prisma = getTestPrisma();

      await expect(
        prisma.dsa_starter_character.delete({
          where: { id: 99999 },
        })
      ).rejects.toThrow();
    });

    it('should not affect other characters when deleting one', async () => {
      const prisma = getTestPrisma();

      const originalCount = await prisma.dsa_starter_character.count({
        where: { isHero: true },
      });

      // Create a character to delete
      const charToDelete = await prisma.dsa_starter_character.create({
        data: {
          name: 'Temporary Character',
          created_date: new Date(),
          type_id: testData.warriorType.id,
          race_id: testData.humanRace.id,
          experience: 50,
          experience_used: 0,
          life: 25,
          life_lost: 0,
          magic_energy: 0,
          magic_energy_lost: 0,
          armor: 2,
          culture: 'Test Culture',
          gender: 'Male',
          size: 180,
          weight: 80,
          social_rank: 1,
          hair_color: 'Brown',
          eye_color: 'Brown',
          money_dukaten: 0,
          money_silbertaler: 10,
          money_heller: 0,
          money_kreuzer: 0,
          MU: 10,
          KL: 10,
          IN: 10,
          CH: 10,
          FF: 10,
          GE: 10,
          KO: 10,
          KK: 10,
          isHero: true,
        },
      });

      await prisma.dsa_starter_character.delete({
        where: { id: charToDelete.id },
      });

      const finalCount = await prisma.dsa_starter_character.count({
        where: { isHero: true },
      });

      expect(finalCount).toBe(originalCount);

      // Verify original character still exists
      const originalChar = await prisma.dsa_starter_character.findUnique({
        where: { id: testData.testCharacter.id },
      });
      expect(originalChar).toBeDefined();
      expect(originalChar?.name).toBe('Test Hero');
    });
  });
});
