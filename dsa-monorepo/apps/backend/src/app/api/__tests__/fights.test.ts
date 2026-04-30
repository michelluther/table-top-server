/**
 * Fight System API Tests
 *
 * Tests for:
 * - GET /api/adventures/[id]/fights
 * - POST /api/adventures/[id]/fights
 * - GET /api/fights/[id]
 * - PATCH /api/fights/[id]
 * - DELETE /api/fights/[id]
 * - POST /api/fights/[id]/participants
 * - PATCH /api/fights/[id]/participants/[participantId]
 * - DELETE /api/fights/[id]/participants/[participantId]
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  getTestPrisma,
  clearTestData,
  seedTestData,
} from '../../../../tests/helpers/testDb';

describe('Fight System API', () => {
  let testData: Awaited<ReturnType<typeof seedTestData>>;

  beforeEach(async () => {
    await clearTestData();
    testData = await seedTestData();
  });

  describe('POST /api/adventures/[id]/fights', () => {
    it('should create a new fight for an adventure', async () => {
      const prisma = getTestPrisma();

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Goblin Ambush',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      expect(fight.name).toBe('Goblin Ambush');
      expect(fight.adventure_id).toBe(testData.testAdventure.id);
      expect(fight.nextUp).toBe(0);
    });

    it('should initialize nextUp to 0', async () => {
      const prisma = getTestPrisma();

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Dragon Fight',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      expect(fight.nextUp).toBe(0);
    });
  });

  describe('GET /api/adventures/[id]/fights', () => {
    it('should return all fights for an adventure', async () => {
      const prisma = getTestPrisma();

      // Create multiple fights
      await prisma.dsa_starter_fight.createMany({
        data: [
          {
            name: 'Fight 1',
            adventure_id: testData.testAdventure.id,
            nextUp: 0,
          },
          {
            name: 'Fight 2',
            adventure_id: testData.testAdventure.id,
            nextUp: 1,
          },
        ],
      });

      const fights = await prisma.dsa_starter_fight.findMany({
        where: {
          adventure_id: testData.testAdventure.id,
        },
      });

      expect(fights).toHaveLength(2);
      expect(fights.some((f) => f.name === 'Fight 1')).toBe(true);
      expect(fights.some((f) => f.name === 'Fight 2')).toBe(true);
    });

    it('should return empty array for adventure with no fights', async () => {
      const prisma = getTestPrisma();

      const fights = await prisma.dsa_starter_fight.findMany({
        where: {
          adventure_id: testData.testAdventure.id,
        },
      });

      expect(fights).toHaveLength(0);
    });
  });

  describe('GET /api/fights/[id]', () => {
    it('should return fight with participants ordered by initiative', async () => {
      const prisma = getTestPrisma();

      // Create fight
      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Test Fight',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      // Create species for NPC
      const species = await prisma.dsa_starter_species.create({
        data: { name: 'Goblin' },
      });

      // Create NPC
      const npc = await prisma.dsa_starter_nonplayercharacter.create({
        data: {
          name: 'Goblin Warrior',
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

      // Add participants
      await prisma.dsa_starter_fightparticipation.createMany({
        data: [
          {
            fight_id: fight.id,
            character_id: testData.testCharacter.id,
            npc_id: null,
            calculatedInitiative: 15,
            isGood: true,
            position: 'front',
          },
          {
            fight_id: fight.id,
            character_id: null,
            npc_id: npc.id,
            calculatedInitiative: 10,
            isGood: false,
            position: 'center',
          },
        ],
      });

      const fightWithParticipants = await prisma.dsa_starter_fight.findUnique({
        where: { id: fight.id },
        include: {
          dsa_starter_fightparticipation: {
            include: {
              dsa_starter_character: true,
              dsa_starter_nonplayercharacter: true,
            },
            orderBy: {
              calculatedInitiative: 'desc',
            },
          },
        },
      });

      expect(fightWithParticipants?.dsa_starter_fightparticipation).toHaveLength(2);
      // First should be character with higher initiative
      expect(
        fightWithParticipants?.dsa_starter_fightparticipation[0].calculatedInitiative
      ).toBe(15);
      expect(
        fightWithParticipants?.dsa_starter_fightparticipation[0].dsa_starter_character
          ?.name
      ).toBe('Test Hero');
      // Second should be NPC
      expect(
        fightWithParticipants?.dsa_starter_fightparticipation[1].calculatedInitiative
      ).toBe(10);
      expect(
        fightWithParticipants?.dsa_starter_fightparticipation[1]
          .dsa_starter_nonplayercharacter?.name
      ).toBe('Goblin Warrior');
    });
  });

  describe('PATCH /api/fights/[id]', () => {
    it('should update fight name', async () => {
      const prisma = getTestPrisma();

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Old Name',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      const updated = await prisma.dsa_starter_fight.update({
        where: { id: fight.id },
        data: { name: 'New Name' },
      });

      expect(updated.name).toBe('New Name');
    });

    it('should update nextUp for turn tracking', async () => {
      const prisma = getTestPrisma();

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Turn Test Fight',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      const updated = await prisma.dsa_starter_fight.update({
        where: { id: fight.id },
        data: { nextUp: 3 },
      });

      expect(updated.nextUp).toBe(3);
    });
  });

  describe('DELETE /api/fights/[id]', () => {
    it('should delete a fight', async () => {
      const prisma = getTestPrisma();

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Fight to Delete',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      await prisma.dsa_starter_fight.delete({
        where: { id: fight.id },
      });

      const deletedFight = await prisma.dsa_starter_fight.findUnique({
        where: { id: fight.id },
      });

      expect(deletedFight).toBeNull();
    });
  });

  describe('POST /api/fights/[id]/participants', () => {
    it('should add a character participant to fight', async () => {
      const prisma = getTestPrisma();

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Participant Test Fight',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      const participant = await prisma.dsa_starter_fightparticipation.create({
        data: {
          fight_id: fight.id,
          character_id: testData.testCharacter.id,
          npc_id: null,
          calculatedInitiative: 12,
          isGood: true,
          position: 'front',
        },
      });

      expect(participant.fight_id).toBe(fight.id);
      expect(participant.character_id).toBe(testData.testCharacter.id);
      expect(participant.calculatedInitiative).toBe(12);
      expect(participant.isGood).toBe(true);
      expect(participant.position).toBe('front');
    });

    it('should add an NPC participant to fight', async () => {
      const prisma = getTestPrisma();

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'NPC Test Fight',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      const species = await prisma.dsa_starter_species.create({
        data: { name: 'Orc' },
      });

      const npc = await prisma.dsa_starter_nonplayercharacter.create({
        data: {
          name: 'Orc Raider',
          race_id: testData.humanRace.id,
          species_id: species.id,
          initiative: 8,
          attack: 14,
          parade: 12,
          life: 25,
          magic_energy: 0,
          ruestung: 2,
          weapon_1_name: 'Axe',
          weapon_1_damage: '1d6+3',
          weapon_1_attack: 14,
          weapon_1_parade: 12,
          weapon_2_name: '',
          weapon_2_damage: '',
          weapon_2_attack: 0,
          weapon_2_parade: 0,
          knowsMagic: false,
        },
      });

      const participant = await prisma.dsa_starter_fightparticipation.create({
        data: {
          fight_id: fight.id,
          character_id: null,
          npc_id: npc.id,
          calculatedInitiative: 8,
          isGood: false,
          position: 'back',
        },
      });

      expect(participant.npc_id).toBe(npc.id);
      expect(participant.character_id).toBeNull();
      expect(participant.isGood).toBe(false);
    });
  });

  describe('PATCH /api/fights/[id]/participants/[participantId]', () => {
    it('should update participant initiative', async () => {
      const prisma = getTestPrisma();

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Update Test Fight',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      const participant = await prisma.dsa_starter_fightparticipation.create({
        data: {
          fight_id: fight.id,
          character_id: testData.testCharacter.id,
          npc_id: null,
          calculatedInitiative: 10,
          isGood: true,
          position: 'center',
        },
      });

      const updated = await prisma.dsa_starter_fightparticipation.update({
        where: { id: participant.id },
        data: { calculatedInitiative: 15 },
      });

      expect(updated.calculatedInitiative).toBe(15);
    });

    it('should update participant position', async () => {
      const prisma = getTestPrisma();

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Position Test Fight',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      const participant = await prisma.dsa_starter_fightparticipation.create({
        data: {
          fight_id: fight.id,
          character_id: testData.testCharacter.id,
          npc_id: null,
          calculatedInitiative: 10,
          isGood: true,
          position: 'front',
        },
      });

      const updated = await prisma.dsa_starter_fightparticipation.update({
        where: { id: participant.id },
        data: { position: 'back' },
      });

      expect(updated.position).toBe('back');
    });
  });

  describe('DELETE /api/fights/[id]/participants/[participantId]', () => {
    it('should remove participant from fight', async () => {
      const prisma = getTestPrisma();

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Remove Participant Test',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      const participant = await prisma.dsa_starter_fightparticipation.create({
        data: {
          fight_id: fight.id,
          character_id: testData.testCharacter.id,
          npc_id: null,
          calculatedInitiative: 10,
          isGood: true,
          position: 'center',
        },
      });

      await prisma.dsa_starter_fightparticipation.delete({
        where: { id: participant.id },
      });

      const deleted = await prisma.dsa_starter_fightparticipation.findUnique({
        where: { id: participant.id },
      });

      expect(deleted).toBeNull();
    });

    it('should not affect other participants when removing one', async () => {
      const prisma = getTestPrisma();

      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name: 'Multiple Participants Test',
          adventure_id: testData.testAdventure.id,
          nextUp: 0,
        },
      });

      // Create second character
      const character2 = await prisma.dsa_starter_character.create({
        data: {
          name: 'Second Hero',
          created_date: new Date(),
          type_id: testData.warriorType.id,
          race_id: testData.humanRace.id,
          experience: 50,
          experience_used: 0,
          life: 28,
          life_lost: 0,
          magic_energy: 0,
          magic_energy_lost: 0,
          armor: 2,
          culture: 'Human Culture',
          gender: 'Male',
          size: 175,
          weight: 75,
          social_rank: 1,
          hair_color: 'Black',
          eye_color: 'Brown',
          money_dukaten: 10,
          money_silbertaler: 20,
          money_heller: 10,
          money_kreuzer: 5,
          MU: 11,
          KL: 10,
          IN: 12,
          CH: 11,
          FF: 13,
          GE: 11,
          KO: 12,
          KK: 14,
          isHero: true,
        },
      });

      const participant1 = await prisma.dsa_starter_fightparticipation.create({
        data: {
          fight_id: fight.id,
          character_id: testData.testCharacter.id,
          npc_id: null,
          calculatedInitiative: 10,
          isGood: true,
          position: 'front',
        },
      });

      const participant2 = await prisma.dsa_starter_fightparticipation.create({
        data: {
          fight_id: fight.id,
          character_id: character2.id,
          npc_id: null,
          calculatedInitiative: 12,
          isGood: true,
          position: 'back',
        },
      });

      // Delete first participant
      await prisma.dsa_starter_fightparticipation.delete({
        where: { id: participant1.id },
      });

      // Verify second participant still exists
      const remaining = await prisma.dsa_starter_fightparticipation.findUnique({
        where: { id: participant2.id },
      });

      expect(remaining).toBeDefined();
      expect(remaining?.character_id).toBe(character2.id);
    });
  });
});
