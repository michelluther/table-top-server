/**
 * Spells API Route
 *
 * GET /api/spells - Returns list of all spells with their types and complexity
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get all spells
 *
 * Requires authentication.
 * Returns all spells with their spell type and complexity information.
 */
export const GET = withAuth(async (request: NextRequest) => {
  try {
    const spells = await prisma.dsa_starter_spell.findMany({
      include: {
        dsa_starter_spelltype: true,
        dsa_starter_skillgroup: true, // complexity
      },
      orderBy: {
        name: 'asc',
      },
    });

    const response = spells.map(({ type_id, complexity_id, dsa_starter_spelltype, dsa_starter_skillgroup, ...rest }) => ({
      ...rest,
      type: type_id,
      complexity: dsa_starter_skillgroup?.name,
    }));

    return NextResponse.json(response);
  } catch (error) {
    console.error('[API] Error fetching spells:', error);
    return NextResponse.json(
      { error: 'Failed to fetch spells' },
      { status: 500 }
    );
  }
});
