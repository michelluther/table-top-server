/**
 * Skill Types API Route
 *
 * GET /api/skill-types - Returns list of all skill types with their skill groups
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get all skill types
 *
 * Requires authentication.
 * Returns all skill types with their skill group information.
 */
export const GET = withAuth(async (request: NextRequest) => {
  try {
    const skillTypes = await prisma.dsa_starter_skilltype.findMany({
      include: {
        dsa_starter_skillgroup: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    const response = skillTypes.map(({ dsa_starter_skillgroup, ...rest }) => ({
      ...rest,
      skill_group: dsa_starter_skillgroup,
    }));

    return NextResponse.json(response);
  } catch (error) {
    console.error('[API] Error fetching skill types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skill types' },
      { status: 500 }
    );
  }
});
