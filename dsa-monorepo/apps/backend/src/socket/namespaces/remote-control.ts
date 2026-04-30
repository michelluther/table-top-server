/**
 * /remoteControl namespace handler
 *
 * This namespace handles game master remote control features:
 * - Dice rolling for the entire group
 * - Displaying images to all players
 * - Changing adventure locations
 * - Broadcasting messages
 */

import { Namespace, Socket } from 'socket.io';
import { REMOTE_CONTROL_EVENTS } from '@dsa-monorepo/constants';
import type { WebSocketMessage, DiceRoll } from '@dsa-monorepo/shared-types';

/**
 * Setup the /remoteControl namespace with all event handlers
 */
export function setupRemoteControlNamespace(namespace: Namespace): void {
  namespace.on('connection', (socket: Socket) => {
    console.log(`[/remoteControl] Client connected: ${socket.id}`);

    // Join global remoteControl room for broadcasting
    socket.join('remoteControl');

    // Join adventure room for remote control
    socket.on('join:adventure', (adventureId: number) => {
      const room = `adventure:${adventureId}`;
      socket.join(room);
      console.log(`[/remoteControl] ${socket.id} joined room: ${room}`);

      socket.emit('joined', { room, adventureId });
    });

    // Leave adventure room
    socket.on('leave:adventure', (adventureId: number) => {
      const room = `adventure:${adventureId}`;
      socket.leave(room);
      console.log(`[/remoteControl] ${socket.id} left room: ${room}`);
    });

    // Handle incoming remote control instructions and broadcast to all receivers
    socket.on('remote_control_instruction', (data: any) => {
      console.log(`[/remoteControl] Received instruction:`, data);

      // Broadcast to all connected clients except the sender (if target is not 'self')
      if (data.target !== 'self') {
        socket.broadcast.to('remoteControl').emit('remote_control_instruction', data);
        console.log(`[/remoteControl] Broadcasted instruction to all receivers`);
      } else {
        console.log(`[/remoteControl] Instruction marked as 'self', not broadcasting`);
      }
    });

    // Handle remote dice roll (broadcast to all players in adventure)
    socket.on('remote:dice:roll', (data: { adventureId: number; diceRoll: DiceRoll; message?: string }) => {
      const { adventureId, diceRoll, message } = data;
      console.log(`[/remoteControl] Dice rolled in adventure ${adventureId}:`, diceRoll);

      const wsMessage: WebSocketMessage = {
        event: REMOTE_CONTROL_EVENTS.DICE_ROLLED as any,
        data: { diceRoll, message },
        timestamp: Date.now(),
      };

      namespace.to(`adventure:${adventureId}`).emit(REMOTE_CONTROL_EVENTS.DICE_ROLLED, wsMessage);
    });

    // Handle show image (broadcast to all players in adventure)
    socket.on('remote:image:show', (data: { adventureId: number; imageUrl: string; caption?: string }) => {
      const { adventureId, imageUrl, caption } = data;
      console.log(`[/remoteControl] Image shown in adventure ${adventureId}: ${imageUrl}`);

      const wsMessage: WebSocketMessage = {
        event: REMOTE_CONTROL_EVENTS.IMAGE_SHOWN as any,
        data: { imageUrl, caption },
        timestamp: Date.now(),
      };

      namespace.to(`adventure:${adventureId}`).emit(REMOTE_CONTROL_EVENTS.IMAGE_SHOWN, wsMessage);
    });

    // Handle location change (broadcast to all players in adventure)
    socket.on('remote:location:change', (data: { adventureId: number; locationId: number; locationName: string }) => {
      const { adventureId, locationId, locationName } = data;
      console.log(`[/remoteControl] Location changed in adventure ${adventureId}: ${locationName}`);

      const wsMessage: WebSocketMessage = {
        event: REMOTE_CONTROL_EVENTS.LOCATION_CHANGED as any,
        data: { locationId, locationName },
        timestamp: Date.now(),
      };

      namespace.to(`adventure:${adventureId}`).emit(REMOTE_CONTROL_EVENTS.LOCATION_CHANGED, wsMessage);
    });

    // Handle broadcast message (send message to all players in adventure)
    socket.on('remote:message:send', (data: { adventureId: number; message: string; type?: string }) => {
      const { adventureId, message, type = 'info' } = data;
      console.log(`[/remoteControl] Message sent to adventure ${adventureId}: ${message}`);

      const wsMessage: WebSocketMessage = {
        event: REMOTE_CONTROL_EVENTS.MESSAGE_SENT as any,
        data: { message, type },
        timestamp: Date.now(),
      };

      namespace.to(`adventure:${adventureId}`).emit(REMOTE_CONTROL_EVENTS.MESSAGE_SENT, wsMessage);
    });

    // Handle client errors
    socket.on('error', (error) => {
      console.error(`[/remoteControl] Socket error for ${socket.id}:`, error);
    });

    // Handle disconnection
    socket.on('disconnect', (reason) => {
      console.log(`[/remoteControl] Client disconnected: ${socket.id} (${reason})`);
    });
  });
}

/**
 * Broadcast dice roll to all players in an adventure
 */
export function broadcastDiceRoll(
  namespace: Namespace,
  adventureId: number,
  diceRoll: DiceRoll,
  message?: string
): void {
  const wsMessage: WebSocketMessage = {
    event: REMOTE_CONTROL_EVENTS.DICE_ROLLED as any,
    data: { diceRoll, message },
    timestamp: Date.now(),
  };

  namespace.to(`adventure:${adventureId}`).emit(REMOTE_CONTROL_EVENTS.DICE_ROLLED, wsMessage);
}

/**
 * Show image to all players in an adventure
 */
export function broadcastImage(
  namespace: Namespace,
  adventureId: number,
  imageUrl: string,
  caption?: string
): void {
  const wsMessage: WebSocketMessage = {
    event: REMOTE_CONTROL_EVENTS.IMAGE_SHOWN as any,
    data: { imageUrl, caption },
    timestamp: Date.now(),
  };

  namespace.to(`adventure:${adventureId}`).emit(REMOTE_CONTROL_EVENTS.IMAGE_SHOWN, wsMessage);
}

/**
 * Change location for all players in an adventure
 */
export function broadcastLocationChange(
  namespace: Namespace,
  adventureId: number,
  locationId: number,
  locationName: string,
  locationImage?: string
): void {
  const wsMessage: WebSocketMessage = {
    event: REMOTE_CONTROL_EVENTS.LOCATION_CHANGED as any,
    data: { locationId, locationName, locationImage },
    timestamp: Date.now(),
  };

  namespace.to(`adventure:${adventureId}`).emit(REMOTE_CONTROL_EVENTS.LOCATION_CHANGED, wsMessage);
}

/**
 * Broadcast message to all players in an adventure
 */
export function broadcastMessage(
  namespace: Namespace,
  adventureId: number,
  message: string,
  type: 'info' | 'warning' | 'success' | 'error' = 'info'
): void {
  const wsMessage: WebSocketMessage = {
    event: REMOTE_CONTROL_EVENTS.MESSAGE_SENT as any,
    data: { message, type },
    timestamp: Date.now(),
  };

  namespace.to(`adventure:${adventureId}`).emit(REMOTE_CONTROL_EVENTS.MESSAGE_SENT, wsMessage);
}
