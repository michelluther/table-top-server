/**
 * Adventures API Route
 *
 * GET /api/adventures - Returns list of all adventures
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get all adventures
 *
 * Requires authentication.
 * Returns a list of all adventures
 */
export const GET = withAuth(async (request: NextRequest) => {
  try {
    const adventures = await prisma.dsa_starter_adventure.findMany({
      select: {
        id: true,
        name: true,
        isActive: true,
        _count: {
          select: {
            dsa_starter_adventurecharacter: true,
            dsa_starter_fight: true,
            dsa_starter_adventureimage: true,
            dsa_starter_adventurelocation: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json({
      adventures,
      count: adventures.length,
    });
  } catch (error) {
    console.error('[API] Error fetching adventures:', error);
    return NextResponse.json(
      { error: 'Failed to fetch adventures' },
      { status: 500 }
    );
  }
});
