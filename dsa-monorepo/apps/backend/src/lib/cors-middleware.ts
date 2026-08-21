/**
 * CORS Middleware for Next.js API Routes
 *
 * This module provides CORS (Cross-Origin Resource Sharing) headers
 * for API routes to allow cross-origin requests from the frontend.
 */

import { NextRequest, NextResponse } from 'next/server';
import { isAllowedOrigin, defaultOrigin } from './cors-origin';

/**
 * CORS configuration
 */
const CORS_CONFIG = {
  allowedMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  maxAge: 86400, // 24 hours
};

/**
 * Add CORS headers to a response
 *
 * @param response - The NextResponse object
 * @param request - The NextRequest object (optional, for origin checking)
 * @returns The response with CORS headers added
 */
export function addCorsHeaders(response: NextResponse, request?: NextRequest): NextResponse {
  const origin = request?.headers.get('origin');

  // Check if origin is allowed
  const allowOrigin = isAllowedOrigin(origin) ? origin! : defaultOrigin;

  response.headers.set('Access-Control-Allow-Origin', allowOrigin);
  response.headers.set('Access-Control-Allow-Methods', CORS_CONFIG.allowedMethods.join(', '));
  response.headers.set('Access-Control-Allow-Headers', CORS_CONFIG.allowedHeaders.join(', '));
  response.headers.set('Access-Control-Max-Age', CORS_CONFIG.maxAge.toString());

  if (CORS_CONFIG.credentials) {
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }

  return response;
}

/**
 * Handle CORS preflight (OPTIONS) requests
 *
 * @param request - The NextRequest object
 * @returns A NextResponse with CORS headers for preflight
 */
export function handleCorsPreflight(request: NextRequest): NextResponse {
  const response = new NextResponse(null, { status: 204 });
  return addCorsHeaders(response, request);
}

/**
 * Higher-order function to wrap API route handlers with CORS support
 *
 * @param handler - The API route handler function
 * @returns A wrapped handler with CORS support
 *
 * @example
 * ```typescript
 * export const GET = withCors(async (request: NextRequest) => {
 *   return NextResponse.json({ data: 'Hello World' });
 * });
 *
 * // Handle OPTIONS for preflight
 * export const OPTIONS = handleCorsPreflightRequest;
 * ```
 */
export function withCors<T = any>(
  handler: (request: NextRequest, context?: { params?: T }) => Promise<NextResponse>
) {
  return async (request: NextRequest, context?: { params?: T }): Promise<NextResponse> => {
    // Handle OPTIONS preflight request
    if (request.method === 'OPTIONS') {
      return handleCorsPreflight(request);
    }

    // Execute the actual handler
    const response = await handler(request, context);

    // Add CORS headers to the response
    return addCorsHeaders(response, request);
  };
}

/**
 * Standalone OPTIONS handler for CORS preflight requests
 * Export this as the OPTIONS handler in your API routes
 */
export async function handleCorsPreflightRequest(request: NextRequest): Promise<NextResponse> {
  return handleCorsPreflight(request);
}
