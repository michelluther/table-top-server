/**
 * Character Weapon Assignment Detail API Route
 *
 * DELETE /api/characters/[id]/weapons/[assignmentId] - Removes weapon from character
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Remove weapon from character
 *
 * Requires authentication.
 * Deletes the weapon assignment.
 */
export const DELETE = withAuth(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string; assignmentId: string }> }
  ) => {
    try {
      const { id, assignmentId } = await params;
      const characterId = parseInt(id);
      const weaponAssignmentId = parseInt(assignmentId);

      if (isNaN(characterId) || isNaN(weaponAssignmentId)) {
        return NextResponse.json(
          { error: 'Invalid character ID or assignment ID' },
          { status: 400 }
        );
      }

      // Check if assignment exists and belongs to this character
      const existingAssignment = await prisma.dsa_starter_characterhasweapon.findFirst({
        where: {
          id: weaponAssignmentId,
          character_id: characterId,
        },
      });

      if (!existingAssignment) {
        return NextResponse.json(
          { error: 'Weapon assignment not found for this character' },
          { status: 404 }
        );
      }

      await prisma.dsa_starter_characterhasweapon.delete({
        where: { id: weaponAssignmentId },
      });

      return NextResponse.json({ message: 'Weapon removed successfully' });
    } catch (error) {
      console.error('[API] Error removing weapon:', error);
      return NextResponse.json(
        { error: 'Failed to remove weapon' },
        { status: 500 }
      );
    }
  }
);
