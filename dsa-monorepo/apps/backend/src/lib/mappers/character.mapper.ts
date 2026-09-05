/**
 * Character mappers - convert between Prisma models and DTOs
 *
 * These mappers handle the conversion from snake_case database fields
 * to camelCase DTO fields for API responses.
 */

import type {
  dsa_starter_character,
  dsa_starter_herotype,
  dsa_starter_race,
  dsa_starter_weaponskilldistribution,
  dsa_starter_inventoryitem,
  dsa_starter_armor,
  dsa_starter_weapon,
} from '@/generated/prisma';

import type {
  CharacterListDto,
  CharacterDetailDto,
  HeroTypeDto,
  RaceDto,
  WeaponSkillDistributionDto,
  InventoryItemDto,
  ArmorDto,
  WeaponDto,
} from '@dsa-monorepo/shared-types';

/**
 * Map Prisma HeroType to DTO
 */
export function mapHeroTypeToDto(heroType: dsa_starter_herotype): HeroTypeDto {
  return {
    id: heroType.id,
    name: heroType.name,
    knowsMagic: heroType.knowsMagic,
  };
}

/**
 * Map Prisma Race to DTO
 */
export function mapRaceToDto(race: dsa_starter_race): RaceDto {
  return {
    id: race.id,
    name: race.name,
  };
}

/**
 * Map Prisma WeaponSkillDistribution to DTO
 */
export function mapWeaponSkillDistributionToDto(
  distribution: dsa_starter_weaponskilldistribution
): WeaponSkillDistributionDto {
  return {
    skill: distribution.skill_id,
    attack: distribution.attack,
    parade: distribution.parade,
  };
}

/**
 * Map Prisma InventoryItem to DTO
 */
export function mapInventoryItemToDto(
  item: dsa_starter_inventoryitem
): InventoryItemDto {
  return {
    id: item.id,
    name: item.name,
    amount: item.amount,
    unit: item.unit,
    weight: item.weight,
    isCarried: item.isCarried,
  };
}

/**
 * Map Prisma Armor to DTO
 */
export function mapArmorToDto(
  armor: dsa_starter_armor
): ArmorDto {
  return {
    id: armor.id,
    name: armor.name,
    ruestungsSchutz: armor.ruestungs_schutz,
    behinderung: armor.behinderung,
    weight: armor.weight,
  };
}

/**
 * Map Prisma Weapon to DTO
 */
export function mapWeaponToDto(
  weapon: dsa_starter_weapon
): WeaponDto {
  return {
    id: weapon.id,
    name: weapon.name,
    tpDice: weapon.hit_dices,
    tpAddPoints: weapon.hit_add_points,
    extraTpFromKk: weapon.hit_extra_from_kk,
    skill: weapon.skill_id,
    weight: weapon.weight,
  };
}

/**
 * Map Prisma Character (with relations) to CharacterDetailDto
 */
export function mapCharacterToDetailDto(
  character: dsa_starter_character & {
    dsa_starter_herotype: dsa_starter_herotype;
    dsa_starter_race: dsa_starter_race;
    dsa_starter_weaponskilldistribution?: dsa_starter_weaponskilldistribution[];
    dsa_starter_inventoryitem?: dsa_starter_inventoryitem[];
    dsa_starter_characterhasweapon?: Array<{ dsa_starter_weapon: dsa_starter_weapon; isEquipped: boolean; isCarried: boolean }>;
    dsa_starter_characterhasarmor?: Array<{ dsa_starter_armor: dsa_starter_armor; isEquipped: boolean; isCarried: boolean }>;
  }
): CharacterDetailDto {
  return {
    id: character.id,
    name: character.name,
    isHero: character.isHero,
    createdDate: character.created_date.toISOString(),

    // Stats
    experience: character.experience,
    experienceUsed: character.experience_used,
    life: character.life,
    lifeLost: character.life_lost,
    magicEnergy: character.magic_energy,
    magicEnergyLost: character.magic_energy_lost,

    // Attributes (DSA stats) - already uppercase in DB
    MU: character.MU,
    KL: character.KL,
    IN: character.IN,
    CH: character.CH,
    FF: character.FF,
    GE: character.GE,
    KO: character.KO,
    KK: character.KK,

    // Computed combat stats (matching Django serializer formulas)
    magieresistenz: (character.KO + character.MU + character.KL) / 5,
    attackBasis: Math.round((character.MU + character.GE + character.KK) / 5),
    paradeBasis: Math.round((character.IN + character.GE + character.KK) / 5),
    iniBasis: Math.round((character.MU + character.MU + character.IN + character.GE) / 5),
    fernkampfBasis: Math.round((character.IN + character.FF + character.KK) / 5),

    // Appearance
    gender: character.gender,
    size: character.size,
    weight: character.weight,
    hairColor: character.hair_color,
    eyeColor: character.eye_color,
    avatar: character.avatar ? `/avatars/${character.avatar}` : null,
    avatarSmall: character.avatar_small ? `/avatars/${character.avatar_small}` : null,

    // Relations
    heroType: mapHeroTypeToDto(character.dsa_starter_herotype),
    race: mapRaceToDto(character.dsa_starter_race),

    // Money
    moneyDukaten: character.money_dukaten,
    moneyHeller: character.money_heller,
    moneyKreuzer: character.money_kreuzer,
    moneySilbertaler: character.money_silbertaler,

    culture: character.culture,
    socialRank: character.social_rank,

    // Character abilities (from Django serializer)
    weaponSkillDistributions: (character.dsa_starter_weaponskilldistribution || []).map(
      mapWeaponSkillDistributionToDto
    ),
    weapons: (character.dsa_starter_characterhasweapon || []).map(
      (cw) => ({ ...mapWeaponToDto(cw.dsa_starter_weapon), isEquipped: cw.isEquipped, isCarried: cw.isCarried })
    ),
    armor: (character.dsa_starter_characterhasarmor || []).map(
      (ca) => ({ ...mapArmorToDto(ca.dsa_starter_armor), isEquipped: ca.isEquipped, isCarried: ca.isCarried })
    ),
    inventoryItems: (character.dsa_starter_inventoryitem || []).map(
      mapInventoryItemToDto
    ),
  };
}

/**
 * Map Prisma Character to CharacterListDto
 * For list views, we need fewer fields
 */
export function mapCharacterToListDto(
  character: dsa_starter_character & {
    dsa_starter_herotype: dsa_starter_herotype;
    dsa_starter_race: dsa_starter_race;
  }
): CharacterListDto {
  return {
    id: character.id,
    name: character.name,
    isHero: character.isHero,
    heroTypeName: character.dsa_starter_herotype.name,
    raceName: character.dsa_starter_race.name,
    life: character.life,
    lifeLost: character.life_lost,
    avatarSmall: character.avatar_small ? `/avatars/${character.avatar_small}` : null,
  };
}

/**
 * Helper type for Prisma character with all relations
 */
export type PrismaCharacterWithRelations = dsa_starter_character & {
  dsa_starter_herotype: dsa_starter_herotype;
  dsa_starter_race: dsa_starter_race;
};
