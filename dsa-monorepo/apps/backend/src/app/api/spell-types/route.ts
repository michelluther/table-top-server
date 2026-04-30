/**
 * Spell Types API Route
 *
 * GET /api/spell-types - Returns list of all spell types
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

export const GET = withAuth(async (request: NextRequest) => {
  try {
    const spellTypes = await prisma.dsa_starter_spelltype.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json(spellTypes);
  } catch (error) {
    console.error('[API] Error fetching spell types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch spell types' },
      { status: 500 }
    );
  }
});
