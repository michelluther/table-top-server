/**
 * Zod validation schemas for DSA Cockpit
 *
 * These schemas are used for:
 * - API request validation
 * - Form validation in frontend
 * - Runtime type checking
 */

import { z } from 'zod';

// ==========================================
// Common Schemas
// ==========================================

/**
 * Pagination query params schema
 */
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('asc'),
});

/**
 * ID parameter schema
 */
export const idParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});

// ==========================================
// Character Schemas
// ==========================================

/**
 * Character creation schema
 */
export const createCharacterSchema = z.object({
  name: z.string().min(1).max(100),
  typeId: z.number().int().positive(),
  raceId: z.number().int().positive(),
  culture: z.string().min(1).max(100),
  gender: z.enum(['male', 'female', 'other']),
  size: z.number().int().min(100).max(250), // cm
  weight: z.number().int().min(20).max(200), // kg
  socialRank: z.number().int().min(1).max(12),
  hairColor: z.string().min(1).max(50),
  eyeColor: z.string().min(1).max(50),
  isHero: z.boolean().default(true),

  // Base attributes (DSA stats)
  MU: z.number().int().min(1).max(20),
  KL: z.number().int().min(1).max(20),
  IN: z.number().int().min(1).max(20),
  CH: z.number().int().min(1).max(20),
  FF: z.number().int().min(1).max(20),
  GE: z.number().int().min(1).max(20),
  KO: z.number().int().min(1).max(20),
  KK: z.number().int().min(1).max(20),

  // Initial values
  experience: z.number().int().min(0).default(0),
  life: z.number().int().positive(),
  magicEnergy: z.number().int().min(0).default(0),
  armor: z.number().int().min(0).default(0),
});

/**
 * Character update schema (all fields optional except id)
 */
export const updateCharacterSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  culture: z.string().min(1).max(100).optional(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  size: z.number().int().min(100).max(250).optional(),
  weight: z.number().int().min(20).max(200).optional(),
  socialRank: z.number().int().min(1).max(12).optional(),
  hairColor: z.string().min(1).max(50).optional(),
  eyeColor: z.string().min(1).max(50).optional(),
  avatar: z.string().url().nullable().optional(),
  avatarSmall: z.string().url().nullable().optional(),
});

/**
 * Character stats update schema
 */
export const updateCharacterStatsSchema = z.object({
  life: z.number().int().min(0).optional(),
  lifeLost: z.number().int().min(0).optional(),
  magicEnergy: z.number().int().min(0).optional(),
  magicEnergyLost: z.number().int().min(0).optional(),
  experience: z.number().int().min(0).optional(),
  experienceUsed: z.number().int().min(0).optional(),
  armor: z.number().int().min(0).optional(),
}).refine(
  (data) => {
    // Ensure lifeLost doesn't exceed life if both are provided
    if (data.life !== undefined && data.lifeLost !== undefined) {
      return data.lifeLost <= data.life;
    }
    return true;
  },
  { message: 'Life lost cannot exceed total life' }
);

/**
 * Character money update schema
 */
export const updateCharacterMoneySchema = z.object({
  moneyDukaten: z.number().int().min(0),
  moneySilbertaler: z.number().int().min(0),
  moneyHeller: z.number().int().min(0),
  moneyKreuzer: z.number().int().min(0),
});

// ==========================================
// Skill Schemas
// ==========================================

/**
 * Skill check request schema
 */
export const skillCheckSchema = z.object({
  characterId: z.number().int().positive(),
  skillId: z.number().int().positive(),
  modifier: z.number().int().min(-10).max(10).default(0),
});

/**
 * Update character skill value
 */
export const updateSkillValueSchema = z.object({
  characterId: z.number().int().positive(),
  skillId: z.number().int().positive(),
  value: z.number().int().min(0).max(30),
});

// ==========================================
// Spell Schemas
// ==========================================

/**
 * Spell cast request schema
 */
export const spellCastSchema = z.object({
  characterId: z.number().int().positive(),
  spellId: z.number().int().positive(),
  modifier: z.number().int().min(-10).max(10).default(0),
});

/**
 * Update character spell value
 */
export const updateSpellValueSchema = z.object({
  characterId: z.number().int().positive(),
  spellId: z.number().int().positive(),
  value: z.number().int().min(0).max(30),
});

// ==========================================
// Adventure Schemas
// ==========================================

/**
 * Create adventure schema
 */
export const createAdventureSchema = z.object({
  name: z.string().min(1).max(200),
  isActive: z.boolean().default(false),
});

/**
 * Update adventure schema
 */
export const updateAdventureSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  isActive: z.boolean().optional(),
});

/**
 * Add participant to adventure
 */
export const addAdventureParticipantSchema = z.object({
  adventureId: z.number().int().positive(),
  characterId: z.number().int().positive().optional(),
  npcId: z.number().int().positive().optional(),
  sequenceInAdventure: z.number().int().min(0),
  isActive: z.boolean().default(true),
}).refine(
  (data) => {
    // Must have either characterId or npcId, but not both
    return (data.characterId !== undefined) !== (data.npcId !== undefined);
  },
  { message: 'Must provide either characterId or npcId, but not both' }
);

/**
 * Update adventure participant
 */
export const updateAdventureParticipantSchema = z.object({
  sequenceInAdventure: z.number().int().min(0).optional(),
  isActive: z.boolean().optional(),
});

/**
 * Add adventure location
 */
export const addAdventureLocationSchema = z.object({
  adventureId: z.number().int().positive(),
  name: z.string().min(1).max(200),
  image: z.string().url().nullable().optional(),
  isActive: z.boolean().default(true),
});

/**
 * Add adventure image
 */
export const addAdventureImageSchema = z.object({
  adventureId: z.number().int().positive(),
  caption: z.string().min(1).max(500),
  image: z.string().url().nullable().optional(),
  sequenceInAdventure: z.number().int().min(0),
  isActive: z.boolean().default(true),
});

// ==========================================
// Fight Schemas
// ==========================================

/**
 * Create fight schema
 */
export const createFightSchema = z.object({
  name: z.string().min(1).max(200),
  adventureId: z.number().int().positive(),
  nextUp: z.number().int().positive().default(1),
});

/**
 * Add fight participant
 */
export const addFightParticipantSchema = z.object({
  fightId: z.number().int().positive(),
  characterId: z.number().int().positive().optional(),
  npcId: z.number().int().positive().optional(),
  isGood: z.boolean().default(true),
  position: z.string().min(1).max(50),
  calculatedInitiative: z.number().int().min(0),
}).refine(
  (data) => {
    // Must have either characterId or npcId, but not both
    return (data.characterId !== undefined) !== (data.npcId !== undefined);
  },
  { message: 'Must provide either characterId or npcId, but not both' }
);

/**
 * Update fight participant
 */
export const updateFightParticipantSchema = z.object({
  position: z.string().min(1).max(50).optional(),
  calculatedInitiative: z.number().int().min(0).optional(),
  isGood: z.boolean().optional(),
});

/**
 * Combat action schema
 */
export const combatActionSchema = z.object({
  fightId: z.number().int().positive(),
  attackerId: z.number().int().positive(),
  defenderId: z.number().int().positive(),
  weaponId: z.number().int().positive().optional(),
  modifier: z.number().int().min(-10).max(10).default(0),
});

/**
 * Deal damage schema
 */
export const dealDamageSchema = z.object({
  participantId: z.number().int().positive(),
  damage: z.number().int().min(0),
  damageType: z.enum(['physical', 'magical', 'fire', 'cold', 'poison']).default('physical'),
});

/**
 * Heal participant schema
 */
export const healParticipantSchema = z.object({
  participantId: z.number().int().positive(),
  healing: z.number().int().positive(),
  healingType: z.enum(['natural', 'magical', 'potion']).default('natural'),
});

/**
 * Update fight turn
 */
export const updateFightTurnSchema = z.object({
  fightId: z.number().int().positive(),
  nextUp: z.number().int().positive(),
});

// ==========================================
// NPC Schemas
// ==========================================

/**
 * Create NPC schema
 */
export const createNpcSchema = z.object({
  name: z.string().min(1).max(100),
  raceId: z.number().int().positive(),
  speciesId: z.number().int().positive(),
  initiative: z.number().int().min(0).max(30),
  attack: z.number().int().min(0).max(30),
  parade: z.number().int().min(0).max(30),
  life: z.number().int().positive(),
  magicEnergy: z.number().int().min(0).default(0),
  ruestung: z.number().int().min(0).default(0),
  knowsMagic: z.boolean().default(false),
  weapon1Name: z.string().min(1).max(100),
  weapon1Damage: z.string().min(1).max(20), // e.g., "1d6+2"
  weapon1Attack: z.number().int().min(0).max(30),
  weapon1Parade: z.number().int().min(0).max(30),
  weapon2Name: z.string().min(1).max(100).optional(),
  weapon2Damage: z.string().min(1).max(20).optional(),
  weapon2Attack: z.number().int().min(0).max(30).optional(),
  weapon2Parade: z.number().int().min(0).max(30).optional(),
  avatarSmall: z.string().url().nullable().optional(),
});

/**
 * Update NPC schema
 */
export const updateNpcSchema = createNpcSchema.partial().omit({ raceId: true, speciesId: true });

// ==========================================
// Inventory Schemas
// ==========================================

/**
 * Add inventory item schema
 */
export const addInventoryItemSchema = z.object({
  characterId: z.number().int().positive(),
  name: z.string().min(1).max(200),
  amount: z.number().int().positive(),
  unit: z.string().min(1).max(50),
  weight: z.number().int().min(0),
});

/**
 * Update inventory item schema
 */
export const updateInventoryItemSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  amount: z.number().int().positive().optional(),
  unit: z.string().min(1).max(50).optional(),
  weight: z.number().int().min(0).optional(),
});

// ==========================================
// Weapon & Armor Schemas
// ==========================================

/**
 * Add weapon to character
 */
export const addCharacterWeaponSchema = z.object({
  characterId: z.number().int().positive(),
  weaponId: z.number().int().positive(),
});

/**
 * Add armor to character
 */
export const addCharacterArmorSchema = z.object({
  characterId: z.number().int().positive(),
  armorId: z.number().int().positive(),
});

/**
 * Update weapon skill distribution
 */
export const updateWeaponSkillSchema = z.object({
  characterId: z.number().int().positive(),
  skillId: z.number().int().positive(),
  attack: z.number().int().min(0).max(30),
  parade: z.number().int().min(0).max(30),
}).refine(
  (data) => {
    // Total attack + parade should not exceed a reasonable limit
    return (data.attack + data.parade) <= 40;
  },
  { message: 'Combined attack and parade values exceed maximum' }
);

// ==========================================
// Dice Roll Schema
// ==========================================

/**
 * Dice roll request schema
 */
export const diceRollSchema = z.object({
  dice: z.string().regex(/^\d+d\d+([+-]\d+)?$/, 'Invalid dice notation (e.g., 2d6+3)'),
  reason: z.string().max(200).optional(),
});

// ==========================================
// File Upload Schema
// ==========================================

/**
 * File upload metadata schema
 */
export const fileUploadSchema = z.object({
  fileName: z.string().min(1).max(255),
  fileType: z.enum(['image', 'avatar', 'location', 'adventure']),
  mimeType: z.string().regex(/^image\/(jpeg|jpg|png|gif|webp)$/),
  fileSize: z.number().int().positive().max(5 * 1024 * 1024), // Max 5MB
});

// ==========================================
// Export Type Inference Helpers
// ==========================================

// These allow you to get TypeScript types from Zod schemas
export type CreateCharacterInput = z.infer<typeof createCharacterSchema>;
export type UpdateCharacterInput = z.infer<typeof updateCharacterSchema>;
export type UpdateCharacterStatsInput = z.infer<typeof updateCharacterStatsSchema>;
export type SkillCheckInput = z.infer<typeof skillCheckSchema>;
export type SpellCastInput = z.infer<typeof spellCastSchema>;
export type CreateAdventureInput = z.infer<typeof createAdventureSchema>;
export type CreateFightInput = z.infer<typeof createFightSchema>;
export type CombatActionInput = z.infer<typeof combatActionSchema>;
export type CreateNpcInput = z.infer<typeof createNpcSchema>;
export type AddInventoryItemInput = z.infer<typeof addInventoryItemSchema>;
export type DiceRollInput = z.infer<typeof diceRollSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;

export {};
