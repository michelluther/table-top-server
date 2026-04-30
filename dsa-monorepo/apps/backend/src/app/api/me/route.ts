/**
 * Current User API Route
 *
 * GET /api/me - Returns the currently authenticated user's information
 *
 * This is an example of a protected API route using NextAuth.js authentication.
 */

import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import type { Session } from 'next-auth';

/**
 * Get current user information
 *
 * Requires authentication.
 * Returns the authenticated user's profile.
 */
export const GET = withAuth(async (request: NextRequest, { session }) => {
  const user = (session as unknown as Session).user;

  return NextResponse.json({
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      isStaff: user.isStaff,
      isSuperuser: user.isSuperuser,
    },
  });
});
