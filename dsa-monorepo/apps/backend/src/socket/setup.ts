/**
 * Socket.IO setup and namespace configuration
 *
 * This module initializes all Socket.IO namespaces and their event handlers.
 */

import { Server as SocketIOServer } from 'socket.io';
import { setupHeroesNamespace } from './namespaces/heroes';
import { setupRemoteControlNamespace } from './namespaces/remote-control';
import { WS_NAMESPACES } from '@dsa-monorepo/constants';

/**
 * Setup all Socket.IO namespaces and event handlers
 */
export function setupSocketIO(io: SocketIOServer): void {
  // Main namespace (root)
  io.on('connection', (socket) => {
    console.log(`[/] Client connected: ${socket.id}`);

    socket.on('disconnect', (reason) => {
      console.log(`[/] Client disconnected: ${socket.id} (${reason})`);
    });

    socket.on('error', (error) => {
      console.error(`[/] Socket error for ${socket.id}:`, error);
    });
  });

  // Setup /heroes namespace for player character updates
  const heroesNamespace = io.of(WS_NAMESPACES.HEROES);
  setupHeroesNamespace(heroesNamespace);
  console.log(`✅ Namespace configured: ${WS_NAMESPACES.HEROES}`);

  // Setup /remoteControl namespace for game master controls
  const remoteControlNamespace = io.of(WS_NAMESPACES.REMOTE_CONTROL);
  setupRemoteControlNamespace(remoteControlNamespace);
  console.log(`✅ Namespace configured: ${WS_NAMESPACES.REMOTE_CONTROL}`);

  // Log total connection count periodically (for monitoring)
  setInterval(() => {
    const totalConnections =
      io.of('/').sockets.size +
      heroesNamespace.sockets.size +
      remoteControlNamespace.sockets.size;

    if (totalConnections > 0) {
      console.log(
        `📊 Active connections: ${totalConnections} ` +
          `(root: ${io.of('/').sockets.size}, ` +
          `heroes: ${heroesNamespace.sockets.size}, ` +
          `remote: ${remoteControlNamespace.sockets.size})`
      );
    }
  }, 60000); // Every 60 seconds
}
