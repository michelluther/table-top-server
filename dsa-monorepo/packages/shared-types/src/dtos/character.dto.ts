/**
 * Character DTOs (Data Transfer Objects)
 * These define the API contracts between frontend and backend
 */

/**
 * Hero Type DTO - nested in character responses
 */
export interface HeroTypeDto {
  id: number;
  name: string;
  knowsMagic: boolean;
}

/**
 * Race DTO - nested in character responses
 */
export interface RaceDto {
  id: number;
  name: string;
}

/**
 * Character List Item DTO - used in list views
 * Minimal data for displaying a list of characters
 */
export interface CharacterListDto {
  id: number;
  name: string;
  isHero: boolean;
  heroTypeName: string;
  raceName: string;
  life: number;
  lifeLost: number;
  avatarSmall?: string | null;
}

/**
 * Character Detail DTO - complete character data
 * Used for displaying and editing a single character
 */
export interface CharacterDetailDto {
  id: number;
  name: string;
  isHero: boolean;
  createdDate: string; // ISO 8601 date string

  // Stats
  experience: number;
  experienceUsed: number;
  life: number;
  lifeLost: number;
  magicEnergy: number;
  magicEnergyLost: number;

  // Attributes (DSA stats)
  MU: number; // Mut (Courage)
  KL: number; // Klugheit (Intelligence)
  IN: number; // Intuition
  CH: number; // Charisma
  FF: number; // Fingerfertigkeit (Dexterity)
  GE: number; // Gewandtheit (Agility)
  KO: number; // Konstitution (Constitution)
  KK: number; // Körperkraft (Strength)

  // Computed combat stats (from Django serializer)
  magieresistenz: number; // (KO + MU + KL) / 5
  attackBasis: number; // round((MU + GE + KK) / 5)
  paradeBasis: number; // round((IN + GE + KK) / 5)
  iniBasis: number; // round((MU + MU + IN + GE) / 5)
  fernkampfBasis: number; // round((IN + FF + KK) / 5)

  // Appearance
  gender: string;
  size: number;
  weight: number;
  hairColor: string;
  eyeColor: string;
  avatar?: string | null;
  avatarSmall?: string | null;

  // Relations
  heroType: HeroTypeDto;
  race: RaceDto;

  // Money
  moneyDukaten: number;
  moneyHeller: number;
  moneyKreuzer: number;
  moneySilbertaler: number;

  culture: string;
  socialRank: number;

  // Character abilities (from Django serializer)
  weaponSkillDistributions: WeaponSkillDistributionDto[];
  weapons: WeaponDto[];
  armor: ArmorDto[];  // Note: this is the armor array, not the armor value
  inventoryItems: InventoryItemDto[];
}

/**
 * Actual Skill DTO - character's skill values
 */
export interface ActualSkillDto {
  id: number;
  skillId: number;
  skillName: string;
  value: number;
  basis: boolean;
  weaponSkill: boolean;
}

/**
 * Actual Spell DTO - character's spell values
 */
export interface ActualSpellDto {
  id: number;
  spellId: number;
  spellName: string;
  value: number;
  basis: boolean;
}

/**
 * Weapon Skill Distribution DTO - weapon-specific skill values
 * Matches Django's WeaponSkillDistributionSerializer format
 */
export interface WeaponSkillDistributionDto {
  skill: number;  // Skill ID (matches Django's PrimaryKeyRelatedField)
  attack: number;
  parade: number;
}

/**
 * Armor DTO - character's armor items
 */
export interface ArmorDto {
  id: number;
  name: string;
  ruestungsSchutz: number;  // Armor protection value (rs)
  behinderung: number;       // Encumbrance
  weight: number;
}

/**
 * Weapon DTO - character's weapons
 */
export interface WeaponDto {
  id: number;
  name: string;
  tpDice: number;            // hit_dices
  tpAddPoints: number;       // hit_add_points
  extraTpFromKk: number;     // hit_extra_from_kk
  skill: number;             // skill_id
  weight: number;
}

/**
 * Inventory Item DTO - character's inventory
 */
export interface InventoryItemDto {
  id: number;
  name: string;
  amount: number;
  unit: string;
  weight: number;
  isCarried: boolean;
}

/**
 * Character with Abilities DTO - character with all gameplay data
 * Used in gameplay screens (master view, fight system, etc.)
 * Note: weaponSkillDistributions and inventoryItems are inherited from CharacterDetailDto
 */
export interface CharacterWithAbilitiesDto extends CharacterDetailDto {
  skills: ActualSkillDto[];
  spells: ActualSpellDto[];
}

/**
 * Character Stats Update DTO - for partial updates
 */
export interface CharacterStatsUpdateDto {
  life?: number;
  lifeLost?: number;
  magicEnergy?: number;
  magicEnergyLost?: number;
  experience?: number;
  experienceUsed?: number;
}

/**
 * Create Character DTO - for creating new characters
 */
export interface CreateCharacterDto {
  name: string;
  typeId: number;
  raceId: number;
  isHero: boolean;

  // Optional initial values
  experience?: number;
  life?: number;
  culture?: string;
  gender?: string;
  size?: number;
  socialRank?: number;

  // Attributes
  MU?: number;
  KL?: number;
  IN?: number;
  CH?: number;
  FF?: number;
  GE?: number;
  KO?: number;
  KK?: number;
}

/**
 * Update Character DTO - for updating characters
 */
export interface UpdateCharacterDto {
  name?: string;
  typeId?: number;
  raceId?: number;

  // Stats
  experience?: number;
  experienceUsed?: number;
  life?: number;
  lifeLost?: number;
  magicEnergy?: number;
  magicEnergyLost?: number;

  // Attributes
  MU?: number;
  KL?: number;
  IN?: number;
  CH?: number;
  FF?: number;
  GE?: number;
  KO?: number;
  KK?: number;

  // Appearance
  gender?: string;
  size?: number;
  weight?: number;
  hairColor?: string;
  eyeColor?: string;
  avatar?: string | null;

  // Money
  moneyDukaten?: number;
  moneyHeller?: number;
  moneyKreuzer?: number;
  moneySilbertaler?: number;

  culture?: string;
  socialRank?: number;
}
