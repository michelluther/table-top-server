/**
 * Socket.IO exports
 *
 * This module exports all Socket.IO namespace handlers and utility functions
 * for use in API routes and other parts of the application.
 */

export * from './namespaces/heroes';
export * from './namespaces/remote-control';

// Re-export Socket.IO types for convenience
export type { Namespace, Socket, Server as SocketIOServer } from 'socket.io';
