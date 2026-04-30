/**
 * Hero Types API Route
 *
 * GET /api/hero-types - Returns list of all hero types
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

/**
 * Get all hero types
 *
 * Requires authentication.
 * Returns all hero/character types (e.g., Warrior, Mage, etc.)
 */
export const GET = withAuth(async (request: NextRequest) => {
  try {
    const heroTypes = await prisma.dsa_starter_herotype.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json(heroTypes);
  } catch (error) {
    console.error('[API] Error fetching hero types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hero types' },
      { status: 500 }
    );
  }
});
