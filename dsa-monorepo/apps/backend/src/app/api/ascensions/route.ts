/**
 * Ascensions API Route
 *
 * GET /api/ascensions - Returns ascension pricing rows ordered by level.
 *
 * The frontend (AscensionPricing constructor) uses the array index as
 * levelFrom, so callers must receive the rows in ascending level order.
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { prisma } from '@/lib/prisma';

export const GET = withAuth(async (request: NextRequest) => {
  try {
    const ascensions = await prisma.dsa_starter_ascensions.findMany({
      orderBy: { level: 'asc' },
    });

    return NextResponse.json(ascensions);
  } catch (error) {
    console.error('[API] Error fetching ascensions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch ascensions' },
      { status: 500 }
    );
  }
});
