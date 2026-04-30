/**
 * NextAuth.js configuration
 *
 * This configuration integrates NextAuth.js with the existing Django auth_user table.
 * It uses a custom Credentials provider to authenticate users against Django password hashes.
 */

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { verifyDjangoPassword } from './django-password';

// Create a dedicated Prisma client for auth
function createAuthPrismaClient() {
  console.log('[Auth] Creating Prisma client for authentication');

  // Get database path from environment or use fallback
  const dbPath = process.env.DATABASE_URL?.replace('file:', '') ||
                 '/Users/michaelluther/pythonWorkspace/table-top-server/dsa_cockpit.sqlite3';

  console.log('[Auth] Database path:', dbPath);

  // Create better-sqlite3 adapter
  const adapter = new PrismaBetterSqlite3({url: `file:${dbPath}`});

  return new PrismaClient({
    adapter: adapter as any,
    log: ['error', 'warn'],
  });
}

/**
 * NextAuth configuration options
 */
export const authConfig: NextAuthConfig = {
  // No adapter needed for JWT sessions (stateless)
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        // Create fresh Prisma client for this auth request
        const authPrisma = createAuthPrismaClient();

        try {
          // Find user by username
          const user = await authPrisma.auth_user.findUnique({
            where: {
              username: credentials.username as string,
            },
          });

        if (!user) {
          return null;
        }

        // Verify password against Django hash
        const isValid = await verifyDjangoPassword(
          credentials.password as string,
          user.password
        );

        if (!isValid) {
          return null;
        }

        // Check if user is active
        if (!user.is_active) {
          return null;
        }

          // Update last_login
          await authPrisma.auth_user.update({
            where: { id: user.id },
            data: { last_login: new Date() },
          });

          // Return user object in NextAuth format
          return {
            id: user.id.toString(),
            name: `${user.first_name} ${user.last_name}`.trim() || user.username,
            email: user.email,
            username: user.username,
            isStaff: user.is_staff,
            isSuperuser: user.is_superuser,
          };
        } finally {
          // Clean up Prisma client connection
          await authPrisma.$disconnect();
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add custom fields to JWT token
      if (user) {
        token.username = (user as any).username;
        token.isStaff = (user as any).isStaff;
        token.isSuperuser = (user as any).isSuperuser;
      }
      return token;
    },
    async session({ session, token }) {
      // Add custom fields to session
      if (session.user) {
        (session.user as any).id = token.sub;
        (session.user as any).username = token.username;
        (session.user as any).isStaff = token.isStaff;
        (session.user as any).isSuperuser = token.isSuperuser;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
