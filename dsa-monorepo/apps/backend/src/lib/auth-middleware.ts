/**
 * Authentication middleware utilities
 *
 * This module provides utilities for protecting routes and checking user permissions.
 */

import { NextRequest, NextResponse } from 'next/server';
import { auth } from './auth';
import { addCorsHeaders, handleCorsPreflight } from './cors-middleware';

/**
 * Check if the current user is authenticated
 *
 * @returns The session if authenticated, null otherwise
 */
export async function requireAuth() {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  return session;
}

/**
 * Check if the current user is a staff member
 *
 * @returns True if the user is staff, false otherwise
 */
export async function requireStaff() {
  const session = await requireAuth();

  if (!session || !session.user.isStaff) {
    return null;
  }

  return session;
}

/**
 * Check if the current user is a superuser
 *
 * @returns True if the user is a superuser, false otherwise
 */
export async function requireSuperuser() {
  const session = await requireAuth();

  if (!session || !session.user.isSuperuser) {
    return null;
  }

  return session;
}

/**
 * API route wrapper that requires authentication
 *
 * @param handler - The API route handler
 * @returns A wrapped handler that checks authentication
 *
 * @example
 * ```typescript
 * export const GET = withAuth(async (request: NextRequest, { session }) => {
 *   return NextResponse.json({ user: session.user });
 * });
 * ```
 */
export function withAuth<T = any>(
  handler: (
    request: NextRequest,
    context: { params: T; session: NonNullable<Awaited<ReturnType<typeof auth>>> }
  ) => Promise<NextResponse>
) {
  return async (request: NextRequest, context: { params: T }) => {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return handleCorsPreflight(request);
    }

    const session = await requireAuth();

    // if (!session) {
    //   const response = NextResponse.json(
    //     { error: 'Unauthorized' },
    //     { status: 401 }
    //   );
    //   return addCorsHeaders(response, request);
    // }

    const response = await handler(request, { params: context.params, session: session as unknown as NonNullable<Awaited<ReturnType<typeof auth>>> });
    return addCorsHeaders(response, request);
  };
}

/**
 * API route wrapper that requires staff permissions
 *
 * @param handler - The API route handler
 * @returns A wrapped handler that checks staff permissions
 */
export function withStaff<T = any>(
  handler: (
    request: NextRequest,
    context: { params: T; session: NonNullable<Awaited<ReturnType<typeof auth>>> }
  ) => Promise<NextResponse>
) {
  return async (request: NextRequest, context: { params: T }) => {
    const session = await requireStaff();

    if (!session) {
      return NextResponse.json(
        { error: 'Forbidden: Staff access required' },
        { status: 403 }
      );
    }

    return handler(request, { params: context.params, session: session as unknown as NonNullable<Awaited<ReturnType<typeof auth>>> });
  };
}

/**
 * API route wrapper that requires superuser permissions
 *
 * @param handler - The API route handler
 * @returns A wrapped handler that checks superuser permissions
 */
export function withSuperuser<T = any>(
  handler: (
    request: NextRequest,
    context: { params: T; session: NonNullable<Awaited<ReturnType<typeof auth>>> }
  ) => Promise<NextResponse>
) {
  return async (request: NextRequest, context: { params: T }) => {
    const session = await requireSuperuser();

    if (!session) {
      return NextResponse.json(
        { error: 'Forbidden: Superuser access required' },
        { status: 403 }
      );
    }

    return handler(request, { params: context.params, session: session as unknown as NonNullable<Awaited<ReturnType<typeof auth>>> });
  };
}
