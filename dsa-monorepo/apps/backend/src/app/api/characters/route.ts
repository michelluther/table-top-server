/**
 * Characters API Route
 *
 * GET /api/characters - Returns list of all hero characters with full details
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';
import { mapCharacterToDetailDto } from '@/lib/mappers/character.mapper';

/**
 * Get all hero characters
 *
 * Requires authentication.
 * Returns a list of all characters where isHero = true with full character details
 * Response uses CharacterDetailDto for type safety
 */
export const GET = withAuth(async (request: NextRequest) => {
  try {
    const charactersFromDb = await prisma.dsa_starter_character.findMany({
      where: {
        isHero: true,
      },
      include: {
        dsa_starter_race: true,
        dsa_starter_herotype: true,
        dsa_starter_weaponskilldistribution: true,
        dsa_starter_inventoryitem: true,
        dsa_starter_actualskill: true,
        dsa_starter_actualspellskill: true,
        dsa_starter_characterhasweapon: {
          include: {
            dsa_starter_weapon: true,
          },
        },
        dsa_starter_characterhasarmor: {
          include: {
            dsa_starter_armor: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    // Map Prisma models to DTOs (snake_case → camelCase)
    const characters = charactersFromDb.map((c) => ({
      ...mapCharacterToDetailDto(c),
      skills: c.dsa_starter_actualskill.map((actual) => ({
        id: actual.skill_id,
        assignmentId: actual.id,
        value: actual.value,
      })),
      spells: c.dsa_starter_actualspellskill.map((actual) => ({
        id: actual.spell_id,
        assignmentId: actual.id,
        value: actual.value,
      })),
    }));

    return NextResponse.json({
      characters,
      count: characters.length,
    });
  } catch (error) {
    console.error('[API] Error fetching characters:', error);
    return NextResponse.json(
      { error: 'Failed to fetch characters' },
      { status: 500 }
    );
  }
});
