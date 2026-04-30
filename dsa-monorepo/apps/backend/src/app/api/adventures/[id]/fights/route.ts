/**
 * Adventure Fights API Route
 *
 * GET /api/adventures/[id]/fights - Returns all fights for an adventure
 * POST /api/adventures/[id]/fights - Creates a new fight for an adventure
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get all fights for an adventure
 *
 * Requires authentication.
 * Returns all fights with their participants.
 */
export const GET = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const { id } = await params;
      const adventureId = parseInt(id);

      if (isNaN(adventureId)) {
        return NextResponse.json(
          { error: 'Invalid adventure ID' },
          { status: 400 }
        );
      }

      const fights = await prisma.dsa_starter_fight.findMany({
        where: {
          adventure_id: adventureId,
        },
        include: {
          dsa_starter_fightparticipation: {
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
            orderBy: {
              calculatedInitiative: 'desc',
            },
          },
        },
        orderBy: {
          id: 'desc',
        },
      });

      return NextResponse.json({ fights });
    } catch (error) {
      console.error('[API] Error fetching fights:', error);
      return NextResponse.json(
        { error: 'Failed to fetch fights' },
        { status: 500 }
      );
    }
  }
);

/**
 * Create a new fight
 *
 * Requires authentication.
 * Creates a new fight for the adventure.
 */
export const POST = withAuth(
  async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
      const { id } = await params;
      const adventureId = parseInt(id);

      if (isNaN(adventureId)) {
        return NextResponse.json(
          { error: 'Invalid adventure ID' },
          { status: 400 }
        );
      }

      const body = await request.json();
      const { name } = body;

      if (!name || typeof name !== 'string') {
        return NextResponse.json(
          { error: 'Fight name is required' },
          { status: 400 }
        );
      }

      // Verify adventure exists
      const adventure = await prisma.dsa_starter_adventure.findUnique({
        where: { id: adventureId },
      });

      if (!adventure) {
        return NextResponse.json(
          { error: 'Adventure not found' },
          { status: 404 }
        );
      }

      // Create fight with nextUp initialized to 0
      const fight = await prisma.dsa_starter_fight.create({
        data: {
          name,
          adventure_id: adventureId,
          nextUp: 0,
        },
        include: {
          dsa_starter_fightparticipation: true,
        },
      });

      return NextResponse.json({ fight }, { status: 201 });
    } catch (error) {
      console.error('[API] Error creating fight:', error);
      return NextResponse.json(
        { error: 'Failed to create fight' },
        { status: 500 }
      );
    }
  }
);
