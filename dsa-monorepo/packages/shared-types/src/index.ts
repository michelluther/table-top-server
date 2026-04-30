/**
 * Shared TypeScript types for DSA Cockpit
 *
 * This package exports shared types between the Angular frontend and Next.js backend:
 * - DTOs (Data Transfer Objects) for API contracts
 * - API response types
 * - WebSocket event types
 */

// ==========================================
// DTOs (Data Transfer Objects)
// ==========================================

export type {
  CharacterListDto,
  CharacterDetailDto,
  CharacterWithAbilitiesDto,
  CharacterStatsUpdateDto,
  CreateCharacterDto,
  UpdateCharacterDto,
  HeroTypeDto,
  RaceDto,
  ActualSkillDto,
  ActualSpellDto,
  WeaponSkillDistributionDto,
  InventoryItemDto,
  ArmorDto,
  WeaponDto,
} from './dtos/character.dto';

// ==========================================
// API Response Types
// ==========================================

export type {
  ApiSuccessResponse,
  ApiErrorResponse,
  ApiResponse,
  PaginationParams,
  PaginatedResponse,
  DiceRoll,
} from './api/response.types';

// ==========================================
// WebSocket Event Types
// ==========================================

export {
  WebSocketEvent,
} from './websocket/events.types';

export type {
  WebSocketMessage,
} from './websocket/events.types';

// ==========================================
// Legacy exports for backward compatibility
// (to be removed after frontend migration)
// ==========================================

// Re-export Prisma types from the backend
// Note: These are snake_case types from the database
// New code should use the DTOs above instead
export type {
  dsa_starter_character as PrismaCharacter,
  dsa_starter_herotype as PrismaHeroType,
  dsa_starter_race as PrismaRace,
  dsa_starter_skill as PrismaSkill,
  dsa_starter_actualskill as PrismaActualSkill,
  dsa_starter_spell as PrismaSpell,
  dsa_starter_actualspellskill as PrismaActualSpellSkill,
  dsa_starter_adventure as PrismaAdventure,
  dsa_starter_adventurecharacter as PrismaAdventureCharacter,
  dsa_starter_adventureimage as PrismaAdventureImage,
  dsa_starter_adventurelocation as PrismaAdventureLocation,
  dsa_starter_fight as PrismaFight,
  dsa_starter_fightparticipation as PrismaFightParticipation,
  dsa_starter_nonplayercharacter as PrismaNonPlayerCharacter,
  dsa_starter_species as PrismaSpecies,
  dsa_starter_weapon as PrismaWeapon,
  dsa_starter_armor as PrismaArmor,
  dsa_starter_inventoryitem as PrismaInventoryItem,
  dsa_starter_weaponskilldistribution as PrismaWeaponSkillDistribution,
  dsa_starter_skillgroup as PrismaSkillGroup,
  dsa_starter_skilltype as PrismaSkillType,
  dsa_starter_spelltype as PrismaSpellType,
} from '../../../apps/backend/src/generated/prisma';

// Legacy domain types (manually created, camelCase)
// These are kept for backward compatibility during migration
// New code should use DTOs instead

/**
 * @deprecated Use CharacterDetailDto instead
 * Character with related data (hero type, race, skills, spells)
 */
export type CharacterWithRelations = {
  id: number;
  name: string;
  isHero: boolean;
  createdDate: Date;

  // Stats
  experience: number;
  experienceUsed: number;
  life: number;
  lifeLost: number;
  magicEnergy: number;
  magicEnergyLost: number;
  armor: number;

  // Attributes (DSA stats)
  MU: number; // Mut (Courage)
  KL: number; // Klugheit (Intelligence)
  IN: number; // Intuition
  CH: number; // Charisma
  FF: number; // Fingerfertigkeit (Dexterity)
  GE: number; // Gewandtheit (Agility)
  KO: number; // Konstitution (Constitution)
  KK: number; // Körperkraft (Strength)

  // Appearance
  gender: string;
  size: number;
  weight: number;
  hairColor: string;
  eyeColor: string;
  avatar?: string | null;
  avatarSmall?: string | null;

  // Relations
  heroType: {
    id: number;
    name: string;
    knowsMagic: boolean;
  };
  race: {
    id: number;
    name: string;
  };

  // Money
  moneyDukaten: number;
  moneyHeller: number;
  moneyKreuzer: number;
  moneySilbertaler: number;

  culture: string;
  socialRank: number;
};

/**
 * @deprecated Use CharacterListDto instead
 */
export type CharacterListItem = {
  id: number;
  name: string;
  isHero: boolean;
  heroTypeName: string;
  raceName: string;
  life: number;
  lifeLost: number;
  avatarSmall?: string | null;
};

/**
 * @deprecated Use CharacterStatsUpdateDto instead
 */
export type CharacterStatsUpdate = {
  life?: number;
  lifeLost?: number;
  magicEnergy?: number;
  magicEnergyLost?: number;
  experience?: number;
  experienceUsed?: number;
};

/**
 * @deprecated Use CharacterWithAbilitiesDto instead
 */
export type CharacterWithAbilities = CharacterWithRelations & {
  skills: Array<{
    id: number;
    skillId: number;
    skillName: string;
    value: number;
    basis: boolean;
    weaponSkill: boolean;
  }>;
  spells: Array<{
    id: number;
    spellId: number;
    spellName: string;
    value: number;
    basis: boolean;
  }>;
  weaponSkills: Array<{
    id: number;
    skillId: number;
    skillName: string;
    attack: number;
    parade: number;
  }>;
  inventory: Array<{
    id: number;
    name: string;
    amount: number;
    unit: string;
    weight: number;
  }>;
};

// Adventure types
export type AdventureWithDetails = {
  id: number;
  name: string;
  isActive: boolean;

  participants: Array<{
    id: number;
    sequenceInAdventure: number;
    isActive: boolean;
    character?: {
      id: number;
      name: string;
      isHero: boolean;
      avatarSmall?: string | null;
    };
    npc?: {
      id: number;
      name: string;
      avatarSmall?: string | null;
    };
  }>;

  locations: Array<{
    id: number;
    name: string;
    image?: string | null;
    isActive: boolean;
  }>;

  images: Array<{
    id: number;
    caption: string;
    image?: string | null;
    sequenceInAdventure: number;
    isActive: boolean;
  }>;

  fights: Array<{
    id: number;
    name: string;
    nextUp: number;
  }>;
};

// Fight types
export type FightParticipantWithDetails = {
  id: number;
  isGood: boolean;
  position: string;
  calculatedInitiative: number;

  character?: {
    id: number;
    name: string;
    life: number;
    lifeLost: number;
    magicEnergy: number;
    magicEnergyLost: number;
    avatarSmall?: string | null;
  };

  npc?: {
    id: number;
    name: string;
    life: number;
    attack: number;
    parade: number;
    ruestung: number;
    avatarSmall?: string | null;
  };
};

export type FightWithParticipants = {
  id: number;
  name: string;
  adventureId: number;
  nextUp: number;

  participants: FightParticipantWithDetails[];
};

export type CombatActionResult = {
  success: boolean;
  attackRoll?: number;
  paradeRoll?: number;
  damage?: number;
  message: string;
};

// Skill check types
export type SkillCheckRequest = {
  characterId: number;
  skillId: number;
  modifier?: number;
};

export type SkillCheckResult = {
  success: boolean;
  rolls: [number, number, number];
  skillValue: number;
  remainingPoints: number;
  qualityLevel: number;
  message: string;
};

export type SpellCastRequest = {
  characterId: number;
  spellId: number;
  modifier?: number;
};

export type SpellCastResult = SkillCheckResult;
