/**
 * Character Spell Update API Route
 *
 * PATCH /api/characters/[id]/spells/[spellId] - Updates a character's spell value
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Update character spell value
 *
 * Requires authentication.
 * Updates the value of a specific spell for a character.
 */
export const PATCH = withAuth(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string; spellId: string }> }
  ) => {
    try {
      const { id, spellId } = await params;
      const characterId = parseInt(id);
      const actualSpellId = parseInt(spellId);

      if (isNaN(characterId) || isNaN(actualSpellId)) {
        return NextResponse.json(
          { error: 'Invalid character ID or spell ID' },
          { status: 400 }
        );
      }

      const body = await request.json();
      const { value } = body;

      if (value === undefined || typeof value !== 'number') {
        return NextResponse.json(
          { error: 'Value must be a number' },
          { status: 400 }
        );
      }

      // Check if the spell belongs to the character
      const existingSpell = await prisma.dsa_starter_actualspellskill.findFirst({
        where: {
          id: actualSpellId,
          character_id: characterId,
        },
      });

      if (!existingSpell) {
        return NextResponse.json(
          { error: 'Spell not found for this character' },
          { status: 404 }
        );
      }

      // Update the spell value
      const updatedSpell = await prisma.dsa_starter_actualspellskill.update({
        where: { id: actualSpellId },
        data: { value },
        include: {
          dsa_starter_spell: {
            include: {
              dsa_starter_spelltype: true,
              dsa_starter_skillgroup: true, // complexity
            },
          },
        },
      });

      return NextResponse.json({ spell: updatedSpell });
    } catch (error) {
      console.error('[API] Error updating character spell:', error);
      return NextResponse.json(
        { error: 'Failed to update spell' },
        { status: 500 }
      );
    }
  }
);
