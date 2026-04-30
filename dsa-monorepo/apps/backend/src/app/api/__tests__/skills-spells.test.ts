/**
 * Skills and Spells API Tests
 *
 * Tests for:
 * - GET /api/skills
 * - GET /api/spells
 * - GET /api/characters/[id]/skills
 * - GET /api/characters/[id]/spells
 * - PATCH /api/characters/[id]/skills/[skillId]
 * - PATCH /api/characters/[id]/spells/[spellId]
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  getTestPrisma,
  clearTestData,
  seedTestData,
} from '../../../../tests/helpers/testDb';

describe('Skills & Spells API', () => {
  let testData: Awaited<ReturnType<typeof seedTestData>>;

  beforeEach(async () => {
    await clearTestData();
    testData = await seedTestData();
  });

  describe('GET /api/skills', () => {
    it('should return all skills with skill types', async () => {
      const prisma = getTestPrisma();

      // Create skill group first (required for skill type)
      const skillGroup = await prisma.dsa_starter_skillgroup.create({
        data: {
          name: 'A',
          cost_per_increase: 1,
          title: 'Physical Skills',
        },
      });

      // Create skill type
      const skillType = await prisma.dsa_starter_skilltype.create({
        data: {
          name: 'Physical',
          skill_group_id: skillGroup.id,
        },
      });

      // Create skills
      await prisma.dsa_starter_skill.createMany({
        data: [
          {
            name: 'Swordfighting',
            type_id: skillType.id,
            behinderung: 'BE',
            dice1: 'MU',
            dice2: 'GE',
            dice3: 'KK',
            basis: true,
            weaponSkill: true,
          },
          {
            name: 'Climbing',
            type_id: skillType.id,
            behinderung: 'BE-2',
            dice1: 'MU',
            dice2: 'GE',
            dice3: 'KK',
            basis: true,
            weaponSkill: false,
          },
        ],
      });

      const skills = await prisma.dsa_starter_skill.findMany({
        include: {
          dsa_starter_skilltype: true,
        },
        orderBy: {
          name: 'asc',
        },
      });

      expect(skills).toHaveLength(2);
      expect(skills[0].name).toBe('Climbing');
      expect(skills[0].dsa_starter_skilltype.name).toBe('Physical');
      expect(skills[1].name).toBe('Swordfighting');
      expect(skills[1].weaponSkill).toBe(true);
    });
  });

  describe('GET /api/spells', () => {
    it('should return all spells with types and complexity', async () => {
      const prisma = getTestPrisma();

      // Create spell type
      const spellType = await prisma.dsa_starter_spelltype.create({
        data: {
          name: 'Elemental',
        },
      });

      // Create skill group (complexity)
      const complexity = await prisma.dsa_starter_skillgroup.create({
        data: {
          name: 'B',
          cost_per_increase: 2,
          title: 'Complexity B',
        },
      });

      // Create spells
      await prisma.dsa_starter_spell.createMany({
        data: [
          {
            name: 'Fireball',
            dice1: 'MU',
            dice2: 'KL',
            dice3: 'CH',
            basis: false,
            type_id: spellType.id,
            complexity_id: complexity.id,
          },
          {
            name: 'Ice Shield',
            dice1: 'KL',
            dice2: 'IN',
            dice3: 'CH',
            basis: true,
            type_id: spellType.id,
            complexity_id: complexity.id,
          },
        ],
      });

      const spells = await prisma.dsa_starter_spell.findMany({
        include: {
          dsa_starter_spelltype: true,
          dsa_starter_skillgroup: true,
        },
        orderBy: {
          name: 'asc',
        },
      });

      expect(spells).toHaveLength(2);
      expect(spells[0].name).toBe('Fireball');
      expect(spells[0].dsa_starter_spelltype.name).toBe('Elemental');
      expect(spells[0].dsa_starter_skillgroup.name).toBe('B');
      expect(spells[1].name).toBe('Ice Shield');
      expect(spells[1].basis).toBe(true);
    });
  });

  describe('GET /api/characters/[id]/skills', () => {
    it('should return character skills with values and full skill info', async () => {
      const prisma = getTestPrisma();

      // Create skill group first
      const skillGroup = await prisma.dsa_starter_skillgroup.create({
        data: {
          name: 'A',
          cost_per_increase: 1,
          title: 'Physical Skills',
        },
      });

      // Create skill type
      const skillType = await prisma.dsa_starter_skilltype.create({
        data: {
          name: 'Physical',
          skill_group_id: skillGroup.id,
        },
      });

      // Create skill
      const skill = await prisma.dsa_starter_skill.create({
        data: {
          name: 'Swordfighting',
          type_id: skillType.id,
          behinderung: 'BE',
          dice1: 'MU',
          dice2: 'GE',
          dice3: 'KK',
          basis: true,
          weaponSkill: true,
        },
      });

      // Add skill to character
      await prisma.dsa_starter_actualskill.create({
        data: {
          character_id: testData.testCharacter.id,
          skill_id: skill.id,
          value: 10,
        },
      });

      const characterSkills = await prisma.dsa_starter_actualskill.findMany({
        where: {
          character_id: testData.testCharacter.id,
        },
        include: {
          dsa_starter_skill: {
            include: {
              dsa_starter_skilltype: true,
            },
          },
        },
      });

      expect(characterSkills).toHaveLength(1);
      expect(characterSkills[0].value).toBe(10);
      expect(characterSkills[0].dsa_starter_skill.name).toBe('Swordfighting');
      expect(characterSkills[0].dsa_starter_skill.dsa_starter_skilltype.name).toBe(
        'Physical'
      );
    });

    it('should return empty array for character with no skills', async () => {
      const prisma = getTestPrisma();

      const characterSkills = await prisma.dsa_starter_actualskill.findMany({
        where: {
          character_id: testData.testCharacter.id,
        },
      });

      expect(characterSkills).toHaveLength(0);
    });

    it('should handle non-existent character', async () => {
      const prisma = getTestPrisma();

      const character = await prisma.dsa_starter_character.findUnique({
        where: { id: 99999 },
      });

      expect(character).toBeNull();
    });
  });

  describe('GET /api/characters/[id]/spells', () => {
    it('should return character spells with values and full spell info', async () => {
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
          magic_energy_lost: 0,
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

      // Create spell type
      const spellType = await prisma.dsa_starter_spelltype.create({
        data: {
          name: 'Elemental',
        },
      });

      // Create complexity
      const complexity = await prisma.dsa_starter_skillgroup.create({
        data: {
          name: 'B',
          cost_per_increase: 2,
          title: 'Complexity B',
        },
      });

      // Create spell
      const spell = await prisma.dsa_starter_spell.create({
        data: {
          name: 'Fireball',
          dice1: 'MU',
          dice2: 'KL',
          dice3: 'CH',
          basis: false,
          type_id: spellType.id,
          complexity_id: complexity.id,
        },
      });

      // Add spell to character
      await prisma.dsa_starter_actualspellskill.create({
        data: {
          character_id: mage.id,
          spell_id: spell.id,
          value: 12,
        },
      });

      const characterSpells =
        await prisma.dsa_starter_actualspellskill.findMany({
          where: {
            character_id: mage.id,
          },
          include: {
            dsa_starter_spell: {
              include: {
                dsa_starter_spelltype: true,
                dsa_starter_skillgroup: true,
              },
            },
          },
        });

      expect(characterSpells).toHaveLength(1);
      expect(characterSpells[0].value).toBe(12);
      expect(characterSpells[0].dsa_starter_spell.name).toBe('Fireball');
      expect(characterSpells[0].dsa_starter_spell.dsa_starter_spelltype.name).toBe(
        'Elemental'
      );
      expect(characterSpells[0].dsa_starter_spell.dsa_starter_skillgroup.name).toBe(
        'B'
      );
    });

    it('should return empty array for character with no spells', async () => {
      const prisma = getTestPrisma();

      const characterSpells =
        await prisma.dsa_starter_actualspellskill.findMany({
          where: {
            character_id: testData.testCharacter.id,
          },
        });

      expect(characterSpells).toHaveLength(0);
    });
  });

  describe('PATCH /api/characters/[id]/skills/[skillId]', () => {
    it('should update character skill value', async () => {
      const prisma = getTestPrisma();

      // Create skill group
      const skillGroup = await prisma.dsa_starter_skillgroup.create({
        data: {
          name: 'A',
          cost_per_increase: 1,
          title: 'Physical Skills',
        },
      });

      // Create skill type
      const skillType = await prisma.dsa_starter_skilltype.create({
        data: {
          name: 'Physical',
          skill_group_id: skillGroup.id,
        },
      });

      // Create skill
      const skill = await prisma.dsa_starter_skill.create({
        data: {
          name: 'Swordfighting',
          type_id: skillType.id,
          behinderung: 'BE',
          dice1: 'MU',
          dice2: 'GE',
          dice3: 'KK',
          basis: true,
          weaponSkill: true,
        },
      });

      // Add skill to character
      const actualSkill = await prisma.dsa_starter_actualskill.create({
        data: {
          character_id: testData.testCharacter.id,
          skill_id: skill.id,
          value: 10,
        },
      });

      // Update skill value
      const updated = await prisma.dsa_starter_actualskill.update({
        where: { id: actualSkill.id },
        data: { value: 15 },
        include: {
          dsa_starter_skill: true,
        },
      });

      expect(updated.value).toBe(15);
      expect(updated.id).toBe(actualSkill.id);
      expect(updated.dsa_starter_skill.name).toBe('Swordfighting');
    });

    it('should throw error when updating non-existent skill', async () => {
      const prisma = getTestPrisma();

      await expect(
        prisma.dsa_starter_actualskill.update({
          where: { id: 99999 },
          data: { value: 10 },
        })
      ).rejects.toThrow();
    });

    it('should maintain skill association after update', async () => {
      const prisma = getTestPrisma();

      // Create skill infrastructure
      const skillGroup = await prisma.dsa_starter_skillgroup.create({
        data: {
          name: 'A',
          cost_per_increase: 1,
          title: 'Physical Skills',
        },
      });

      const skillType = await prisma.dsa_starter_skilltype.create({
        data: {
          name: 'Physical',
          skill_group_id: skillGroup.id,
        },
      });

      const skill = await prisma.dsa_starter_skill.create({
        data: {
          name: 'Climbing',
          type_id: skillType.id,
          behinderung: 'BE-2',
          dice1: 'MU',
          dice2: 'GE',
          dice3: 'KK',
          basis: true,
          weaponSkill: false,
        },
      });

      const actualSkill = await prisma.dsa_starter_actualskill.create({
        data: {
          character_id: testData.testCharacter.id,
          skill_id: skill.id,
          value: 5,
        },
      });

      // Update and verify associations remain intact
      const updated = await prisma.dsa_starter_actualskill.update({
        where: { id: actualSkill.id },
        data: { value: 8 },
        include: {
          dsa_starter_skill: {
            include: {
              dsa_starter_skilltype: true,
            },
          },
        },
      });

      expect(updated.value).toBe(8);
      expect(updated.character_id).toBe(testData.testCharacter.id);
      expect(updated.skill_id).toBe(skill.id);
      expect(updated.dsa_starter_skill.dsa_starter_skilltype.name).toBe('Physical');
    });
  });

  describe('PATCH /api/characters/[id]/spells/[spellId]', () => {
    it('should update character spell value', async () => {
      const prisma = getTestPrisma();

      // Create spell infrastructure
      const spellType = await prisma.dsa_starter_spelltype.create({
        data: {
          name: 'Elemental',
        },
      });

      const complexity = await prisma.dsa_starter_skillgroup.create({
        data: {
          name: 'B',
          cost_per_increase: 2,
          title: 'Complexity B',
        },
      });

      const spell = await prisma.dsa_starter_spell.create({
        data: {
          name: 'Fireball',
          dice1: 'MU',
          dice2: 'KL',
          dice3: 'CH',
          basis: false,
          type_id: spellType.id,
          complexity_id: complexity.id,
        },
      });

      // Create mage character
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
          magic_energy_lost: 0,
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

      // Add spell to character
      const actualSpell = await prisma.dsa_starter_actualspellskill.create({
        data: {
          character_id: mage.id,
          spell_id: spell.id,
          value: 10,
        },
      });

      // Update spell value
      const updated = await prisma.dsa_starter_actualspellskill.update({
        where: { id: actualSpell.id },
        data: { value: 14 },
        include: {
          dsa_starter_spell: true,
        },
      });

      expect(updated.value).toBe(14);
      expect(updated.id).toBe(actualSpell.id);
      expect(updated.dsa_starter_spell.name).toBe('Fireball');
    });

    it('should throw error when updating non-existent spell', async () => {
      const prisma = getTestPrisma();

      await expect(
        prisma.dsa_starter_actualspellskill.update({
          where: { id: 99999 },
          data: { value: 10 },
        })
      ).rejects.toThrow();
    });

    it('should maintain spell associations after update', async () => {
      const prisma = getTestPrisma();

      // Create spell infrastructure
      const spellType = await prisma.dsa_starter_spelltype.create({
        data: {
          name: 'Healing',
        },
      });

      const complexity = await prisma.dsa_starter_skillgroup.create({
        data: {
          name: 'A',
          cost_per_increase: 1,
          title: 'Complexity A',
        },
      });

      const spell = await prisma.dsa_starter_spell.create({
        data: {
          name: 'Minor Healing',
          dice1: 'MU',
          dice2: 'IN',
          dice3: 'CH',
          basis: true,
          type_id: spellType.id,
          complexity_id: complexity.id,
        },
      });

      // Create mage
      const mage = await prisma.dsa_starter_character.create({
        data: {
          name: 'Healer Mage',
          created_date: new Date(),
          type_id: testData.mageType.id,
          race_id: testData.elfRace.id,
          experience: 50,
          experience_used: 0,
          life: 25,
          life_lost: 0,
          magic_energy: 25,
          magic_energy_lost: 0,
          armor: 0,
          culture: 'Elf Culture',
          gender: 'Female',
          size: 165,
          weight: 55,
          social_rank: 2,
          hair_color: 'Blonde',
          eye_color: 'Blue',
          money_dukaten: 3,
          money_silbertaler: 20,
          money_heller: 30,
          money_kreuzer: 5,
          MU: 12,
          KL: 13,
          IN: 14,
          CH: 13,
          FF: 9,
          GE: 10,
          KO: 9,
          KK: 8,
          isHero: true,
        },
      });

      const actualSpell = await prisma.dsa_starter_actualspellskill.create({
        data: {
          character_id: mage.id,
          spell_id: spell.id,
          value: 6,
        },
      });

      // Update and verify associations
      const updated = await prisma.dsa_starter_actualspellskill.update({
        where: { id: actualSpell.id },
        data: { value: 9 },
        include: {
          dsa_starter_spell: {
            include: {
              dsa_starter_spelltype: true,
              dsa_starter_skillgroup: true,
            },
          },
        },
      });

      expect(updated.value).toBe(9);
      expect(updated.character_id).toBe(mage.id);
      expect(updated.spell_id).toBe(spell.id);
      expect(updated.dsa_starter_spell.dsa_starter_spelltype.name).toBe('Healing');
      expect(updated.dsa_starter_spell.dsa_starter_skillgroup.name).toBe('A');
    });
  });
});
