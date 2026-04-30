/**
 * Armor API Route
 *
 * GET /api/armor - Returns list of all armor
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get all armor
 *
 * Requires authentication.
 * Returns all armor with protection and encumbrance stats.
 */
export const GET = withAuth(async (request: NextRequest) => {
  try {
    const armor = await prisma.dsa_starter_armor.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json(armor);
  } catch (error) {
    console.error('[API] Error fetching armor:', error);
    return NextResponse.json(
      { error: 'Failed to fetch armor' },
      { status: 500 }
    );
  }
});
