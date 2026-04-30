import { PrismaClient } from '../generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

/**
 * Prisma Client singleton instance with better-sqlite3 adapter
 *
 * This follows best practices for Next.js to avoid multiple instances
 * in development due to hot reloading.
 *
 * @see https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
 */

// Global storage for Prisma client instance
const globalForPrisma = globalThis as unknown as {
  prismaClient: PrismaClient | undefined;
  initCount: number;
};

// Initialize counter
if (typeof globalForPrisma.initCount === 'undefined') {
  globalForPrisma.initCount = 0;
}

// Function to initialize and return Prisma client
function initializePrisma(): PrismaClient {
  if (globalForPrisma.prismaClient) {
    console.log('[Prisma] Returning cached Prisma client');
    return globalForPrisma.prismaClient;
  }

  globalForPrisma.initCount++;
  console.log(`[Prisma] Initializing Prisma client (attempt #${globalForPrisma.initCount})`);

  // Get database path from environment or use fallback
  const dbPath = process.env.DATABASE_URL?.replace('file:', '') ||
                 '/Users/michaelluther/pythonWorkspace/table-top-server/dsa_cockpit.sqlite3';

  console.log('[Prisma] Database path:', dbPath);

  // Create better-sqlite3 adapter
  const adapter = new PrismaBetterSqlite3({url: `file:${dbPath}`});

  globalForPrisma.prismaClient = new PrismaClient({
    adapter: adapter as any,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

  console.log('[Prisma] Prisma client initialized successfully');

  return globalForPrisma.prismaClient;
}

// Create a proxy that initializes on first access
const prismaProxy = new Proxy({} as PrismaClient, {
  get(target, prop, receiver) {
    const client = initializePrisma();
    const value = Reflect.get(client, prop, client);
    return typeof value === 'function' ? value.bind(client) : value;
  },
});

export const prisma = prismaProxy;
export default prismaProxy;
