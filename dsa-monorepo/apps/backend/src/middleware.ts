import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAllowedOrigin, defaultOrigin } from './lib/cors-origin';

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin');
  const allowed = isAllowedOrigin(origin);

  // Handle preflight OPTIONS request
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': allowed ? origin! : defaultOrigin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  // Get the response
  const response = NextResponse.next();

  // Add CORS headers to the response
  if (allowed) {
    response.headers.set('Access-Control-Allow-Origin', origin!);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }

  return response;
}

// Configure which routes to run middleware on
export const config = {
  matcher: '/api/:path*',
};
