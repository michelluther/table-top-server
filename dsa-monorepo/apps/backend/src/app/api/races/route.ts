/**
 * Races API Route
 *
 * GET /api/races - Returns list of all races
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get all races
 *
 * Requires authentication.
 * Returns all character races.
 */
export const GET = withAuth(async (request: NextRequest) => {
  try {
    const races = await prisma.dsa_starter_race.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json(races);
  } catch (error) {
    console.error('[API] Error fetching races:', error);
    return NextResponse.json(
      { error: 'Failed to fetch races' },
      { status: 500 }
    );
  }
});
