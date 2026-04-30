/**
 * Shared constants for DSA Cockpit
 *
 * These constants are used across both frontend and backend
 * to ensure consistency in the application.
 */

// ==========================================
// API Configuration
// ==========================================

/**
 * API version
 */
export const API_VERSION = 'v1';

/**
 * API base paths
 */
export const API_PATHS = {
  CHARACTERS: `/api/${API_VERSION}/characters`,
  SKILLS: `/api/${API_VERSION}/skills`,
  SPELLS: `/api/${API_VERSION}/spells`,
  ADVENTURES: `/api/${API_VERSION}/adventures`,
  FIGHTS: `/api/${API_VERSION}/fights`,
  NPCS: `/api/${API_VERSION}/npcs`,
  WEAPONS: `/api/${API_VERSION}/weapons`,
  ARMOR: `/api/${API_VERSION}/armor`,
  RACES: `/api/${API_VERSION}/races`,
  HERO_TYPES: `/api/${API_VERSION}/hero-types`,
  SPECIES: `/api/${API_VERSION}/species`,
  UPLOADS: `/api/${API_VERSION}/uploads`,
  DICE: `/api/${API_VERSION}/dice`,
} as const;

/**
 * WebSocket namespace paths
 */
export const WS_NAMESPACES = {
  HEROES: '/heroes',
  REMOTE_CONTROL: '/remoteControl',
} as const;

// ==========================================
// DSA Game Constants
// ==========================================

/**
 * DSA Attribute names (German abbreviations)
 */
export const DSA_ATTRIBUTES = {
  MU: 'MU', // Mut (Courage)
  KL: 'KL', // Klugheit (Intelligence)
  IN: 'IN', // Intuition
  CH: 'CH', // Charisma
  FF: 'FF', // Fingerfertigkeit (Dexterity)
  GE: 'GE', // Gewandtheit (Agility)
  KO: 'KO', // Konstitution (Constitution)
  KK: 'KK', // Körperkraft (Strength)
} as const;

/**
 * Attribute display names (German)
 */
export const DSA_ATTRIBUTE_NAMES = {
  [DSA_ATTRIBUTES.MU]: 'Mut',
  [DSA_ATTRIBUTES.KL]: 'Klugheit',
  [DSA_ATTRIBUTES.IN]: 'Intuition',
  [DSA_ATTRIBUTES.CH]: 'Charisma',
  [DSA_ATTRIBUTES.FF]: 'Fingerfertigkeit',
  [DSA_ATTRIBUTES.GE]: 'Gewandtheit',
  [DSA_ATTRIBUTES.KO]: 'Konstitution',
  [DSA_ATTRIBUTES.KK]: 'Körperkraft',
} as const;

/**
 * Min/max values for attributes
 */
export const ATTRIBUTE_LIMITS = {
  MIN: 1,
  MAX: 20,
  STARTING_MAX: 14,
} as const;

/**
 * Min/max values for skills
 */
export const SKILL_LIMITS = {
  MIN: 0,
  MAX: 30,
} as const;

/**
 * Dice types used in DSA
 */
export const DICE_TYPES = {
  D4: 4,
  D6: 6,
  D8: 8,
  D10: 10,
  D12: 12,
  D20: 20,
  D100: 100,
} as const;

/**
 * Standard DSA dice (3d20 for skill checks)
 */
export const DSA_SKILL_CHECK_DICE = 3;
export const DSA_SKILL_CHECK_DIE_TYPE = DICE_TYPES.D20;

/**
 * Quality levels for skill checks
 */
export const SKILL_CHECK_QUALITY = {
  CRITICAL_FAILURE: -1,
  FAILURE: 0,
  SUCCESS: 1,
  GOOD_SUCCESS: 2,
  EXCELLENT_SUCCESS: 3,
  MASTER_SUCCESS: 4,
} as const;

// ==========================================
// Character Limits
// ==========================================

/**
 * Character creation limits
 */
export const CHARACTER_LIMITS = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 100,
  SIZE_MIN: 100, // cm
  SIZE_MAX: 250, // cm
  WEIGHT_MIN: 20, // kg
  WEIGHT_MAX: 200, // kg
  SOCIAL_RANK_MIN: 1,
  SOCIAL_RANK_MAX: 12,
} as const;

/**
 * Character genders
 */
export const CHARACTER_GENDERS = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other',
} as const;

// ==========================================
// Money & Economy
// ==========================================

/**
 * DSA currency types
 */
export const CURRENCY_TYPES = {
  DUKATEN: 'dukaten',
  SILBERTALER: 'silbertaler',
  HELLER: 'heller',
  KREUZER: 'kreuzer',
} as const;

/**
 * Currency conversion rates (relative to Heller)
 */
export const CURRENCY_CONVERSION = {
  DUKATEN_TO_HELLER: 1000,
  SILBERTALER_TO_HELLER: 100,
  KREUZER_TO_HELLER: 10,
  HELLER_TO_HELLER: 1,
} as const;

/**
 * Currency display names
 */
export const CURRENCY_NAMES = {
  [CURRENCY_TYPES.DUKATEN]: 'Dukaten',
  [CURRENCY_TYPES.SILBERTALER]: 'Silbertaler',
  [CURRENCY_TYPES.HELLER]: 'Heller',
  [CURRENCY_TYPES.KREUZER]: 'Kreuzer',
} as const;

// ==========================================
// Combat & Fight
// ==========================================

/**
 * Combat positions
 */
export const COMBAT_POSITIONS = {
  FRONT: 'front',
  MIDDLE: 'middle',
  BACK: 'back',
  FLANKING: 'flanking',
} as const;

/**
 * Damage types
 */
export const DAMAGE_TYPES = {
  PHYSICAL: 'physical',
  MAGICAL: 'magical',
  FIRE: 'fire',
  COLD: 'cold',
  POISON: 'poison',
} as const;

/**
 * Healing types
 */
export const HEALING_TYPES = {
  NATURAL: 'natural',
  MAGICAL: 'magical',
  POTION: 'potion',
} as const;

// ==========================================
// File Upload Configuration
// ==========================================

/**
 * Allowed image file types
 */
export const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
] as const;

/**
 * File upload size limits (in bytes)
 */
export const FILE_SIZE_LIMITS = {
  IMAGE: 5 * 1024 * 1024, // 5MB
  AVATAR: 2 * 1024 * 1024, // 2MB
  DOCUMENT: 10 * 1024 * 1024, // 10MB
} as const;

/**
 * Image file types
 */
export const IMAGE_FILE_TYPES = {
  IMAGE: 'image',
  AVATAR: 'avatar',
  LOCATION: 'location',
  ADVENTURE: 'adventure',
} as const;

// ==========================================
// Pagination
// ==========================================

/**
 * Default pagination settings
 */
export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

/**
 * Sort orders
 */
export const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

// ==========================================
// WebSocket Events
// ==========================================

/**
 * Character-related events
 */
export const CHARACTER_EVENTS = {
  UPDATED: 'character:updated',
  STATS_CHANGED: 'character:stats:changed',
  SKILL_CHANGED: 'character:skill:changed',
  SPELL_CHANGED: 'character:spell:changed',
  INVENTORY_CHANGED: 'character:inventory:changed',
} as const;

/**
 * Adventure-related events
 */
export const ADVENTURE_EVENTS = {
  STARTED: 'adventure:started',
  STOPPED: 'adventure:stopped',
  PARTICIPANT_ADDED: 'adventure:participant:added',
  PARTICIPANT_REMOVED: 'adventure:participant:removed',
  LOCATION_CHANGED: 'adventure:location:changed',
  IMAGE_SHOWN: 'adventure:image:shown',
} as const;

/**
 * Fight-related events
 */
export const FIGHT_EVENTS = {
  STARTED: 'fight:started',
  ENDED: 'fight:ended',
  TURN_CHANGED: 'fight:turn:changed',
  PARTICIPANT_DAMAGED: 'fight:participant:damaged',
  PARTICIPANT_HEALED: 'fight:participant:healed',
  PARTICIPANT_ADDED: 'fight:participant:added',
  PARTICIPANT_REMOVED: 'fight:participant:removed',
} as const;

/**
 * Remote control events
 */
export const REMOTE_CONTROL_EVENTS = {
  DICE_ROLLED: 'remote:dice:rolled',
  IMAGE_SHOWN: 'remote:image:shown',
  LOCATION_CHANGED: 'remote:location:changed',
  MESSAGE_SENT: 'remote:message:sent',
} as const;

// ==========================================
// Error Codes
// ==========================================

/**
 * Standard error codes
 */
export const ERROR_CODES = {
  // Validation errors (400)
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INVALID_INPUT: 'INVALID_INPUT',
  MISSING_FIELD: 'MISSING_FIELD',

  // Authentication/Authorization errors (401, 403)
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  INVALID_TOKEN: 'INVALID_TOKEN',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',

  // Not found errors (404)
  NOT_FOUND: 'NOT_FOUND',
  CHARACTER_NOT_FOUND: 'CHARACTER_NOT_FOUND',
  ADVENTURE_NOT_FOUND: 'ADVENTURE_NOT_FOUND',
  FIGHT_NOT_FOUND: 'FIGHT_NOT_FOUND',

  // Conflict errors (409)
  ALREADY_EXISTS: 'ALREADY_EXISTS',
  DUPLICATE_ENTRY: 'DUPLICATE_ENTRY',

  // Business logic errors (422)
  INSUFFICIENT_EXPERIENCE: 'INSUFFICIENT_EXPERIENCE',
  SKILL_REQUIREMENT_NOT_MET: 'SKILL_REQUIREMENT_NOT_MET',
  CHARACTER_DEAD: 'CHARACTER_DEAD',
  FIGHT_ALREADY_ACTIVE: 'FIGHT_ALREADY_ACTIVE',

  // Server errors (500)
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  DATABASE_ERROR: 'DATABASE_ERROR',
  EXTERNAL_SERVICE_ERROR: 'EXTERNAL_SERVICE_ERROR',
} as const;

// ==========================================
// HTTP Status Codes
// ==========================================

/**
 * HTTP status codes used in the application
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

// ==========================================
// Cache Configuration
// ==========================================

/**
 * Cache TTL values (in seconds)
 */
export const CACHE_TTL = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  VERY_LONG: 86400, // 24 hours
} as const;

/**
 * Cache keys
 */
export const CACHE_KEYS = {
  CHARACTERS: 'characters',
  HERO_TYPES: 'hero_types',
  RACES: 'races',
  SPECIES: 'species',
  SKILLS: 'skills',
  SPELLS: 'spells',
  WEAPONS: 'weapons',
  ARMOR: 'armor',
} as const;

// ==========================================
// Environment Variables
// ==========================================

/**
 * Environment modes
 */
export const ENV_MODES = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  TEST: 'test',
} as const;

// ==========================================
// Type Exports
// ==========================================

export type DsaAttribute = keyof typeof DSA_ATTRIBUTES;
export type CharacterGender = (typeof CHARACTER_GENDERS)[keyof typeof CHARACTER_GENDERS];
export type CurrencyType = (typeof CURRENCY_TYPES)[keyof typeof CURRENCY_TYPES];
export type DamageType = (typeof DAMAGE_TYPES)[keyof typeof DAMAGE_TYPES];
export type HealingType = (typeof HEALING_TYPES)[keyof typeof HEALING_TYPES];
export type CombatPosition = (typeof COMBAT_POSITIONS)[keyof typeof COMBAT_POSITIONS];
export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
export type HttpStatus = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];

export {};
