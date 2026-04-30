# Prisma Schema Documentation

## Overview

This document describes the Prisma schema introspected from the Django SQLite database.

**Database:** SQLite (`dsa_cockpit.sqlite3`)
**Total Models:** 38 (+ 2 ignored)
**Prisma Client:** Generated at `src/generated/prisma`

## Schema Status

✅ **Complete** - All Django models have been introspected
✅ **Type Fixes Applied** - Converted Unsupported types to proper Prisma types
⚠️ **Django Naming** - Models currently use snake_case (Django convention)

## Type Conversions

The following type conversions were applied to the introspected schema:

| Original Django Type | Prisma Type | Notes |
|---------------------|-------------|-------|
| `bool` | `Boolean` | SQLite boolean |
| `smallint` | `Int` | 16-bit signed integer |
| `smallint unsigned` | `Int` | 16-bit unsigned integer |
| `varchar` | `String` | Variable-length text |
| `datetime` | `DateTime` | Timestamp |

## Core DSA Models

### Character Management

#### `dsa_starter_character`
Main character model representing both player characters (heroes) and managed NPCs.

**Key fields:**
- `id`: Primary key
- `name`: Character name
- `isHero`: Boolean flag (true for player characters)
- `type_id`: Foreign key to `dsa_starter_herotype`
- `race_id`: Foreign key to `dsa_starter_race`
- `experience`, `experience_used`: Experience points
- `life`, `life_lost`: Hit points
- `magic_energy`, `magic_energy_lost`: Magic/spell points
- `MU`, `KL`, `IN`, `CH`, `FF`, `GE`, `KO`, `KK`: Character attributes (DSA stats)
- `avatar`, `avatar_small`: Character images

**Relations:**
- Skills (`dsa_starter_actualskill`)
- Spells (`dsa_starter_actualspellskill`)
- Weapons (`dsa_starter_characterhasweapon`)
- Armor (`dsa_starter_characterhasarmor`)
- Inventory (`dsa_starter_inventoryitem`)
- Adventures (`dsa_starter_adventurecharacter`)
- Fights (`dsa_starter_fightparticipation`)

#### `dsa_starter_nonplayercharacter`
Non-player characters (enemies, allies) managed by the game master.

**Key fields:**
- Combat stats: `initiative`, `attack`, `parade`
- Weapons: `weapon_1_*`, `weapon_2_*` fields
- `species_id`: Type of NPC (from `dsa_starter_species`)

### Skills & Abilities

#### `dsa_starter_skill`
Available skills in the DSA system (talents).

**Key fields:**
- `name`: Skill name
- `type_id`: Skill category
- `dice1`, `dice2`, `dice3`: Attributes used for skill checks
- `basis`: Whether it's a basic skill
- `weaponSkill`: Whether it's a combat skill

#### `dsa_starter_actualskill`
Character-specific skill values (many-to-many between characters and skills).

**Key fields:**
- `character_id`: Character who has this skill
- `skill_id`: The skill
- `value`: Current skill level

#### `dsa_starter_spell`
Available spells in the DSA magic system.

#### `dsa_starter_actualspellskill`
Character-specific spell values.

### Adventures & Combat

#### `dsa_starter_adventure`
Campaign/adventure sessions.

**Key fields:**
- `name`: Adventure name
- `isActive`: Whether the adventure is currently running

**Relations:**
- Characters (`dsa_starter_adventurecharacter`)
- Locations (`dsa_starter_adventurelocation`)
- Images (`dsa_starter_adventureimage`)
- Fights (`dsa_starter_fight`)

#### `dsa_starter_fight`
Combat encounters within adventures.

**Key fields:**
- `adventure_id`: Parent adventure
- `nextUp`: ID of character/NPC whose turn is next

**Relations:**
- Participants (`dsa_starter_fightparticipation`)

#### `dsa_starter_fightparticipation`
Characters/NPCs participating in a fight.

**Key fields:**
- `fight_id`: The combat encounter
- `character_id` or `npc_id`: Participant
- `isGood`: Whether participant is on the "good" side
- `position`: Combat position
- `calculatedInitiative`: Turn order

### Equipment

#### `dsa_starter_weapon`
Available weapons.

**Key fields:**
- `name`: Weapon name
- `hit_dices`, `hit_add_points`: Damage formula
- `skill_id`: Required skill to use

#### `dsa_starter_armor`
Available armor.

**Key fields:**
- `name`: Armor name
- `ruestungs_schutz`: Armor rating
- `behinderung`: Encumbrance penalty

#### `dsa_starter_inventoryitem`
Character inventory items (generic items, not weapons/armor).

## Reference Data Models

- `dsa_starter_herotype`: Character classes (Fighter, Mage, etc.)
- `dsa_starter_race`: Character races (Human, Elf, Dwarf, etc.)
- `dsa_starter_species`: NPC species/types
- `dsa_starter_skillgroup`: Skill categories
- `dsa_starter_skilltype`: Skill types within groups
- `dsa_starter_spelltype`: Spell categories
- `dsa_starter_ascensions`: Level-up costs table

## Django Auth Models

The schema includes standard Django authentication models:
- `auth_user`: Django users
- `auth_group`: User groups
- `auth_permission`: Permissions
- `django_admin_log`: Admin action log
- `django_session`: Session management

These will be replaced with NextAuth.js in Phase 5.

## Ignored Models

Two models were ignored during introspection due to missing primary keys:

1. **`dsa_starter_abenteuer_punkte`**: Adventure points tracking (view or denormalized table)
2. **`dsa_starter_points_spent`**: Points spending history (JSON-based log)

These can be handled with raw SQL queries if needed.

## Next Steps (Phase 3+)

1. Create Zod schemas based on Prisma models
2. Generate TypeScript types for shared package
3. Implement API routes with proper validation
4. Consider adding `@@map` attributes to use camelCase model names while preserving database table names

## Usage Example

```typescript
import { prisma } from './lib/prisma';

// Get all hero characters
const heroes = await prisma.dsa_starter_character.findMany({
  where: { isHero: true },
  include: {
    dsa_starter_herotype: true,
    dsa_starter_race: true,
    dsa_starter_actualskill: {
      include: { dsa_starter_skill: true }
    }
  }
});
```
