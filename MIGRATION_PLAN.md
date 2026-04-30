# Django to Next.js Migration Plan

## Project Overview

**Current State:** Django-based DSA (Das Schwarze Auge) tabletop RPG management system
- REST APIs (Django REST Framework)
- WebSocket support (Django Channels)
- SQLite database
- Separate Angular frontend (different repository)

**Target State:** TypeScript Next.js backend with shared types
- Next.js App Router (API + Admin UI)
- Socket.IO for WebSockets
- Prisma ORM
- Nx monorepo with Angular frontend
- Full type safety across stack

---

## Technical Stack Decisions

### Core Technologies

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Monorepo** | Nx | First-class Angular + Next.js support, excellent build caching |
| **Backend Framework** | Next.js App Router | Modern React Server Components, API routes, admin UI capabilities |
| **ORM** | Prisma | Best TypeScript integration, auto-generated types, excellent migrations |
| **WebSockets** | Socket.IO + Custom Server | Battle-tested, rooms/namespaces, excellent TypeScript support |
| **Database** | SQLite | Simplicity, existing data preserved, adequate for current needs |
| **Authentication** | NextAuth.js (Auth.js v5) | De facto Next.js standard, Prisma adapter, protects admin UI |
| **UI Components** | shadcn/ui + Tailwind CSS | Modern, customizable, excellent TypeScript support |
| **Validation** | Zod | Type-safe validation, generates TypeScript types |
| **Testing** | Vitest + Playwright | Fast unit/integration tests + E2E for admin UI |
| **Deployment** | Docker (self-hosted) | Works with custom server, existing experience, full control |

---

## Architecture Decisions

### 1. Monorepo Structure

```
monorepo/
├── apps/
│   ├── backend/                    # Next.js backend
│   │   ├── app/                    # App Router (API routes + admin pages)
│   │   ├── server.ts               # Custom Node.js server entry point
│   │   ├── sockets/                # Socket.IO handlers
│   │   │   ├── heroes.ts           # /heroes namespace
│   │   │   └── remoteControl.ts    # /remoteControl namespace
│   │   └── lib/                    # Business logic
│   └── frontend/                   # Angular application
│       ├── src/
│       └── ...
├── packages/
│   ├── shared-types/               # TypeScript interfaces/types
│   │   └── src/
│   │       ├── character.ts
│   │       ├── adventure.ts
│   │       └── ...
│   ├── validation/                 # Zod schemas
│   │   └── src/
│   │       ├── character.schema.ts
│   │       └── ...
│   └── constants/                  # Shared enums/constants
│       └── src/
│           ├── races.ts
│           ├── skills.ts
│           └── ...
├── prisma/                         # Prisma schema (root level)
│   ├── schema.prisma
│   └── migrations/
└── docker/                         # Docker configuration
    └── Dockerfile
```

**Key Points:**
- Clear separation between apps and shared packages
- Packages are independently versioned and testable
- Nx handles build orchestration and caching
- Angular frontend can import from `@workspace/shared-types`

### 2. Prisma Schema Strategy

**Database Introspection + Manual Refinement:**
- Introspect existing Django SQLite database
- Keep database schema unchanged (migration-friendly)
- Use TypeScript naming conventions in code (camelCase)
- Map to database columns using `@map` and `@@map`

**Example:**
```prisma
model Character {
  id            Int      @id @default(autoincrement())
  name          String
  lifePoints    Int      @map("life_points")
  magicEnergy   Int      @map("magic_energy")
  experience    Int      @map("xp")

  // Relations
  race          Race     @relation(fields: [raceId], references: [id])
  raceId        Int      @map("race_id")

  @@map("dsa_starter_character")
}
```

**Benefits:**
- Idiomatic TypeScript in application code
- Database remains unchanged (safe for incremental migration)
- Clean API responses for Angular (camelCase)

### 3. API Design

**REST Endpoints:**
- Keep existing URL structure: `/characters`, `/adventures`, `/skills`, etc.
- Standardized response format:
  ```typescript
  // Success
  { success: true, data: { id: 1, name: "Hero", ... } }

  // Error
  {
    success: false,
    error: {
      code: "VALIDATION_ERROR",
      message: "Character not found",
      details: [...]
    }
  }
  ```
- Zod validation on all inputs
- Generate TypeScript types for Angular from Zod schemas

**WebSocket Endpoints:**
- Keep existing namespaces: `/heroes`, `/remoteControl`
- Socket.IO with rooms for broadcasting
- Type-safe event handlers

### 4. Custom Next.js Server

Socket.IO requires a custom Node.js server (Next.js API routes don't support WebSockets).

**Structure:**
```typescript
// apps/backend/server.ts
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { initializeSocketIO } from './sockets';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });

  // Initialize Socket.IO with namespaces
  initializeSocketIO(server);

  server.listen(3000);
});
```

**Socket.IO Handler Structure:**
```typescript
// apps/backend/sockets/heroes.ts
export function setupHeroesNamespace(io: Server) {
  const heroesNS = io.of('/heroes');

  heroesNS.on('connection', (socket) => {
    socket.on('updateLife', async (data) => {
      // Business logic
      // Broadcast to room
    });

    socket.on('updateInventory', async (data) => {
      // ...
    });
  });
}
```

### 5. Type Sharing Strategy

**From Backend to Frontend:**
1. Define Zod schemas in `packages/validation/`
2. Generate TypeScript types in `packages/shared-types/`
3. Angular imports types: `import { Character } from '@workspace/shared-types'`

**Code Generation Script:**
```typescript
// Generate types from Zod schemas
import { z } from 'zod';
import { generateSchema } from '@anatine/zod-openapi';

// Export generated types to packages/shared-types
```

### 6. File Storage

**Local Filesystem with Abstraction:**
```typescript
// apps/backend/lib/storage/interface.ts
export interface StorageAdapter {
  upload(file: File, path: string): Promise<string>;
  delete(url: string): Promise<void>;
  getUrl(path: string): string;
}

// apps/backend/lib/storage/local.ts
export class LocalStorageAdapter implements StorageAdapter {
  // Implementation for local filesystem
  // Easy to swap to S3/Cloudinary later
}
```

**File Locations:**
- Character avatars: `public/uploads/avatars/`
- Adventure images: `public/uploads/adventures/`
- Served via Next.js static file serving

### 7. Authentication Strategy

**NextAuth.js Configuration:**
- Protect admin UI routes with middleware
- REST APIs remain open (for Angular compatibility)
- Can add API authentication later if needed

```typescript
// apps/backend/middleware.ts
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/admin/:path*"]
};
```

### 8. Testing Strategy

**Three-Layer Testing:**

1. **Unit Tests (Vitest)**
   - Business logic functions
   - Utility functions
   - Zod schema validation

2. **Integration Tests (Vitest)**
   - API endpoints with test database
   - Socket.IO handlers
   - Prisma queries

3. **E2E Tests (Playwright)**
   - Admin UI critical flows
   - Character creation/editing
   - Adventure management

**Test Database:**
- Separate SQLite file for tests
- Reset between test runs
- Use Prisma migrations

---

## Migration Phases (Incremental Approach)

### Phase 1: Setup Nx Monorepo
**Goal:** Create monorepo structure with backend app and shared packages

**Tasks:**
- [ ] Initialize Nx workspace
- [ ] Create Next.js app (`apps/backend`)
- [ ] Create shared packages structure (`packages/shared-types`, `packages/validation`, `packages/constants`)
- [ ] Configure TypeScript paths for imports
- [ ] Verify build system works

**Success Criteria:**
- `nx build backend` succeeds
- Packages can be imported from backend app
- TypeScript path aliases configured correctly

**Note:** After completing Phase 1, manually copy your Angular application into `apps/frontend/`. Then proceed to Phase 1.5 to integrate it with the Nx workspace.

---

### Phase 1.5: Integrate Angular App into Nx
**Goal:** Configure the copied Angular app to work within the Nx monorepo

**Prerequisites:** Angular app has been manually copied to `apps/frontend/`

**Tasks:**
- [ ] Add Angular app to `nx.json` workspace configuration
- [ ] Update Angular app's `tsconfig.json` to use workspace TypeScript paths
- [ ] Configure Angular app to import from shared packages (`@workspace/shared-types`, etc.)
- [ ] Update Angular app's build configuration in Nx
- [ ] Test Angular app builds: `nx build frontend`
- [ ] Test Angular app runs: `nx serve frontend`
- [ ] Verify shared package imports work from Angular

**Success Criteria:**
- `nx build frontend` succeeds
- `nx serve frontend` runs Angular app successfully
- Angular can import from `@workspace/shared-types`
- Both apps can be built with `nx run-many --target=build --all`

---

### Phase 2: Prisma Schema Setup
**Goal:** Generate Prisma schema from Django database

**Tasks:**
- [ ] Install Prisma
- [ ] Introspect Django SQLite database
- [ ] Refine schema with TypeScript naming (camelCase)
- [ ] Add `@map` and `@@map` for all fields/tables
- [ ] Generate Prisma Client
- [ ] Test queries work correctly
- [ ] Document schema decisions

**Success Criteria:**
- Prisma schema matches Django database
- All models properly mapped
- Can query data with Prisma Client
- TypeScript types generated

### Phase 3: Shared Packages Setup
**Goal:** Create shared type and validation libraries

**Tasks:**
- [ ] Create `packages/shared-types` structure
- [ ] Define core TypeScript interfaces (Character, Adventure, etc.)
- [ ] Create `packages/validation` with Zod schemas
- [ ] Create `packages/constants` for enums/constants
- [ ] Setup type generation from Zod → TypeScript
- [ ] Configure package exports
- [ ] Test imports from both apps

**Success Criteria:**
- Types can be imported from both apps
- Zod schemas validate correctly
- Build/watch mode works for packages

### Phase 4: Custom Server + Socket.IO
**Goal:** Setup Next.js with custom server for WebSockets

**Tasks:**
- [ ] Create `server.ts` with custom Node server
- [ ] Integrate Next.js request handler
- [ ] Setup Socket.IO instance
- [ ] Create modular socket handler structure
- [ ] Implement `/heroes` namespace skeleton
- [ ] Implement `/remoteControl` namespace skeleton
- [ ] Test WebSocket connections work
- [ ] Add TypeScript types for Socket.IO events

**Success Criteria:**
- Next.js serves pages via custom server
- WebSocket connections successful
- Can emit/receive messages
- TypeScript types for events

### Phase 5: Authentication Setup
**Goal:** Implement NextAuth.js for admin UI

**Tasks:**
- [ ] Install NextAuth.js dependencies
- [ ] Configure NextAuth with Prisma adapter
- [ ] Setup authentication provider (credentials/OAuth)
- [ ] Create login page
- [ ] Protect `/admin` routes with middleware
- [ ] Test authentication flow
- [ ] Add user model to Prisma schema

**Success Criteria:**
- Can log in to admin UI
- Protected routes require auth
- Session persists correctly

### Phase 6: Admin UI Setup
**Goal:** Setup shadcn/ui component library

**Tasks:**
- [ ] Install Tailwind CSS
- [ ] Initialize shadcn/ui
- [ ] Install core components (Button, Table, Form, etc.)
- [ ] Create admin layout component
- [ ] Create navigation/sidebar
- [ ] Test components render correctly
- [ ] Setup theme/styling

**Success Criteria:**
- Admin UI renders with components
- Navigation works
- Styling consistent

---

### Phase 6.5: Testing Infrastructure Setup
**Goal:** Setup complete testing infrastructure before migration begins

**Tasks:**
- [ ] Install Vitest and testing dependencies
- [ ] Configure Vitest for Next.js App Router
- [ ] Setup test database (separate SQLite for tests)
- [ ] Create test utilities and helpers
  - Database seeding utilities
  - API test helpers (request/response helpers)
  - Mock data factories
- [ ] Create example integration test (smoke test)
- [ ] Setup test scripts in package.json
- [ ] Configure test coverage reporting
- [ ] Document testing patterns and conventions

**Test Utilities to Create:**
```typescript
// tests/helpers/db.ts
export async function resetTestDatabase() {
  await prisma.$executeRaw`DELETE FROM characters`;
  // ... reset all tables
}

export async function seedCharacter(data: Partial<Character>) {
  return prisma.character.create({
    data: { ...defaultCharacter, ...data }
  });
}

// tests/helpers/api.ts
export async function testGet(url: string) {
  const response = await fetch(`http://localhost:3000${url}`);
  return { status: response.status, data: await response.json() };
}

// tests/factories/character.factory.ts
export function createCharacterData(overrides?: Partial<Character>) {
  return {
    name: 'Test Hero',
    lifePoints: 30,
    magicEnergy: 15,
    // ... defaults
    ...overrides
  };
}
```

**Success Criteria:**
- Vitest runs successfully
- Can run tests with `npm test` or `nx test backend`
- Test database initializes correctly
- Example integration test passes
- Test utilities work as expected

---

### Phase 7: Migrate Read-Only REST Endpoints (Test-Driven)
**Goal:** Implement all GET endpoints with test-first approach

**Test-Driven Migration Workflow:**

For each endpoint, follow this process:
1. **Document Django behavior** - Call Django endpoint, save response
2. **Write integration test** - Define expected behavior
3. **Implement endpoint** - Build Next.js route
4. **Verify test passes** - Ensure behavior matches Django

**Endpoints to Migrate:**
- [ ] `GET /characters` → `GET /api/characters`
- [ ] `GET /skills` → `GET /api/skills`
- [ ] `GET /skillTypes` → `GET /api/skill-types`
- [ ] `GET /skillGroups` → `GET /api/skill-groups`
- [ ] `GET /spells` → `GET /api/spells`
- [ ] `GET /spellTypes` → `GET /api/spell-types`
- [ ] `GET /adventures` → `GET /api/adventures`
- [ ] `GET /adventures/:id` → `GET /api/adventures/[id]`
- [ ] `GET /adventures/:id/npcs` → `GET /api/adventures/[id]/npcs`
- [ ] `GET /adventures/:id/fights` → `GET /api/adventures/[id]/fights`
- [ ] `GET /ascensions` → `GET /api/ascensions`
- [ ] `GET /names` → `GET /api/names`
- [ ] `GET /npcTypes` → `GET /api/npc-types`

**Example: Test-Driven Migration of GET /characters**

**Step 1: Document Django Behavior**
```bash
# Call Django endpoint and save response
curl http://localhost:8000/characters > django-characters-response.json
# Review structure, fields, relationships
```

**Step 2: Write Integration Test FIRST**
```typescript
// apps/backend/tests/api/characters.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { resetTestDatabase, seedCharacter } from '@/tests/helpers/db';
import { testGet } from '@/tests/helpers/api';

describe('GET /api/characters', () => {
  beforeEach(async () => {
    await resetTestDatabase();
  });

  it('returns all characters with race and hero type', async () => {
    // Arrange: Create test data
    const character = await seedCharacter({
      name: 'Thorin Ironfist',
      lifePoints: 30,
      magicEnergy: 15,
      raceId: 1, // Dwarf
      heroTypeId: 2 // Warrior
    });

    // Act: Call endpoint (doesn't exist yet!)
    const { status, data } = await testGet('/api/characters');

    // Assert: Verify response matches Django behavior
    expect(status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data).toHaveLength(1);
    expect(data.data[0]).toMatchObject({
      id: character.id,
      name: 'Thorin Ironfist',
      lifePoints: 30,
      magicEnergy: 15,
      race: { id: 1, name: 'Dwarf' },
      heroType: { id: 2, name: 'Warrior' }
    });
  });

  it('returns empty array when no characters exist', async () => {
    const { status, data } = await testGet('/api/characters');

    expect(status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data).toEqual([]);
  });
});
```

**Step 3: Run Test (it will fail - endpoint doesn't exist yet)**
```bash
npm test -- characters.test.ts
# FAIL: Connection refused (endpoint not implemented)
```

**Step 4: Implement Endpoint**
```typescript
// apps/backend/app/api/characters/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const characters = await prisma.character.findMany({
      include: {
        race: true,
        heroType: true,
      }
    });

    return NextResponse.json({
      success: true,
      data: characters
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: {
        code: 'SERVER_ERROR',
        message: error.message
      }
    }, { status: 500 });
  }
}
```

**Step 5: Run Test Again (should pass!)**
```bash
npm test -- characters.test.ts
# PASS: All tests passing ✅
```

**Step 6: Extract Business Logic & Add Unit Tests (if needed)**
```typescript
// apps/backend/lib/characters/transformers.ts
export function transformCharacterForAPI(character: Character) {
  return {
    ...character,
    // Any transformations needed
  };
}

// apps/backend/tests/unit/character-transformer.test.ts
describe('transformCharacterForAPI', () => {
  it('transforms character correctly', () => {
    // Unit test for pure functions
  });
});
```

**Repeat for all 13 endpoints**

**Success Criteria:**
- All endpoints have integration tests written BEFORE implementation
- All tests pass
- Response format matches Django exactly
- TypeScript types correct
- Test coverage > 90% for API routes

### Phase 8: Migrate Write REST Endpoints (Test-Driven)
**Goal:** Implement POST/PUT/DELETE endpoints with test-first approach

**Test-Driven Migration Workflow:**
Same as Phase 7: Document → Write Test → Implement → Verify

**Endpoints to Migrate:**
- [ ] `POST /api/characters` (create character)
- [ ] `PUT /api/characters/:id` (update character)
- [ ] `DELETE /api/characters/:id` (delete character)
- [ ] `POST /api/adventures` (create adventure)
- [ ] `PUT /api/adventures/:id` (update adventure)
- [ ] Similar for other resources

**Example: Test-Driven Migration of POST /characters**

**Step 1: Document Django Behavior**
```bash
# Test Django endpoint
curl -X POST http://localhost:8000/characters \
  -H "Content-Type: application/json" \
  -d '{"name": "Aldric", "raceId": 1, "heroTypeId": 2}'
# Note validation rules, required fields, error messages
```

**Step 2: Create Zod Schema in @workspace/validation**
```typescript
// packages/validation/src/character.schema.ts
import { z } from 'zod';

export const characterCreateSchema = z.object({
  name: z.string().min(1).max(100),
  raceId: z.number().positive(),
  heroTypeId: z.number().positive(),
  lifePoints: z.number().min(0).default(30),
  magicEnergy: z.number().min(0).default(15),
  // ... other fields
});

export type CharacterCreate = z.infer<typeof characterCreateSchema>;
```

**Step 3: Write Integration Test FIRST**
```typescript
// apps/backend/tests/api/characters-create.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { testPost } from '@/tests/helpers/api';

describe('POST /api/characters', () => {
  beforeEach(async () => {
    await resetTestDatabase();
  });

  it('creates a new character with valid data', async () => {
    const characterData = {
      name: 'Aldric the Brave',
      raceId: 1,
      heroTypeId: 2,
      lifePoints: 30,
      magicEnergy: 15
    };

    const { status, data } = await testPost('/api/characters', characterData);

    expect(status).toBe(201);
    expect(data.success).toBe(true);
    expect(data.data).toMatchObject({
      id: expect.any(Number),
      name: 'Aldric the Brave',
      lifePoints: 30
    });

    // Verify in database
    const character = await prisma.character.findUnique({
      where: { id: data.data.id }
    });
    expect(character).toBeTruthy();
  });

  it('returns validation error for missing required fields', async () => {
    const invalidData = { name: '' }; // Missing raceId, heroTypeId

    const { status, data } = await testPost('/api/characters', invalidData);

    expect(status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error.code).toBe('VALIDATION_ERROR');
    expect(data.error.details).toHaveLength(2); // Missing fields
  });

  it('returns validation error for invalid data types', async () => {
    const invalidData = {
      name: 'Test',
      raceId: 'not-a-number', // Should be number
      heroTypeId: 2
    };

    const { status, data } = await testPost('/api/characters', invalidData);

    expect(status).toBe(400);
    expect(data.success).toBe(false);
  });
});
```

**Step 4: Implement Endpoint**
```typescript
// apps/backend/app/api/characters/route.ts
import { characterCreateSchema } from '@workspace/validation';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const result = characterCreateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid input',
          details: result.error.errors
        }
      }, { status: 400 });
    }

    // Create character
    const character = await prisma.character.create({
      data: result.data,
      include: {
        race: true,
        heroType: true
      }
    });

    return NextResponse.json({
      success: true,
      data: character
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: {
        code: 'SERVER_ERROR',
        message: error.message
      }
    }, { status: 500 });
  }
}
```

**Step 5: Run Tests & Iterate**

**Repeat for PUT, DELETE, and other resources**

**Success Criteria:**
- All endpoints have tests written BEFORE implementation
- Zod validation comprehensive and tested
- Error messages helpful and consistent
- Integration tests pass
- Test coverage > 90%

### Phase 9: Migrate WebSocket `/heroes` Namespace (Test-Driven)
**Goal:** Real-time character updates via Socket.IO with test-first approach

**Test-Driven Migration Workflow:**
1. **Document Django Channels behavior** - Connect to Django WebSocket, test events
2. **Write Socket.IO integration test** - Define expected behavior
3. **Implement event handler** - Build Socket.IO handler
4. **Verify test passes** - Ensure behavior matches Django

**Events to Migrate:**
- [ ] `updateLife` - Update character HP
- [ ] `updateMagic` - Update magic energy
- [ ] `updateAttribute` - Update character attributes
- [ ] `updateSkill` - Update skill values
- [ ] `updateSpell` - Update spell values
- [ ] `updateInventory` - Manage inventory
- [ ] `updateWeapon` - Manage weapons
- [ ] `updateArmor` - Manage armor
- [ ] `updateExperience` - Update XP
- [ ] `updateMoney` - Update character money

**Example: Test-Driven Migration of `updateLife` Event**

**Step 1: Document Django Channels Behavior**
```javascript
// Connect to Django WebSocket and test manually
const socket = io('ws://localhost:8000/heroes');
socket.emit('updateLife', { characterId: 1, lifePoints: 25 });
// Observe: database updates, broadcasts to other clients
```

**Step 2: Setup Socket.IO Test Utilities**
```typescript
// tests/helpers/socket.ts
import { io as ioClient, Socket } from 'socket.io-client';

export async function createTestClient(namespace: string): Promise<Socket> {
  return new Promise((resolve) => {
    const client = ioClient(`http://localhost:3000${namespace}`);
    client.on('connect', () => resolve(client));
  });
}

export function waitForEvent(socket: Socket, event: string): Promise<any> {
  return new Promise((resolve) => {
    socket.once(event, resolve);
  });
}
```

**Step 3: Write Integration Test FIRST**
```typescript
// apps/backend/tests/sockets/heroes.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createTestClient, waitForEvent } from '@/tests/helpers/socket';
import { seedCharacter, resetTestDatabase } from '@/tests/helpers/db';
import type { Socket } from 'socket.io-client';

describe('WebSocket /heroes - updateLife', () => {
  let client1: Socket;
  let client2: Socket;

  beforeEach(async () => {
    await resetTestDatabase();
    client1 = await createTestClient('/heroes');
    client2 = await createTestClient('/heroes');
  });

  afterEach(() => {
    client1.disconnect();
    client2.disconnect();
  });

  it('updates character life points and broadcasts to room', async () => {
    // Arrange: Create test character
    const character = await seedCharacter({
      id: 1,
      name: 'Test Hero',
      lifePoints: 30,
      adventureId: 1
    });

    // Both clients join the same adventure room
    client1.emit('joinAdventure', { adventureId: 1 });
    client2.emit('joinAdventure', { adventureId: 1 });

    // Act: Client 1 updates life
    const updatePromise = waitForEvent(client2, 'lifeUpdated');
    client1.emit('updateLife', {
      characterId: 1,
      lifePoints: 25
    });

    // Assert: Client 2 receives broadcast
    const broadcasted = await updatePromise;
    expect(broadcasted).toMatchObject({
      id: 1,
      lifePoints: 25
    });

    // Verify database was updated
    const updated = await prisma.character.findUnique({
      where: { id: 1 }
    });
    expect(updated.lifePoints).toBe(25);
  });

  it('validates input and returns error for invalid data', async () => {
    const errorPromise = waitForEvent(client1, 'error');

    client1.emit('updateLife', {
      characterId: 'invalid', // Should be number
      lifePoints: 25
    });

    const error = await errorPromise;
    expect(error.code).toBe('VALIDATION_ERROR');
  });

  it('does not broadcast to clients in different adventure rooms', async () => {
    await seedCharacter({ id: 1, adventureId: 1, lifePoints: 30 });

    client1.emit('joinAdventure', { adventureId: 1 });
    client2.emit('joinAdventure', { adventureId: 2 }); // Different adventure!

    // Client 2 should NOT receive this update
    let receivedUpdate = false;
    client2.on('lifeUpdated', () => { receivedUpdate = true; });

    client1.emit('updateLife', { characterId: 1, lifePoints: 25 });

    await new Promise(resolve => setTimeout(resolve, 100)); // Wait
    expect(receivedUpdate).toBe(false);
  });
});
```

**Step 4: Implement Socket.IO Handler**
```typescript
// apps/backend/sockets/heroes.ts
import { Server, Socket } from 'socket.io';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const updateLifeSchema = z.object({
  characterId: z.number(),
  lifePoints: z.number().min(0)
});

export function setupHeroesNamespace(io: Server) {
  const heroesNS = io.of('/heroes');

  heroesNS.on('connection', (socket: Socket) => {
    console.log('Hero client connected:', socket.id);

    // Join adventure room
    socket.on('joinAdventure', ({ adventureId }) => {
      socket.join(`adventure-${adventureId}`);
    });

    // Update life event
    socket.on('updateLife', async (data) => {
      try {
        // Validate input
        const validated = updateLifeSchema.parse(data);

        // Update database
        const character = await prisma.character.update({
          where: { id: validated.characterId },
          data: { lifePoints: validated.lifePoints }
        });

        // Broadcast to adventure room
        heroesNS
          .to(`adventure-${character.adventureId}`)
          .emit('lifeUpdated', character);

      } catch (error) {
        if (error instanceof z.ZodError) {
          socket.emit('error', {
            code: 'VALIDATION_ERROR',
            message: 'Invalid input',
            details: error.errors
          });
        } else {
          socket.emit('error', {
            code: 'SERVER_ERROR',
            message: error.message
          });
        }
      }
    });

    // ... other events
  });
}
```

**Step 5: Run Tests & Iterate**

**Repeat for all 10 events**

**Success Criteria:**
- All WebSocket events have tests written BEFORE implementation
- Integration tests verify database updates AND broadcasting
- Room-based broadcasting works correctly
- Validation tested for all events
- Test coverage > 85% for Socket.IO handlers
- Room-based broadcasting works
- Database updates successful
- Type safety on events
- Integration tests for Socket.IO

### Phase 10: Migrate WebSocket `/remoteControl` Namespace (Test-Driven)
**Goal:** Fight management and broadcasting with test-first approach

**Test-Driven Migration Workflow:**
Same as Phase 9: Document → Write Test → Implement → Verify

**Events to Migrate:**
- [ ] `startFight` - Initialize combat
- [ ] `setNextParticipant` - Change turn order
- [ ] `generateNPC` - Create random NPCs
- [ ] `shareImage` - Broadcast images to players
- [ ] `timerStart` - Start countdown timer
- [ ] `timerStop` - Stop timer
- [ ] `broadcast` - General message broadcasting

**Note:** Use same testing approach as Phase 9. Write integration tests first, then implement handlers.

**Success Criteria:**
- All events have tests written BEFORE implementation
- Integration tests verify broadcasts work
- Fight state management tested
- Type safety maintained
- Test coverage > 85%

### Phase 11: File Upload Handling (Test-Driven)
**Goal:** Handle avatar and adventure image uploads with test-first approach

**Test-Driven Migration Workflow:**
1. **Document Django file upload** - Test file uploads, check file storage location
2. **Write integration test** - Test file validation, storage, URL generation
3. **Implement storage abstraction** - Build interface and local adapter
4. **Implement upload endpoint** - Handle multipart/form-data
5. **Verify tests pass**

**Tasks:**
- [ ] Create storage abstraction interface (with unit tests)
- [ ] Implement local filesystem adapter (with unit tests)
- [ ] Write integration tests for upload endpoint
- [ ] Create upload API endpoint
- [ ] Handle multipart/form-data
- [ ] Validate file types (images only)
- [ ] Generate unique filenames
- [ ] Serve files via Next.js static serving
- [ ] Update Prisma models with file URLs

**Example: Test-Driven File Upload**

**Step 1: Write Tests FIRST**
```typescript
// apps/backend/tests/api/upload.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { readFile, unlink } from 'fs/promises';
import { testUpload } from '@/tests/helpers/api';

describe('POST /api/upload', () => {
  beforeEach(async () => {
    // Clean up test uploads
  });

  it('uploads valid image file', async () => {
    const file = new File(['test image'], 'avatar.png', { type: 'image/png' });

    const { status, data } = await testUpload('/api/upload', file);

    expect(status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data.url).toMatch(/^\/uploads\/\d+-avatar\.png$/);

    // Verify file exists
    const fileExists = await fileExists(data.data.url);
    expect(fileExists).toBe(true);
  });

  it('rejects non-image files', async () => {
    const file = new File(['malicious'], 'script.js', { type: 'text/javascript' });

    const { status, data } = await testUpload('/api/upload', file);

    expect(status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error.code).toBe('INVALID_TYPE');
  });

  it('rejects files over size limit', async () => {
    const largeFile = new File([new ArrayBuffer(10 * 1024 * 1024)], 'large.png', {
      type: 'image/png'
    });

    const { status, data } = await testUpload('/api/upload', largeFile);

    expect(status).toBe(400);
    expect(data.error.code).toBe('FILE_TOO_LARGE');
  });
});

// apps/backend/tests/unit/storage.test.ts
describe('LocalStorageAdapter', () => {
  it('saves file and returns URL', async () => {
    const adapter = new LocalStorageAdapter();
    const file = Buffer.from('test');

    const url = await adapter.upload(file, 'test.png');

    expect(url).toMatch(/^\/uploads\/\d+-test\.png$/);
  });
});
```

**Step 2: Implement Storage Abstraction**
```typescript
// apps/backend/lib/storage/interface.ts
export interface StorageAdapter {
  upload(file: Buffer, filename: string): Promise<string>;
  delete(url: string): Promise<void>;
  exists(url: string): Promise<boolean>;
}

// apps/backend/lib/storage/local.ts
import { writeFile, unlink, access } from 'fs/promises';
import path from 'path';

export class LocalStorageAdapter implements StorageAdapter {
  private uploadDir = './public/uploads';

  async upload(file: Buffer, filename: string): Promise<string> {
    const uniqueFilename = `${Date.now()}-${filename}`;
    const filePath = path.join(this.uploadDir, uniqueFilename);

    await writeFile(filePath, file);

    return `/uploads/${uniqueFilename}`;
  }

  async delete(url: string): Promise<void> {
    const filePath = path.join('./public', url);
    await unlink(filePath);
  }

  async exists(url: string): Promise<boolean> {
    try {
      await access(path.join('./public', url));
      return true;
    } catch {
      return false;
    }
  }
}
```

**Step 3: Implement Upload Endpoint**
```typescript
// apps/backend/app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { LocalStorageAdapter } from '@/lib/storage/local';

const storage = new LocalStorageAdapter();
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({
        success: false,
        error: { code: 'NO_FILE', message: 'No file provided' }
      }, { status: 400 });
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({
        success: false,
        error: { code: 'INVALID_TYPE', message: 'Only images allowed' }
      }, { status: 400 });
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({
        success: false,
        error: { code: 'FILE_TOO_LARGE', message: 'File too large' }
      }, { status: 400 });
    }

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const url = await storage.upload(buffer, file.name);

    return NextResponse.json({
      success: true,
      data: { url }
  });
}
```

**Success Criteria:**
- Integration tests pass for file upload
- Unit tests pass for storage adapter
- Can upload images via API
- Files saved correctly with unique names
- File validation works (type, size)
- URLs returned properly
- Images accessible via browser
- Test coverage > 90%

---

### Phase 12: Build Admin UI Pages (with E2E Testing)
**Goal:** Create maintenance interfaces with Playwright E2E tests

**Approach:** Build critical UI flows with E2E tests for validation

**Pages to Build:**
- [ ] `/admin/dashboard` - Overview/statistics
- [ ] `/admin/characters` - List/create/edit characters
- [ ] `/admin/characters/[id]` - Character detail page
- [ ] `/admin/adventures` - List/create adventures
- [ ] `/admin/adventures/[id]` - Adventure detail with sections/images
- [ ] `/admin/fights` - Fight management
- [ ] `/admin/npcs` - NPC management
- [ ] `/admin/skills` - Skill/spell reference data

**E2E Testing Setup:**
```typescript
// e2e/setup.ts
import { test as base } from '@playwright/test';

export const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    // Login first
    await page.goto('/auth/login');
    await page.fill('input[name="email"]', 'admin@test.com');
    await page.fill('input[name="password"]', 'password');
    await page.click('button[type="submit"]');
    await page.waitForURL('/admin/dashboard');
    await use(page);
  }
});
```

**Critical E2E Tests to Write:**
```typescript
// e2e/characters.spec.ts
import { test, expect } from './setup';

test.describe('Character Management', () => {
  test('can create a new character', async ({ authenticatedPage: page }) => {
    await page.goto('/admin/characters');
    await page.click('button:has-text("New Character")');

    // Fill form
    await page.fill('input[name="name"]', 'Thorin Ironfist');
    await page.selectOption('select[name="raceId"]', '1'); // Dwarf
    await page.selectOption('select[name="heroTypeId"]', '2'); // Warrior

    // Submit
    await page.click('button[type="submit"]');

    // Verify success
    await expect(page.locator('text=Thorin Ironfist')).toBeVisible();
  });

  test('can edit an existing character', async ({ authenticatedPage: page }) => {
    // Test edit flow
  });

  test('validates required fields', async ({ authenticatedPage: page }) => {
    // Test validation
  });
});

// e2e/adventures.spec.ts
test.describe('Adventure Management', () => {
  test('can create adventure and upload image', async ({ authenticatedPage: page }) => {
    // Test adventure creation with file upload
  });
});

// e2e/auth.spec.ts
test.describe('Authentication', () => {
  test('redirects to login when not authenticated', async ({ page }) => {
    await page.goto('/admin/characters');
    await expect(page).toHaveURL('/auth/login');
  });

  test('can log in with valid credentials', async ({ page }) => {
    // Test login flow
  });
});
```

**Success Criteria:**
- All admin pages functional
- CRUD operations work
- Forms validate correctly
- UI responsive and accessible
- Protected by authentication
- Critical flows have E2E tests (login, character creation, adventure creation)
- E2E tests pass consistently

---

### Phase 13: Testing Review & Quality Assurance
**Goal:** Review test coverage, add missing tests, performance validation

**Note:** Most testing has been done throughout Phases 6.5-12. This phase is for filling gaps and validation.

**Testing Status Review:**
- ✅ Phase 6.5: Test infrastructure setup
- ✅ Phase 7: REST GET endpoints (integration tests)
- ✅ Phase 8: REST POST/PUT/DELETE endpoints (integration tests + Zod validation)
- ✅ Phase 9: WebSocket /heroes (integration tests)
- ✅ Phase 10: WebSocket /remoteControl (integration tests)
- ✅ Phase 11: File uploads (unit + integration tests)
- ✅ Phase 12: Admin UI (E2E tests for critical flows)

**Tasks for Phase 13:**

1. **Test Coverage Analysis**
   - [ ] Run coverage report: `npm run test:coverage`
   - [ ] Review coverage by file/module
   - [ ] Identify gaps (target: >80% overall, >90% for critical paths)
   - [ ] Create list of missing tests

2. **Fill Testing Gaps**
   - [ ] Add missing unit tests for utility functions
   - [ ] Add missing unit tests for transformers/helpers
   - [ ] Add integration tests for edge cases not covered
   - [ ] Add error handling tests (network failures, database errors)

3. **Performance Testing**
   - [ ] Load test REST endpoints (Artillery, k6)
   - [ ] WebSocket connection stress testing
   - [ ] Database query performance review
   - [ ] Identify and fix N+1 queries
   - [ ] Add performance benchmarks

4. **Security Testing**
   - [ ] Test authentication/authorization
   - [ ] Test input validation (SQL injection, XSS)
   - [ ] Test file upload security
   - [ ] Review CORS configuration
   - [ ] Check for sensitive data exposure

5. **Documentation**
   - [ ] Document testing patterns and conventions
   - [ ] Create test README with examples
   - [ ] Document how to run tests locally
   - [ ] Document CI/CD test integration

**Example Performance Test:**
```typescript
// performance/api-load.yml (Artillery)
config:
  target: "http://localhost:3000"
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - name: "Get characters"
    flow:
      - get:
          url: "/api/characters"
```

**Success Criteria:**
- Test coverage > 80% overall
- Test coverage > 90% for API routes, Socket.IO handlers
- All critical paths tested
- Performance benchmarks established
- Security tests pass
- Tests run in < 2 minutes
- All tests documented

### Phase 14: Generate Angular Types
**Goal:** Provide TypeScript types to Angular frontend

**Tasks:**
- [ ] Create type generation script
- [ ] Extract types from Zod schemas
- [ ] Generate interfaces in `packages/shared-types`
- [ ] Configure Angular to import types
- [ ] Update Angular services with types
- [ ] Test type checking works
- [ ] Setup automatic regeneration on schema changes

**Script:**
```typescript
// scripts/generate-types.ts
import { z } from 'zod';
import { zodToTs } from 'zod-to-ts';
import { writeFileSync } from 'fs';
import * as schemas from '@workspace/validation';

// Generate TypeScript interfaces from Zod schemas
for (const [name, schema] of Object.entries(schemas)) {
  const { node } = zodToTs(schema);
  const output = printNode(node);
  writeFileSync(`packages/shared-types/src/${name}.ts`, output);
}
```

**Success Criteria:**
- Types generated automatically
- Angular imports work: `import { Character } from '@workspace/shared-types'`
- Type checking catches errors
- No manual type duplication

### Phase 15: Update Angular App
**Goal:** Point Angular to new Next.js backend

**Tasks:**
- [ ] Update environment config with new API URL
- [ ] Update WebSocket connection URLs
- [ ] Import generated types in services
- [ ] Update HTTP services to use new response format
- [ ] Handle new error format
- [ ] Test all Angular features still work
- [ ] Update authentication if needed

**Changes:**
```typescript
// apps/frontend/src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',  // Changed
  wsUrl: 'http://localhost:3000'         // Changed
};

// apps/frontend/src/app/services/character.service.ts
import { Character } from '@workspace/shared-types';

export class CharacterService {
  getCharacters(): Observable<Character[]> {
    return this.http.get<ApiResponse<Character[]>>(`${environment.apiUrl}/characters`)
      .pipe(
        map(response => response.data)  // Extract from new format
      );
  }
}
```

**Success Criteria:**
- Angular connects to Next.js backend
- All features work as before
- WebSocket connections stable
- No regressions

### Phase 16: Docker Deployment
**Goal:** Package for production deployment

**Tasks:**
- [ ] Create optimized Dockerfile
- [ ] Multi-stage build (build + runtime)
- [ ] Configure environment variables
- [ ] Setup Docker Compose for local testing
- [ ] Test production build
- [ ] Document deployment process
- [ ] Setup CI/CD pipeline

**Dockerfile:**
```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
RUN npm ci

# Copy source
COPY . .

# Build apps
RUN npx nx build backend --prod
RUN npx nx build frontend --prod

# Stage 2: Runtime
FROM node:20-alpine

WORKDIR /app

# Copy built assets
COPY --from=builder /app/dist/apps/backend ./backend
COPY --from=builder /app/dist/apps/frontend ./frontend
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# Environment
ENV NODE_ENV=production
ENV PORT=3000

# Database
RUN npx prisma generate

EXPOSE 3000

CMD ["node", "backend/server.js"]
```

**Success Criteria:**
- Docker image builds successfully
- Application runs in container
- WebSockets work in containerized environment
- Can deploy to VPS

### Phase 17: End-to-End Validation
**Goal:** Verify complete migration success

**Validation Checklist:**
- [ ] All REST endpoints functional
- [ ] WebSocket namespaces working
- [ ] Character management works end-to-end
- [ ] Adventure management works
- [ ] Fight system functional
- [ ] File uploads working
- [ ] Admin UI fully functional
- [ ] Angular app connects and works
- [ ] Authentication secure
- [ ] Performance acceptable (load testing)
- [ ] Database operations correct
- [ ] No data loss from migration
- [ ] Error handling robust
- [ ] Logging configured
- [ ] Documentation complete

**Load Testing:**
```bash
# Test concurrent WebSocket connections
artillery quick --count 50 --num 100 ws://localhost:3000/heroes

# Test REST endpoints
artillery quick --count 10 --num 500 http://localhost:3000/api/characters
```

**Success Criteria:**
- All features working
- No regressions
- Performance meets requirements
- Ready for production

---

## Risk Mitigation

### Identified Risks

1. **Data Loss During Migration**
   - **Mitigation:** Introspect existing DB (no schema changes), backup before any operations
   - **Rollback:** Keep Django app available during transition

2. **WebSocket Connection Issues**
   - **Mitigation:** Thorough Socket.IO testing, handle reconnections gracefully
   - **Monitoring:** Log all connection/disconnection events

3. **Type Mismatches Between Systems**
   - **Mitigation:** Comprehensive integration tests, validate at boundaries
   - **Prevention:** Use Zod for runtime validation + TypeScript for compile-time

4. **Performance Degradation**
   - **Mitigation:** Load testing at each phase, optimize queries with Prisma
   - **Monitoring:** Add performance metrics, database query logging

5. **Authentication Vulnerabilities**
   - **Mitigation:** Use NextAuth.js best practices, secure cookies, HTTPS only
   - **Testing:** Security audit before production

6. **Breaking Changes for Angular**
   - **Mitigation:** Keep endpoints backward compatible, minimal API changes
   - **Testing:** Run Angular e2e tests against new backend

---

## Success Metrics

### Technical Metrics
- **Type Safety:** 100% of API responses typed
- **Test Coverage:** >80% unit/integration, critical paths covered in E2E
- **Performance:** API response times <200ms p95, WebSocket latency <50ms
- **Build Time:** Full build <5 minutes
- **Bundle Size:** Admin UI initial load <500KB

### Migration Metrics
- **Endpoint Parity:** 100% of Django endpoints migrated
- **Feature Parity:** All features working as before
- **Data Integrity:** Zero data loss
- **Zero Downtime:** Incremental migration allows continuous operation

---

## Timeline Estimate

**Assumptions:** 1 developer, part-time work (10-15 hours/week)

**Note:** Times include test writing (test-driven approach adds ~30-40% overhead but ensures quality)

| Phase | Estimated Time | Cumulative |
|-------|----------------|------------|
| Phase 1: Nx Monorepo Setup | 1 week | 1 week |
| Phase 1.5: Integrate Angular App | 3 days | 1.5 weeks |
| Phase 2: Prisma Schema | 1 week | 2.5 weeks |
| Phase 3: Shared Packages | 1 week | 3.5 weeks |
| Phase 4: Custom Server + Socket.IO | 1 week | 4.5 weeks |
| Phase 5: Authentication | 1 week | 5.5 weeks |
| Phase 6: Admin UI Setup | 1 week | 6.5 weeks |
| **Phase 6.5: Testing Infrastructure** | **3 days** | **7 weeks** |
| Phase 7: Read-Only REST (test-driven) | 2.5 weeks | 9.5 weeks |
| Phase 8: Write REST (test-driven) | 3 weeks | 12.5 weeks |
| Phase 9: WebSocket Heroes (test-driven) | 2.5 weeks | 15 weeks |
| Phase 10: WebSocket RemoteControl (test-driven) | 1.5 weeks | 16.5 weeks |
| Phase 11: File Uploads (test-driven) | 1.5 weeks | 18 weeks |
| Phase 12: Admin UI Pages + E2E tests | 4 weeks | 22 weeks |
| Phase 13: Testing Review & QA | 1.5 weeks | 23.5 weeks |
| Phase 14: Angular Types | 1 week | 24.5 weeks |
| Phase 15: Angular Updates | 1 week | 25.5 weeks |
| Phase 16: Docker Deployment | 1 week | 26.5 weeks |
| Phase 17: E2E Validation | 1 week | 27.5 weeks |

**Total Estimated Time:** ~6.5-7 months (part-time)

**Note on Test-Driven Development:**
- Initial setup slower but catches bugs earlier
- Better code quality and architecture
- Easier refactoring with safety net
- Comprehensive test suite from day one

**Full-time:** Could be completed in 2-3 months with dedicated full-time work

---

## Next Steps

1. **Review this plan** - Ensure all decisions align with project goals
2. **Setup development environment** - Install required tools (Node.js, Nx CLI, Docker)
3. **Create project repository** - Initialize Git repo for monorepo
4. **Begin Phase 1** - Start with Nx monorepo setup (backend + shared packages only)
5. **Copy Angular app** - After Phase 1 completes, manually copy your Angular app into `apps/frontend/`
6. **Complete Phase 1.5** - Integrate the copied Angular app with Nx workspace
7. **Iterate** - Complete each subsequent phase, validate, then proceed

---

## References

- [Nx Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Socket.IO Documentation](https://socket.io/docs/v4)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Zod Documentation](https://zod.dev)

---

## Document History

- **2026-03-28:** Initial migration plan created based on comprehensive requirements gathering
- **2026-03-28:** Updated Phase 1 to clarify Angular app will be manually copied after monorepo setup; added Phase 1.5 for Angular integration
- **2026-03-28:** Major update: Implemented test-driven development (TDD) approach throughout migration
  - Added Phase 6.5: Testing Infrastructure Setup
  - Updated Phases 7-12 with test-first workflow (Document → Write Test → Implement → Verify)
  - Transformed Phase 13 from "comprehensive testing" to "testing review & QA" (since testing is now distributed)
  - Added detailed testing examples for REST endpoints, WebSocket handlers, and E2E flows
  - Updated timeline to reflect TDD overhead (~30-40% increase): ~27.5 weeks total
  - Updated todo list to reflect 19 phases with test-driven approach
