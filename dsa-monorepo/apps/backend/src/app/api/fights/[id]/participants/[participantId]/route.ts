/**
 * Fight Participant Detail API Route
 *
 * PATCH /api/fights/[id]/participants/[participantId] - Update participant
 * DELETE /api/fights/[id]/participants/[participantId] - Remove participant
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Update fight participant
 *
 * Requires authentication.
 * Updates participant properties (initiative, position, side).
 */
export const PATCH = withAuth(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string; participantId: string }> }
  ) => {
    try {
      const { id, participantId } = await params;
      const fightId = parseInt(id);
      const participationId = parseInt(participantId);

      if (isNaN(fightId) || isNaN(participationId)) {
        return NextResponse.json(
          { error: 'Invalid fight ID or participant ID' },
          { status: 400 }
        );
      }

      const body = await request.json();
      const { calculatedInitiative, isGood, position } = body;

      // Check if participant exists and belongs to this fight
      const existingParticipant =
        await prisma.dsa_starter_fightparticipation.findFirst({
          where: {
            id: participationId,
            fight_id: fightId,
          },
        });

      if (!existingParticipant) {
        return NextResponse.json(
          { error: 'Participant not found in this fight' },
          { status: 404 }
        );
      }

      // Build update data
      const updateData: any = {};
      if (calculatedInitiative !== undefined && typeof calculatedInitiative === 'number') {
        updateData.calculatedInitiative = calculatedInitiative;
      }
      if (isGood !== undefined && typeof isGood === 'boolean') {
        updateData.isGood = isGood;
      }
      if (position !== undefined && typeof position === 'string') {
        updateData.position = position;
      }

      if (Object.keys(updateData).length === 0) {
        return NextResponse.json(
          { error: 'No valid fields to update' },
          { status: 400 }
        );
      }

      const updatedParticipant = await prisma.dsa_starter_fightparticipation.update({
        where: { id: participationId },
        data: updateData,
        include: {
          dsa_starter_character: {
            select: {
              id: true,
              name: true,
              life: true,
              life_lost: true,
            },
          },
          dsa_starter_nonplayercharacter: {
            select: {
              id: true,
              name: true,
              life: true,
            },
          },
        },
      });

      return NextResponse.json({ participant: updatedParticipant });
    } catch (error) {
      console.error('[API] Error updating participant:', error);
      return NextResponse.json(
        { error: 'Failed to update participant' },
        { status: 500 }
      );
    }
  }
);

/**
 * Remove participant from fight
 *
 * Requires authentication.
 * Removes a participant from the fight.
 */
export const DELETE = withAuth(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string; participantId: string }> }
  ) => {
    try {
      const { id, participantId } = await params;
      const fightId = parseInt(id);
      const participationId = parseInt(participantId);

      if (isNaN(fightId) || isNaN(participationId)) {
        return NextResponse.json(
          { error: 'Invalid fight ID or participant ID' },
          { status: 400 }
        );
      }

      // Check if participant exists and belongs to this fight
      const existingParticipant =
        await prisma.dsa_starter_fightparticipation.findFirst({
          where: {
            id: participationId,
            fight_id: fightId,
          },
        });

      if (!existingParticipant) {
        return NextResponse.json(
          { error: 'Participant not found in this fight' },
          { status: 404 }
        );
      }

      await prisma.dsa_starter_fightparticipation.delete({
        where: { id: participationId },
      });

      return NextResponse.json({ message: 'Participant removed successfully' });
    } catch (error) {
      console.error('[API] Error removing participant:', error);
      return NextResponse.json(
        { error: 'Failed to remove participant' },
        { status: 500 }
      );
    }
  }
);
