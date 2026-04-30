/**
 * Skills API Route
 *
 * GET /api/skills - Returns list of all skills with their types
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get all skills
 *
 * Requires authentication.
 * Returns all skills with their skill type information.
 */
export const GET = withAuth(async (request: NextRequest) => {
  try {
    const skills = await prisma.dsa_starter_skill.findMany({
      include: {
        dsa_starter_skilltype: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    const response = skills.map(({ type_id, ...rest }) => ({
      ...rest,
      type_id,
      type: type_id,
    }));

    return NextResponse.json(response);
  } catch (error) {
    console.error('[API] Error fetching skills:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
});
