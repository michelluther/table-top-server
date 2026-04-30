/**
 * Weapons API Route
 *
 * GET /api/weapons - Returns list of all weapons with their associated skills
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get all weapons
 *
 * Requires authentication.
 * Returns all weapons with their damage stats and associated skill.
 */
export const GET = withAuth(async (request: NextRequest) => {
  try {
    const weapons = await prisma.dsa_starter_weapon.findMany({
      include: {
        dsa_starter_skill: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json(weapons);
  } catch (error) {
    console.error('[API] Error fetching weapons:', error);
    return NextResponse.json(
      { error: 'Failed to fetch weapons' },
      { status: 500 }
    );
  }
});
