/**
 * Character Skill Update API Route
 *
 * PATCH /api/characters/[id]/skills/[skillId] - Updates a character's skill value
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Update character skill value
 *
 * Requires authentication.
 * Updates the value of a specific skill for a character.
 */
export const PATCH = withAuth(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string; skillId: string }> }
  ) => {
    try {
      const { id, skillId } = await params;
      const characterId = parseInt(id);
      const actualSkillId = parseInt(skillId);

      if (isNaN(characterId) || isNaN(actualSkillId)) {
        return NextResponse.json(
          { error: 'Invalid character ID or skill ID' },
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

      // Check if the skill belongs to the character
      const existingSkill = await prisma.dsa_starter_actualskill.findFirst({
        where: {
          id: actualSkillId,
          character_id: characterId,
        },
      });

      if (!existingSkill) {
        return NextResponse.json(
          { error: 'Skill not found for this character' },
          { status: 404 }
        );
      }

      // Update the skill value
      const updatedSkill = await prisma.dsa_starter_actualskill.update({
        where: { id: actualSkillId },
        data: { value },
        include: {
          dsa_starter_skill: {
            include: {
              dsa_starter_skilltype: true,
            },
          },
        },
      });

      return NextResponse.json({ skill: updatedSkill });
    } catch (error) {
      console.error('[API] Error updating character skill:', error);
      return NextResponse.json(
        { error: 'Failed to update skill' },
        { status: 500 }
      );
    }
  }
);
