# NextAuth.js Authentication Setup

## Overview

The DSA Cockpit backend uses **NextAuth.js v5** for authentication, integrated with the existing Django `auth_user` table. This setup provides seamless authentication for the admin UI while maintaining compatibility with the existing Django user database.

## Architecture

```
┌─────────────────────────────────────────────┐
│         NextAuth.js Authentication           │
├─────────────────────────────────────────────┤
│                                              │
│  ┌──────────────────────────────────────┐  │
│  │   Credentials Provider                │  │
│  │   (Django password verification)      │  │
│  └──────────────────────────────────────┘  │
│                  ↓                          │
│  ┌──────────────────────────────────────┐  │
│  │   Django auth_user Table             │  │
│  │   (Existing users & passwords)       │  │
│  └──────────────────────────────────────┘  │
│                  ↓                          │
│  ┌──────────────────────────────────────┐  │
│  │   JWT Session Strategy               │  │
│  │   (Stateless, fast, no DB queries)   │  │
│  └──────────────────────────────────────┘  │
│                                              │
└─────────────────────────────────────────────┘
```

## File Structure

```
apps/backend/
├── src/
│   ├── lib/
│   │   ├── auth.ts                    # NextAuth configuration
│   │   ├── auth-middleware.ts          # Route protection utilities
│   │   ├── django-password.ts          # Django password verification
│   │   └── prisma.ts                   # Prisma client singleton
│   ├── types/
│   │   └── next-auth.d.ts             # NextAuth TypeScript extensions
│   └── app/
│       └── api/
│           └── auth/
│               └── [...nextauth]/
│                   └── route.ts        # NextAuth API routes
└── .env                                # Environment variables
```

## Features

### 1. Django Password Compatibility

The authentication system verifies passwords against Django's password hashing formats:

- **PBKDF2-SHA256** (Django's default)
- **PBKDF2-SHA1**
- Extensible for other algorithms (Argon2, Bcrypt)

### 2. JWT Session Strategy

Uses JWT tokens for sessions instead of database sessions:

- **Stateless:** No session table queries needed
- **Fast:** Authentication checks are instant
- **Scalable:** Works across multiple server instances

### 3. Custom User Fields

Extends NextAuth's default user object with Django fields:

```typescript
interface User {
  id: string;
  username: string;
  email: string;
  name?: string | null;
  isStaff: boolean;
  isSuperuser: boolean;
}
```

### 4. Route Protection Helpers

Multiple middleware functions for different permission levels:

- `withAuth()` - Requires authentication
- `withStaff()` - Requires staff permissions
- `withSuperuser()` - Requires superuser permissions

## Environment Variables

Configure in `apps/backend/.env`:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXTAUTH_URL` | Base URL for NextAuth | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | Secret for signing tokens | Generated random string |
| `AUTH_TRUST_HOST` | Trust host header (dev only) | `true` |
| `DATABASE_URL` | Prisma database URL | `file:../../../dsa_cockpit.sqlite3` |

## Usage Examples

### 1. Protecting API Routes

#### Require Authentication

```typescript
// app/api/protected/route.ts
import { withAuth } from '@/lib/auth-middleware';
import { NextRequest, NextResponse } from 'next/server';

export const GET = withAuth(async (request, { session }) => {
  return NextResponse.json({
    message: 'This is a protected route',
    user: session.user,
  });
});
```

#### Require Staff Permissions

```typescript
// app/api/admin/users/route.ts
import { withStaff } from '@/lib/auth-middleware';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const GET = withStaff(async (request, { session }) => {
  const users = await prisma.auth_user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      is_staff: true,
      is_active: true,
    },
  });

  return NextResponse.json({ users });
});
```

#### Require Superuser Permissions

```typescript
// app/api/admin/settings/route.ts
import { withSuperuser } from '@/lib/auth-middleware';
import { NextRequest, NextResponse } from 'next/server';

export const POST = withSuperuser(async (request, { session }) => {
  // Only superusers can modify settings
  const body = await request.json();

  // Update settings...

  return NextResponse.json({ success: true });
});
```

### 2. Server-Side Authentication Checks

```typescript
// app/dashboard/page.tsx
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div>
      <h1>Welcome, {session.user.username}!</h1>
      <p>Email: {session.user.email}</p>
      {session.user.isStaff && <p>Staff access enabled</p>}
      {session.user.isSuperuser && <p>Superuser access enabled</p>}
    </div>
  );
}
```

### 3. Manual Permission Checks

```typescript
import { requireAuth, requireStaff, requireSuperuser } from '@/lib/auth-middleware';

// Check if user is authenticated
const session = await requireAuth();
if (!session) {
  // User is not logged in
}

// Check if user is staff
const staffSession = await requireStaff();
if (!staffSession) {
  // User is not staff
}

// Check if user is superuser
const superuserSession = await requireSuperuser();
if (!superuserSession) {
  // User is not superuser
}
```

### 4. Client-Side Usage (React)

```typescript
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user.username}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return <button onClick={() => signIn('credentials')}>Sign in</button>;
}
```

### 5. Sign In from External Client (Angular)

```typescript
// Angular authentication service
async signIn(username: string, password: string) {
  const response = await fetch('http://localhost:3000/api/auth/callback/credentials', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      redirect: false,
    }),
    credentials: 'include', // Important: Include cookies
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
}

// Check session
async getSession() {
  const response = await fetch('http://localhost:3000/api/auth/session', {
    credentials: 'include',
  });

  return response.json();
}

// Sign out
async signOut() {
  await fetch('http://localhost:3000/api/auth/signout', {
    method: 'POST',
    credentials: 'include',
  });
}
```

## API Endpoints

NextAuth.js automatically creates these endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/signin` | GET | Sign-in page |
| `/api/auth/signout` | POST | Sign out |
| `/api/auth/session` | GET | Get current session |
| `/api/auth/csrf` | GET | Get CSRF token |
| `/api/auth/providers` | GET | Get configured providers |
| `/api/auth/callback/credentials` | POST | Credentials sign-in callback |

## Database Schema

### Existing Django Table (auth_user)

```prisma
model auth_user {
  id           Int       @id @default(autoincrement())
  username     String    @unique
  email        String
  password     String    // Django password hash
  first_name   String
  last_name    String
  is_staff     Boolean
  is_active    Boolean
  is_superuser Boolean
  date_joined  DateTime
  last_login   DateTime?

  // NextAuth relations
  accounts     Account[]
  sessions     Session[]
}
```

### NextAuth Tables (New)

```prisma
// OAuth accounts (for future Google/GitHub login)
model Account {
  id                String  @id @default(cuid())
  userId            Int
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  // ...

  user auth_user @relation(fields: [userId], references: [id])

  @@map("auth_accounts")
}

// Database sessions (currently using JWT, but available if needed)
model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       Int
  expires      DateTime

  user auth_user @relation(fields: [userId], references: [id])

  @@map("auth_sessions")
}

// Password reset & email verification tokens
model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
  @@map("auth_verification_tokens")
}
```

## Security Considerations

### 1. Password Hashing

- Django passwords are verified using timing-safe comparison
- Supports PBKDF2 with SHA256/SHA1 (Django's default algorithms)
- Extensible for other algorithms

### 2. JWT Token Security

- Tokens are signed with `NEXTAUTH_SECRET`
- Tokens expire after 30 days (NextAuth default)
- CSRF protection enabled for all state-changing operations

### 3. Session Management

- JWT strategy (stateless, no session table queries)
- Tokens stored in HTTP-only cookies
- Automatic session refresh on activity

### 4. Permission Checks

- Three levels: authenticated, staff, superuser
- Middleware functions for easy route protection
- Type-safe session access with TypeScript

## Testing

### Test User Creation

To create a test user with a Django-compatible password:

```typescript
import { hashDjangoPassword } from '@/lib/django-password';
import { prisma } from '@/lib/prisma';

const hashedPassword = await hashDjangoPassword('testpassword123');

await prisma.auth_user.create({
  data: {
    username: 'testuser',
    email: 'test@example.com',
    password: hashedPassword,
    first_name: 'Test',
    last_name: 'User',
    is_staff: true,
    is_active: true,
    is_superuser: false,
    date_joined: new Date(),
  },
});
```

### Manual Password Verification

```typescript
import { verifyDjangoPassword } from '@/lib/django-password';

const djangoHash = 'pbkdf2_sha256$600000$salt$hash...';
const isValid = await verifyDjangoPassword('mypassword', djangoHash);
console.log('Password valid:', isValid);
```

## Next Steps

- **Phase 6:** Setup shadcn/ui for login page UI
- **Phase 7-8:** Add authentication to REST API endpoints
- **Phase 13:** Add OAuth providers (Google, GitHub)
- **Phase 13:** Add WebSocket authentication
- **Phase 13:** Add rate limiting for login attempts
- **Phase 13:** Add audit logging for authentication events

## Troubleshooting

### Issue: "Invalid Django password hash format"

**Cause:** Password hash in database is not in Django's format

**Solution:** Ensure passwords are Django-compatible or create new users with `hashDjangoPassword()`

### Issue: "Unauthorized" on protected routes

**Cause:** No session cookie or expired session

**Solution:** Sign in again or check cookie configuration (httpOnly, secure, sameSite)

### Issue: TypeScript errors with session.user

**Cause:** Custom fields not recognized by TypeScript

**Solution:** Ensure `src/types/next-auth.d.ts` is included in `tsconfig.json`

## Resources

- [NextAuth.js v5 Documentation](https://authjs.dev/)
- [Prisma Adapter Documentation](https://authjs.dev/reference/adapter/prisma)
- [Django Password Hashing](https://docs.djangoproject.com/en/stable/topics/auth/passwords/)
