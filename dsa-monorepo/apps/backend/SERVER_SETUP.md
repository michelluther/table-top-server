# Custom Server Setup with Socket.IO

## Overview

The DSA Cockpit backend uses a **custom Next.js server** to enable real-time WebSocket communication via Socket.IO alongside Next.js SSR and API routes.

## Architecture

```
┌─────────────────────────────────────────────┐
│          Custom HTTP Server                  │
│  (server.ts - Node.js HTTP + Next.js)       │
├─────────────────────────────────────────────┤
│                                              │
│  ┌──────────────┐      ┌─────────────────┐ │
│  │   Next.js    │      │   Socket.IO     │ │
│  │   Handler    │      │   Namespaces    │ │
│  ├──────────────┤      ├─────────────────┤ │
│  │ • SSR Pages  │      │ • /heroes       │ │
│  │ • API Routes │      │ • /remoteControl│ │
│  │ • Static     │      │                 │ │
│  └──────────────┘      └─────────────────┘ │
│                                              │
└─────────────────────────────────────────────┘
```

## File Structure

```
apps/backend/
├── server.ts                    # Custom server entry point
├── src/
│   ├── socket/
│   │   ├── setup.ts            # Socket.IO initialization
│   │   ├── namespaces/
│   │   │   ├── heroes.ts       # /heroes namespace handler
│   │   │   └── remote-control.ts # /remoteControl namespace handler
│   │   └── index.ts            # Socket.IO exports
│   ├── lib/
│   │   └── prisma.ts           # Prisma client singleton
│   └── app/                    # Next.js App Router
└── .env                        # Environment configuration
```

## Socket.IO Namespaces

### `/heroes` Namespace

**Purpose:** Real-time updates for player characters during gameplay

**Client Events (from client to server):**
- `join:character` - Join a character's room for updates
- `leave:character` - Leave a character's room
- `join:adventure` - Join an adventure's room
- `leave:adventure` - Leave an adventure's room
- `join:fight` - Join a fight's room
- `leave:fight` - Leave a fight's room

**Server Events (from server to client):**
- `character:updated` - Full character data updated
- `character:stats:changed` - Character stats changed (life, magic energy, etc.)
- `fight:turn:changed` - Combat turn changed
- `fight:participant:damaged` - Combat participant took damage
- `fight:participant:healed` - Combat participant healed
- `adventure:started` - Adventure session started
- `adventure:stopped` - Adventure session stopped

### `/remoteControl` Namespace

**Purpose:** Game master remote control features (broadcast to all players)

**Client Events (from client to server):**
- `join:adventure` - Join adventure room for remote control
- `leave:adventure` - Leave adventure room
- `remote:dice:roll` - Broadcast dice roll to all players
- `remote:image:show` - Show image to all players
- `remote:location:change` - Change location for all players
- `remote:message:send` - Send message to all players

**Server Events (from server to client):**
- `remote:dice:rolled` - Dice roll result
- `remote:image:shown` - Image displayed
- `remote:location:changed` - Location changed
- `remote:message:sent` - Message received

## Running the Server

### Development Mode

```bash
# From workspace root
npm run dev --prefix apps/backend

# Or using Nx
npx nx serve backend
```

The server will start on `http://localhost:3000` with hot-reload enabled via `tsx watch`.

### Production Mode

```bash
# Build Next.js
npm run build --prefix apps/backend

# Start production server
npm run start --prefix apps/backend
```

## Environment Variables

Configure these in `apps/backend/.env`:

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `HOSTNAME` | Server hostname | `localhost` |
| `PORT` | Server port | `3000` |
| `CORS_ORIGIN` | Allowed CORS origins | `*` |
| `DATABASE_URL` | Prisma database URL | `file:../../../dsa_cockpit.sqlite3` |

## Usage Examples

### From API Routes

Emit events from Next.js API routes:

```typescript
// app/api/characters/[id]/update-stats/route.ts
import { NextResponse } from 'next/server';
import { io } from 'socket.io-client';
import { emitCharacterStatsUpdate } from '@/socket';

export async function PATCH(request: Request) {
  // Update character stats in database
  const stats = await updateCharacterStats(characterId, data);

  // Emit WebSocket event to connected clients
  // Note: In production, you'd access the Socket.IO server instance differently
  emitCharacterStatsUpdate(heroesNamespace, characterId, stats);

  return NextResponse.json({ success: true, data: stats });
}
```

### From Client (Angular)

Connect to Socket.IO namespaces:

```typescript
import { io } from 'socket.io-client';

// Connect to /heroes namespace
const heroesSocket = io('http://localhost:3000/heroes', {
  transports: ['websocket', 'polling']
});

// Join character room
heroesSocket.emit('join:character', characterId);

// Listen for character updates
heroesSocket.on('character:stats:changed', (message) => {
  console.log('Character stats updated:', message.data);
  // Update UI
});

// Connect to /remoteControl namespace (for game master)
const remoteSocket = io('http://localhost:3000/remoteControl');

// Join adventure room
remoteSocket.emit('join:adventure', adventureId);

// Broadcast dice roll to all players
remoteSocket.emit('remote:dice:roll', {
  adventureId,
  diceRoll: { dice: '2d6', rolls: [4, 5], modifier: 2, total: 11 },
  message: 'Roll for initiative!'
});
```

## Benefits of Custom Server

1. **Real-time Communication:** Socket.IO enables instant updates for all connected players
2. **Modular Architecture:** Namespaces separate concerns (heroes vs. game master controls)
3. **Room-based Broadcasting:** Efficient targeting of specific characters, adventures, or fights
4. **Seamless Integration:** Works alongside Next.js SSR and API routes
5. **Production Ready:** Graceful shutdown, error handling, connection monitoring

## Monitoring

The server logs active connections every 60 seconds:

```
📊 Active connections: 8 (root: 0, heroes: 5, remote: 3)
```

## Graceful Shutdown

The server handles `SIGTERM` and `SIGINT` signals for graceful shutdown:

1. Stops accepting new connections
2. Closes existing connections gracefully
3. Exits after all connections are closed (or after 10s timeout)

## Next Steps

- **Phase 5:** Add NextAuth.js authentication
- **Phase 7-8:** Implement REST API endpoints that emit Socket.IO events
- **Phase 9-10:** Migrate Django WebSocket handlers to Socket.IO namespaces
- **Phase 13:** Add WebSocket connection authentication and authorization
