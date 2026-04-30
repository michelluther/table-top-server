/**
 * Fight Detail API Route
 *
 * GET /api/fights/[id] - Returns fight details with participants
 * PATCH /api/fights/[id] - Updates fight (mainly for turn tracking)
 * DELETE /api/fights/[id] - Deletes a fight
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get fight by ID
 *
 * Requires authentication.
 * Returns fight with all participants ordered by initiative.
 */
export const GET = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const { id } = await params;
      const fightId = parseInt(id);

      if (isNaN(fightId)) {
        return NextResponse.json(
          { error: 'Invalid fight ID' },
          { status: 400 }
        );
      }

      const fight = await prisma.dsa_starter_fight.findUnique({
        where: { id: fightId },
        include: {
          dsa_starter_adventure: {
            select: {
              id: true,
              name: true,
            },
          },
          dsa_starter_fightparticipation: {
            include: {
              dsa_starter_character: {
                select: {
                  id: true,
                  name: true,
                  life: true,
                  life_lost: true,
                  MU: true,
                  KL: true,
                  IN: true,
                  CH: true,
                  FF: true,
                  GE: true,
                  KO: true,
                  KK: true,
                },
              },
              dsa_starter_nonplayercharacter: {
                select: {
                  id: true,
                  name: true,
                  life: true,
                  initiative: true,
                  attack: true,
                  parade: true,
                  ruestung: true,
                  weapon_1_name: true,
                  weapon_1_damage: true,
                  weapon_2_name: true,
                  weapon_2_damage: true,
                },
              },
            },
            orderBy: {
              calculatedInitiative: 'desc',
            },
          },
        },
      });

      if (!fight) {
        return NextResponse.json(
          { error: 'Fight not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ fight });
    } catch (error) {
      console.error('[API] Error fetching fight:', error);
      return NextResponse.json(
        { error: 'Failed to fetch fight' },
        { status: 500 }
      );
    }
  }
);

/**
 * Update fight
 *
 * Requires authentication.
 * Updates fight properties (mainly nextUp for turn tracking).
 */
export const PATCH = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const { id } = await params;
      const fightId = parseInt(id);

      if (isNaN(fightId)) {
        return NextResponse.json(
          { error: 'Invalid fight ID' },
          { status: 400 }
        );
      }

      const body = await request.json();
      const { name, nextUp } = body;

      // Check if fight exists
      const existingFight = await prisma.dsa_starter_fight.findUnique({
        where: { id: fightId },
      });

      if (!existingFight) {
        return NextResponse.json(
          { error: 'Fight not found' },
          { status: 404 }
        );
      }

      // Build update data
      const updateData: any = {};
      if (name !== undefined) updateData.name = name;
      if (nextUp !== undefined && typeof nextUp === 'number') {
        updateData.nextUp = nextUp;
      }

      if (Object.keys(updateData).length === 0) {
        return NextResponse.json(
          { error: 'No valid fields to update' },
          { status: 400 }
        );
      }

      const updatedFight = await prisma.dsa_starter_fight.update({
        where: { id: fightId },
        data: updateData,
        include: {
          dsa_starter_fightparticipation: {
            include: {
              dsa_starter_character: {
                select: {
                  id: true,
                  name: true,
                },
              },
              dsa_starter_nonplayercharacter: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
            orderBy: {
              calculatedInitiative: 'desc',
            },
          },
        },
      });

      return NextResponse.json({ fight: updatedFight });
    } catch (error) {
      console.error('[API] Error updating fight:', error);
      return NextResponse.json(
        { error: 'Failed to update fight' },
        { status: 500 }
      );
    }
  }
);

/**
 * Delete fight
 *
 * Requires authentication.
 * Deletes the fight and all its participants.
 */
export const DELETE = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const { id } = await params;
      const fightId = parseInt(id);

      if (isNaN(fightId)) {
        return NextResponse.json(
          { error: 'Invalid fight ID' },
          { status: 400 }
        );
      }

      // Check if fight exists
      const existingFight = await prisma.dsa_starter_fight.findUnique({
        where: { id: fightId },
      });

      if (!existingFight) {
        return NextResponse.json(
          { error: 'Fight not found' },
          { status: 404 }
        );
      }

      // Delete fight (participants should cascade delete based on schema)
      await prisma.dsa_starter_fight.delete({
        where: { id: fightId },
      });

      return NextResponse.json({ message: 'Fight deleted successfully' });
    } catch (error) {
      console.error('[API] Error deleting fight:', error);
      return NextResponse.json(
        { error: 'Failed to delete fight' },
        { status: 500 }
      );
    }
  }
);
