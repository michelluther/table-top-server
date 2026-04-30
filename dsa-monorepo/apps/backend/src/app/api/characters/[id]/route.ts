/**
 * Character Detail API Route
 *
 * GET /api/characters/[id] - Returns detailed information about a specific character
 * PATCH /api/characters/[id] - Updates a character
 * DELETE /api/characters/[id] - Deletes a character
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get character by ID
 *
 * Requires authentication.
 * Returns detailed information about a specific character including skills, spells, equipment, etc.
 */
export const GET = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const { id } = await params;
      const characterId = parseInt(id);

      if (isNaN(characterId)) {
        return NextResponse.json(
          { error: 'Invalid character ID' },
          { status: 400 }
        );
      }

      const character = await prisma.dsa_starter_character.findUnique({
        where: {
          id: characterId,
        },
        include: {
          dsa_starter_race: true,
          dsa_starter_herotype: true,
          dsa_starter_actualskill: {
            include: {
              dsa_starter_skill: {
                include: {
                  dsa_starter_skilltype: {
                    include: {
                      dsa_starter_skillgroup: true,
                    },
                  },
                },
              },
            },
          },
          dsa_starter_actualspellskill: {
            include: {
              dsa_starter_spell: {
                include: {
                  dsa_starter_spelltype: true,
                },
              },
            },
          },
          dsa_starter_weaponskilldistribution: {
            include: {
              dsa_starter_skill: true,
            },
          },
          dsa_starter_characterhasweapon: {
            include: {
              dsa_starter_weapon: {
                include: {
                  dsa_starter_skill: true,
                },
              },
            },
          },
          dsa_starter_characterhasarmor: {
            include: {
              dsa_starter_armor: true,
            },
          },
          dsa_starter_inventoryitem: true,
        },
      });

      if (!character) {
        return NextResponse.json(
          { error: 'Character not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ character });
    } catch (error) {
      console.error('[API] Error fetching character:', error);
      return NextResponse.json(
        { error: 'Failed to fetch character' },
        { status: 500 }
      );
    }
  }
);

/**
 * Update character
 *
 * Requires authentication.
 * Updates character fields. Only provided fields will be updated.
 */
export const PATCH = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const { id } = await params;
      const characterId = parseInt(id);

      if (isNaN(characterId)) {
        return NextResponse.json(
          { error: 'Invalid character ID' },
          { status: 400 }
        );
      }

      const body = await request.json();

      // Check if character exists
      const existingCharacter = await prisma.dsa_starter_character.findUnique({
        where: { id: characterId },
      });

      if (!existingCharacter) {
        return NextResponse.json(
          { error: 'Character not found' },
          { status: 404 }
        );
      }

      // Define allowed update fields
      const allowedFields = [
        'name',
        'type_id',
        'race_id',
        'experience',
        'life',
        'culture',
        'gender',
        'size',
        'social_rank',
        'experience_used',
        'life_lost',
        'avatar',
        'avatar_small',
        'magic_energy',
        'magic_energy_lost',
        'armor',
        'money_dukaten',
        'money_heller',
        'money_kreuzer',
        'money_silbertaler',
        'CH',
        'FF',
        'GE',
        'IN',
        'KL',
        'KK',
        'KO',
        'MU',
      ];

      // Filter body to only include allowed fields
      const updateData: any = {};
      for (const field of allowedFields) {
        if (body[field] !== undefined) {
          updateData[field] = body[field];
        }
      }

      if (Object.keys(updateData).length === 0) {
        return NextResponse.json(
          { error: 'No valid fields to update' },
          { status: 400 }
        );
      }

      const updatedCharacter = await prisma.dsa_starter_character.update({
        where: { id: characterId },
        data: updateData,
        include: {
          dsa_starter_race: true,
          dsa_starter_herotype: true,
        },
      });

      return NextResponse.json({ character: updatedCharacter });
    } catch (error) {
      console.error('[API] Error updating character:', error);
      return NextResponse.json(
        { error: 'Failed to update character' },
        { status: 500 }
      );
    }
  }
);

/**
 * Delete character
 *
 * Requires authentication.
 * Deletes a character and all related data (cascading delete handled by database).
 */
export const DELETE = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const { id } = await params;
      const characterId = parseInt(id);

      if (isNaN(characterId)) {
        return NextResponse.json(
          { error: 'Invalid character ID' },
          { status: 400 }
        );
      }

      // Check if character exists
      const existingCharacter = await prisma.dsa_starter_character.findUnique({
        where: { id: characterId },
      });

      if (!existingCharacter) {
        return NextResponse.json(
          { error: 'Character not found' },
          { status: 404 }
        );
      }

      // Delete character (related records will be handled based on schema)
      await prisma.dsa_starter_character.delete({
        where: { id: characterId },
      });

      return NextResponse.json({ message: 'Character deleted successfully' });
    } catch (error) {
      console.error('[API] Error deleting character:', error);
      return NextResponse.json(
        { error: 'Failed to delete character' },
        { status: 500 }
      );
    }
  }
);
