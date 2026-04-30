/**
 * Adventure Detail API Route
 *
 * GET /api/adventures/[id] - Returns detailed information about a specific adventure
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get adventure by ID
 *
 * Requires authentication.
 * Returns detailed information about a specific adventure including characters, fights, images, and locations.
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

      const adventure = await prisma.dsa_starter_adventure.findUnique({
        where: {
          id: adventureId,
        },
        include: {
          dsa_starter_adventurecharacter: {
            include: {
              dsa_starter_character: {
                select: {
                  id: true,
                  name: true,
                  avatar_small: true,
                  life: true,
                  life_lost: true,
                  magic_energy: true,
                  magic_energy_lost: true,
                },
              },
              dsa_starter_nonplayercharacter: {
                select: {
                  id: true,
                  name: true,
                  avatar_small: true,
                  life: true,
                  magic_energy: true,
                  attack: true,
                  parade: true,
                  ruestung: true,
                },
              },
            },
            orderBy: {
              sequenceInAdventure: 'asc',
            },
          },
          dsa_starter_fight: {
            include: {
              dsa_starter_fightparticipation: {
                include: {
                  dsa_starter_character: {
                    select: {
                      id: true,
                      name: true,
                      avatar_small: true,
                    },
                  },
                  dsa_starter_nonplayercharacter: {
                    select: {
                      id: true,
                      name: true,
                      avatar_small: true,
                    },
                  },
                },
              },
            },
          },
          dsa_starter_adventureimage: {
            orderBy: {
              sequenceInAdventure: 'asc',
            },
          },
          dsa_starter_adventurelocation: true,
        },
      });

      if (!adventure) {
        return NextResponse.json(
          { error: 'Adventure not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ adventure });
    } catch (error) {
      console.error('[API] Error fetching adventure:', error);
      return NextResponse.json(
        { error: 'Failed to fetch adventure' },
        { status: 500 }
      );
    }
  }
);
