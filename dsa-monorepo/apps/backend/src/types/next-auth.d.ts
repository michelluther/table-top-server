/**
 * NextAuth.js TypeScript type extensions
 *
 * This file extends the default NextAuth types to include our custom user fields.
 */

import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Extended User type with custom fields from Django auth_user
   */
  interface User {
    id: string;
    username: string;
    email: string;
    name?: string | null;
    isStaff: boolean;
    isSuperuser: boolean;
  }

  /**
   * Extended Session type with custom user fields
   */
  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  /**
   * Extended JWT token with custom fields
   */
  interface JWT {
    username?: string;
    isStaff?: boolean;
    isSuperuser?: boolean;
  }
}
