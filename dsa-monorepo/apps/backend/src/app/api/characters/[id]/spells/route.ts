/**
 * Character Spells API Route
 *
 * GET /api/characters/[id]/spells - Returns a character's spells with values
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get character's spells
 *
 * Requires authentication.
 * Returns all spells for a specific character with their spell values.
 */
export const GET = withAuth(
  async (request: NextRequest, { params }: { params: { id: string } }) => {
    try {
      const characterId = parseInt(params.id);

      if (isNaN(characterId)) {
        return NextResponse.json(
          { error: 'Invalid character ID' },
          { status: 400 }
        );
      }

      // Verify character exists
      const character = await prisma.dsa_starter_character.findUnique({
        where: { id: characterId },
      });

      if (!character) {
        return NextResponse.json(
          { error: 'Character not found' },
          { status: 404 }
        );
      }

      // Get character's spells with full spell information
      const spells = await prisma.dsa_starter_actualspellskill.findMany({
        where: {
          character_id: characterId,
        },
        include: {
          dsa_starter_spell: {
            include: {
              dsa_starter_spelltype: true,
              dsa_starter_skillgroup: true, // complexity
            },
          },
        },
        orderBy: {
          dsa_starter_spell: {
            name: 'asc',
          },
        },
      });

      return NextResponse.json(spells);
    } catch (error) {
      console.error('[API] Error fetching character spells:', error);
      return NextResponse.json(
        { error: 'Failed to fetch character spells' },
        { status: 500 }
      );
    }
  }
);
