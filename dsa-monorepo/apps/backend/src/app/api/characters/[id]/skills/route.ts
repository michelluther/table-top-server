/**
 * Character Skills API Route
 *
 * GET /api/characters/[id]/skills - Returns a character's skills with values
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get character's skills
 *
 * Requires authentication.
 * Returns all skills for a specific character with their skill values.
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

      // Get character's skills with full skill information
      const skills = await prisma.dsa_starter_actualskill.findMany({
        where: {
          character_id: characterId,
        },
        include: {
          dsa_starter_skill: {
            include: {
              dsa_starter_skilltype: true,
            },
          },
        },
        orderBy: {
          dsa_starter_skill: {
            name: 'asc',
          },
        },
      });

      return NextResponse.json(skills);
    } catch (error) {
      console.error('[API] Error fetching character skills:', error);
      return NextResponse.json(
        { error: 'Failed to fetch character skills' },
        { status: 500 }
      );
    }
  }
);
