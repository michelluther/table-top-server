/**
 * Character Armor Assignment Detail API Route
 *
 * DELETE /api/characters/[id]/armor/[assignmentId] - Removes armor from character
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Remove armor from character
 *
 * Requires authentication.
 * Deletes the armor assignment.
 */
export const DELETE = withAuth(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string; assignmentId: string }> }
  ) => {
    try {
      const { id, assignmentId } = await params;
      const characterId = parseInt(id);
      const armorAssignmentId = parseInt(assignmentId);

      if (isNaN(characterId) || isNaN(armorAssignmentId)) {
        return NextResponse.json(
          { error: 'Invalid character ID or assignment ID' },
          { status: 400 }
        );
      }

      // Check if assignment exists and belongs to this character
      const existingAssignment = await prisma.dsa_starter_characterhasarmor.findFirst({
        where: {
          id: armorAssignmentId,
          character_id: characterId,
        },
      });

      if (!existingAssignment) {
        return NextResponse.json(
          { error: 'Armor assignment not found for this character' },
          { status: 404 }
        );
      }

      await prisma.dsa_starter_characterhasarmor.delete({
        where: { id: armorAssignmentId },
      });

      return NextResponse.json({ message: 'Armor removed successfully' });
    } catch (error) {
      console.error('[API] Error removing armor:', error);
      return NextResponse.json(
        { error: 'Failed to remove armor' },
        { status: 500 }
      );
    }
  }
);
