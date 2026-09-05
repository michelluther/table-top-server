/**
 * /heroes namespace handler
 *
 * This namespace handles real-time updates for player characters during gameplay:
 * - Character stats changes (life, magic energy)
 * - Skill and spell updates
 * - Inventory changes
 * - Fight participation updates
 */

import { Namespace, Socket } from 'socket.io';
import { CHARACTER_EVENTS, FIGHT_EVENTS, ADVENTURE_EVENTS } from '@dsa-monorepo/constants';
import type { WebSocketMessage } from '@dsa-monorepo/shared-types';
import { prisma } from '@/lib/prisma';

/**
 * Setup the /heroes namespace with all event handlers
 */
export function setupHeroesNamespace(namespace: Namespace): void {
  namespace.on('connection', (socket: Socket) => {
    console.log(`[/heroes] Client connected: ${socket.id}`);

    // Join global heroes room for broadcasting
    socket.join('heroes');

    // Join character-specific rooms for targeted updates
    socket.on('join:character', (characterId: number) => {
      const room = `character:${characterId}`;
      socket.join(room);
      console.log(`[/heroes] ${socket.id} joined room: ${room}`);

      socket.emit('joined', { room, characterId });
    });

    // Leave character room
    socket.on('leave:character', (characterId: number) => {
      const room = `character:${characterId}`;
      socket.leave(room);
      console.log(`[/heroes] ${socket.id} left room: ${room}`);
    });

    // Join adventure-specific rooms
    socket.on('join:adventure', (adventureId: number) => {
      const room = `adventure:${adventureId}`;
      socket.join(room);
      console.log(`[/heroes] ${socket.id} joined room: ${room}`);

      socket.emit('joined', { room, adventureId });
    });

    // Leave adventure room
    socket.on('leave:adventure', (adventureId: number) => {
      const room = `adventure:${adventureId}`;
      socket.leave(room);
      console.log(`[/heroes] ${socket.id} left room: ${room}`);
    });

    // Join fight-specific rooms
    socket.on('join:fight', (fightId: number) => {
      const room = `fight:${fightId}`;
      socket.join(room);
      console.log(`[/heroes] ${socket.id} joined room: ${room}`);

      socket.emit('joined', { room, fightId });
    });

    // Leave fight room
    socket.on('leave:fight', (fightId: number) => {
      const room = `fight:${fightId}`;
      socket.leave(room);
      console.log(`[/heroes] ${socket.id} left room: ${room}`);
    });

    // Life update handler
    socket.on('lifeUpdate', async (data: { heroId: number; value: number }) => {
      try {
        await prisma.dsa_starter_character.update({
          where: { id: data.heroId },
          data: { life_lost: { decrement: data.value } },
        });

        // Broadcast to all clients in heroes room
        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Life updated for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error updating life:', error);
        socket.emit('error', { message: 'Failed to update life', error });
      }
    });

    // Magic update handler
    socket.on('magicUpdate', async (data: { heroId: number; value: number }) => {
      try {
        await prisma.dsa_starter_character.update({
          where: { id: data.heroId },
          data: { magic_energy_lost: { decrement: data.value } },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Magic updated for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error updating magic:', error);
        socket.emit('error', { message: 'Failed to update magic', error });
      }
    });

    // Add experience points handler
    socket.on('addExperiencePoints', async (data: { heroId: number; additionalPoints: number }) => {
      try {
        await prisma.dsa_starter_character.update({
          where: { id: data.heroId },
          data: { experience: { increment: data.additionalPoints } },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Experience added for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error adding experience:', error);
        socket.emit('error', { message: 'Failed to add experience', error });
      }
    });

    // Update money handler
    socket.on('updateAccountEntry', async (data: { heroId: number; unit: string; amount: number }) => {
      try {
        const updateData: any = {};
        if (data.unit === 'dukaten') {
          updateData.money_dukaten = data.amount;
        } else if (data.unit === 'silbertaler') {
          updateData.money_silbertaler = data.amount;
        } else if (data.unit === 'heller') {
          updateData.money_heller = data.amount;
        } else if (data.unit === 'kreuzer') {
          updateData.money_kreuzer = data.amount;
        }

        await prisma.dsa_starter_character.update({
          where: { id: data.heroId },
          data: updateData,
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Money updated for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error updating money:', error);
        socket.emit('error', { message: 'Failed to update money', error });
      }
    });

    // Add inventory item handler
    socket.on('addInventoryItem', async (data: { heroId: number; name: string; amount: number; weight: number; unit?: string }) => {
      try {
        const item = await prisma.dsa_starter_inventoryitem.create({
          data: {
            character_id: data.heroId,
            name: data.name,
            amount: data.amount,
            weight: data.weight,
            unit: data.unit || 'SK',
          },
        });

        const responseData = { ...data, inventoryId: item.id };
        namespace.to('heroes').emit('hero_update', responseData);
        console.log(`[/heroes] Inventory item added for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error adding inventory item:', error);
        socket.emit('error', { message: 'Failed to add inventory item', error });
      }
    });

    // Update inventory item handler
    socket.on('updateInventoryItem', async (data: { heroId: number; inventoryItemId: number; amount?: number; isCarried?: boolean }) => {
      try {
        const updateData: { amount?: number; isCarried?: boolean } = {};
        if (data.amount !== undefined) updateData.amount = data.amount;
        if (data.isCarried !== undefined) updateData.isCarried = data.isCarried;

        await prisma.dsa_starter_inventoryitem.update({
          where: { id: data.inventoryItemId },
          data: updateData,
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Inventory item updated for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error updating inventory item:', error);
        socket.emit('error', { message: 'Failed to update inventory item', error });
      }
    });

    // Delete inventory item handler
    socket.on('deleteInventoryItem', async (data: { heroId: number; inventoryItemId: number }) => {
      try {
        await prisma.dsa_starter_inventoryitem.delete({
          where: { id: data.inventoryItemId },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Inventory item deleted for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error deleting inventory item:', error);
        socket.emit('error', { message: 'Failed to delete inventory item', error });
      }
    });

    // Add weapon handler
    socket.on('addWeapon', async (data: { heroId: number; weaponName: string; skill: number; damageDice: number; damageAddPoints: number; extraPointsFromKk: number; weight?: number }) => {
      try {
        const weapon = await prisma.dsa_starter_weapon.create({
          data: {
            name: data.weaponName,
            skill_id: data.skill,
            hit_dices: data.damageDice,
            hit_add_points: data.damageAddPoints,
            hit_extra_from_kk: data.extraPointsFromKk,
            weight: data.weight ?? 0,
          },
        });

        await prisma.dsa_starter_characterhasweapon.create({
          data: {
            character_id: data.heroId,
            weapon_id: weapon.id,
          },
        });

        const responseData = { ...data, weaponId: weapon.id };
        namespace.to('heroes').emit('hero_update', responseData);
        console.log(`[/heroes] Weapon added for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error adding weapon:', error);
        socket.emit('error', { message: 'Failed to add weapon', error });
      }
    });

    // Delete weapon handler
    socket.on('deleteWeapon', async (data: { heroId: number; weaponId: number }) => {
      try {
        await prisma.dsa_starter_characterhasweapon.deleteMany({
          where: {
            character_id: data.heroId,
            weapon_id: data.weaponId,
          },
        });

        await prisma.dsa_starter_weapon.delete({
          where: { id: data.weaponId },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Weapon deleted for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error deleting weapon:', error);
        socket.emit('error', { message: 'Failed to delete weapon', error });
      }
    });

    // Add armor handler
    socket.on('addArmor', async (data: { heroId: number; armorName: string; armorRS: number; armorBE: number; armorWeight?: number }) => {
      try {
        const armor = await prisma.dsa_starter_armor.create({
          data: {
            name: data.armorName,
            ruestungs_schutz: data.armorRS,
            behinderung: data.armorBE,
            weight: data.armorWeight ?? 0,
          },
        });

        await prisma.dsa_starter_characterhasarmor.create({
          data: {
            character_id: data.heroId,
            armor_id: armor.id,
          },
        });

        const responseData = { ...data, armorId: armor.id };
        namespace.to('heroes').emit('hero_update', responseData);
        console.log(`[/heroes] Armor added for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error adding armor:', error);
        socket.emit('error', { message: 'Failed to add armor', error });
      }
    });

    // Delete armor handler
    socket.on('deleteArmor', async (data: { heroId: number; armorId: number }) => {
      try {
        await prisma.dsa_starter_characterhasarmor.deleteMany({
          where: {
            character_id: data.heroId,
            armor_id: data.armorId,
          },
        });

        await prisma.dsa_starter_armor.delete({
          where: { id: data.armorId },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Armor deleted for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error deleting armor:', error);
        socket.emit('error', { message: 'Failed to delete armor', error });
      }
    });

    // Raise an attribute (e.g. MU, KK). Persists the new value on the character
    // row and bumps experience_used by the spent price.
    const ATTRIBUTE_KEYS = ['MU', 'KL', 'IN', 'CH', 'FF', 'GE', 'KO', 'KK'] as const;
    type AttributeKey = (typeof ATTRIBUTE_KEYS)[number];
    socket.on('updateAttribute', async (data: { heroId: number; attribute: string; value: number; price: number }) => {
      try {
        if (!ATTRIBUTE_KEYS.includes(data.attribute as AttributeKey)) {
          throw new Error(`Invalid attribute key: ${data.attribute}`);
        }
        await prisma.dsa_starter_character.update({
          where: { id: data.heroId },
          data: {
            [data.attribute]: data.value,
            experience_used: { increment: data.price },
          },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Attribute ${data.attribute} raised to ${data.value} for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error updating attribute:', error);
        socket.emit('error', { message: 'Failed to update attribute', error });
      }
    });

    // Raise a skill. Updates the existing actualskill row when assignmentId is
    // provided, otherwise creates one. Bumps experience_used.
    socket.on('updateSkill', async (data: { heroId: number; skillId: number; assignmentId: number | null; value: number; price: number }) => {
      try {
        if (data.assignmentId) {
          await prisma.dsa_starter_actualskill.update({
            where: { id: data.assignmentId },
            data: { value: data.value },
          });
        } else {
          await prisma.dsa_starter_actualskill.create({
            data: {
              character_id: data.heroId,
              skill_id: data.skillId,
              value: data.value,
            },
          });
        }
        await prisma.dsa_starter_character.update({
          where: { id: data.heroId },
          data: { experience_used: { increment: data.price } },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Skill ${data.skillId} raised to ${data.value} for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error updating skill:', error);
        socket.emit('error', { message: 'Failed to update skill', error });
      }
    });

    // Raise a spell. Same shape as updateSkill but persists on actualspellskill.
    // Frontend sends the spell id under `skillId` (legacy field name).
    socket.on('updateSpell', async (data: { heroId: number; skillId: number; assignmentId: number | null; value: number; price: number }) => {
      try {
        if (data.assignmentId) {
          await prisma.dsa_starter_actualspellskill.update({
            where: { id: data.assignmentId },
            data: { value: data.value },
          });
        } else {
          await prisma.dsa_starter_actualspellskill.create({
            data: {
              character_id: data.heroId,
              spell_id: data.skillId,
              value: data.value,
            },
          });
        }
        await prisma.dsa_starter_character.update({
          where: { id: data.heroId },
          data: { experience_used: { increment: data.price } },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Spell ${data.skillId} raised to ${data.value} for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error updating spell:', error);
        socket.emit('error', { message: 'Failed to update spell', error });
      }
    });

    // Set next up in fight handler
    socket.on('setNextUp', async (data: { params: { fight: number; nextUp: number } }) => {
      try {
        await prisma.dsa_starter_fight.update({
          where: { id: data.params.fight },
          data: { nextUp: data.params.nextUp },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Next up set for fight ${data.params.fight}`);
      } catch (error) {
        console.error('[/heroes] Error setting next up:', error);
        socket.emit('error', { message: 'Failed to set next up', error });
      }
    });

    // Switch the character's currently-equipped weapon. Only one weapon can be
    // marked equipped at a time, so flip the chosen join row to true and the
    // others to false in a single transaction.
    socket.on('setCurrentWeapon', async (data: { heroId: number; weaponId: number }) => {
      try {
        await prisma.$transaction([
          prisma.dsa_starter_characterhasweapon.updateMany({
            where: { character_id: data.heroId, weapon_id: { not: data.weaponId } },
            data: { isEquipped: false },
          }),
          prisma.dsa_starter_characterhasweapon.updateMany({
            where: { character_id: data.heroId, weapon_id: data.weaponId },
            data: { isEquipped: true },
          }),
        ]);

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Current weapon ${data.weaponId} equipped for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error setting current weapon:', error);
        socket.emit('error', { message: 'Failed to set current weapon', error });
      }
    });

    // Toggle equipped state for one piece of armor. Multiple armor pieces can
    // be equipped at the same time, so we just update the one join row.
    socket.on('equipArmor', async (data: { heroId: number; armorId?: number; weaponId?: number; isEquipped: boolean }) => {
      try {
        // The frontend currently sends the armor id under `weaponId` (legacy
        // typo in combat-data-display.component.ts). Accept both keys.
        const armorId = data.armorId ?? data.weaponId;
        if (armorId === undefined) {
          throw new Error('equipArmor requires armorId');
        }
        await prisma.dsa_starter_characterhasarmor.updateMany({
          where: { character_id: data.heroId, armor_id: armorId },
          data: { isEquipped: data.isEquipped },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Armor ${armorId} equipped=${data.isEquipped} for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error equipping armor:', error);
        socket.emit('error', { message: 'Failed to equip armor', error });
      }
    });

    // Toggle carried state for one weapon (owned but not necessarily equipped
    // weapons can still be carried on the hero's body vs. left behind).
    socket.on('updateWeaponCarried', async (data: { heroId: number; weaponId: number; isCarried: boolean }) => {
      try {
        await prisma.dsa_starter_characterhasweapon.updateMany({
          where: { character_id: data.heroId, weapon_id: data.weaponId },
          data: { isCarried: data.isCarried },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Weapon ${data.weaponId} carried=${data.isCarried} for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error updating weapon carried state:', error);
        socket.emit('error', { message: 'Failed to update weapon carried state', error });
      }
    });

    // Toggle carried state for one piece of armor (mirrors updateWeaponCarried).
    socket.on('updateArmorCarried', async (data: { heroId: number; armorId: number; isCarried: boolean }) => {
      try {
        await prisma.dsa_starter_characterhasarmor.updateMany({
          where: { character_id: data.heroId, armor_id: data.armorId },
          data: { isCarried: data.isCarried },
        });

        namespace.to('heroes').emit('hero_update', data);
        console.log(`[/heroes] Armor ${data.armorId} carried=${data.isCarried} for character ${data.heroId}`);
      } catch (error) {
        console.error('[/heroes] Error updating armor carried state:', error);
        socket.emit('error', { message: 'Failed to update armor carried state', error });
      }
    });

    socket.on('sendImage', (data) => {
      namespace.to('heroes').emit('hero_update', data);
      console.log(`[/heroes] Image sent (no persistence)`);
    });

    socket.on('startTimer', (data) => {
      namespace.to('heroes').emit('hero_update', data);
      console.log(`[/heroes] Timer started (no persistence)`);
    });

    socket.on('timerFinished', (data) => {
      namespace.to('heroes').emit('hero_update', data);
      console.log(`[/heroes] Timer finished (no persistence)`);
    });

    socket.on('timerStopped', (data) => {
      namespace.to('heroes').emit('hero_update', data);
      console.log(`[/heroes] Timer stopped (no persistence)`);
    });

    // Handle client errors
    socket.on('error', (error) => {
      console.error(`[/heroes] Socket error for ${socket.id}:`, error);
    });

    // Handle disconnection
    socket.on('disconnect', (reason) => {
      console.log(`[/heroes] Client disconnected: ${socket.id} (${reason})`);
    });
  });
}

/**
 * Emit character stats update to all clients watching this character
 */
export function emitCharacterStatsUpdate(
  namespace: Namespace,
  characterId: number,
  stats: {
    life?: number;
    lifeLost?: number;
    magicEnergy?: number;
    magicEnergyLost?: number;
    experience?: number;
  }
): void {
  const message: WebSocketMessage = {
    event: CHARACTER_EVENTS.STATS_CHANGED as any,
    data: { characterId, stats },
    timestamp: Date.now(),
  };

  namespace.to(`character:${characterId}`).emit(CHARACTER_EVENTS.STATS_CHANGED, message);
}

/**
 * Emit character full update
 */
export function emitCharacterUpdate(
  namespace: Namespace,
  characterId: number,
  character: unknown
): void {
  const message: WebSocketMessage = {
    event: CHARACTER_EVENTS.UPDATED as any,
    data: { characterId, character },
    timestamp: Date.now(),
  };

  namespace.to(`character:${characterId}`).emit(CHARACTER_EVENTS.UPDATED, message);
}

/**
 * Emit fight turn change to all participants
 */
export function emitFightTurnChange(
  namespace: Namespace,
  fightId: number,
  nextUp: number,
  participantId: number
): void {
  const message: WebSocketMessage = {
    event: FIGHT_EVENTS.TURN_CHANGED as any,
    data: { fightId, nextUp, participantId },
    timestamp: Date.now(),
  };

  namespace.to(`fight:${fightId}`).emit(FIGHT_EVENTS.TURN_CHANGED, message);
}

/**
 * Emit damage dealt to a participant
 */
export function emitFightParticipantDamaged(
  namespace: Namespace,
  fightId: number,
  participantId: number,
  damage: number,
  remainingLife: number
): void {
  const message: WebSocketMessage = {
    event: FIGHT_EVENTS.PARTICIPANT_DAMAGED as any,
    data: { fightId, participantId, damage, remainingLife },
    timestamp: Date.now(),
  };

  namespace.to(`fight:${fightId}`).emit(FIGHT_EVENTS.PARTICIPANT_DAMAGED, message);
}

/**
 * Emit healing to a participant
 */
export function emitFightParticipantHealed(
  namespace: Namespace,
  fightId: number,
  participantId: number,
  healing: number,
  remainingLife: number
): void {
  const message: WebSocketMessage = {
    event: FIGHT_EVENTS.PARTICIPANT_HEALED as any,
    data: { fightId, participantId, healing, remainingLife },
    timestamp: Date.now(),
  };

  namespace.to(`fight:${fightId}`).emit(FIGHT_EVENTS.PARTICIPANT_HEALED, message);
}

/**
 * Emit adventure started event
 */
export function emitAdventureStarted(
  namespace: Namespace,
  adventureId: number,
  adventure: unknown
): void {
  const message: WebSocketMessage = {
    event: ADVENTURE_EVENTS.STARTED as any,
    data: { adventureId, adventure },
    timestamp: Date.now(),
  };

  namespace.to(`adventure:${adventureId}`).emit(ADVENTURE_EVENTS.STARTED, message);
}

/**
 * Emit adventure stopped event
 */
export function emitAdventureStopped(namespace: Namespace, adventureId: number): void {
  const message: WebSocketMessage = {
    event: ADVENTURE_EVENTS.STOPPED as any,
    data: { adventureId },
    timestamp: Date.now(),
  };

  namespace.to(`adventure:${adventureId}`).emit(ADVENTURE_EVENTS.STOPPED, message);
}
