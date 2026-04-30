/**
 * Database configuration
 *
 * Separate file to avoid Turbopack bundling issues
 */

// Export as a function to avoid constant inlining by bundlers
export function getDatabaseUrl(): string {
  // Use process.env to prevent bundler optimization
  const url = process.env.DATABASE_URL || 'file:/Users/michaelluther/pythonWorkspace/table-top-server/dsa_cockpit.sqlite3';

  // Log for debugging bundler issues
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log('[database-config] getDatabaseUrl called');
    console.log('[database-config] DATABASE_URL from env:', process.env.DATABASE_URL);
    console.log('[database-config] Returning URL:', url);
  }

  return url;
}

// Also export as const for backwards compatibility
export const DATABASE_URL = getDatabaseUrl();
