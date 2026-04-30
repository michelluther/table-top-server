/**
 * WebSocket event types for real-time updates
 */
export enum WebSocketEvent {
  // Character events
  CHARACTER_UPDATED = 'character:updated',
  CHARACTER_STATS_CHANGED = 'character:stats:changed',

  // Adventure events
  ADVENTURE_STARTED = 'adventure:started',
  ADVENTURE_STOPPED = 'adventure:stopped',
  ADVENTURE_PARTICIPANT_ADDED = 'adventure:participant:added',
  ADVENTURE_PARTICIPANT_REMOVED = 'adventure:participant:removed',

  // Fight events
  FIGHT_STARTED = 'fight:started',
  FIGHT_ENDED = 'fight:ended',
  FIGHT_TURN_CHANGED = 'fight:turn:changed',
  FIGHT_PARTICIPANT_DAMAGED = 'fight:participant:damaged',
  FIGHT_PARTICIPANT_HEALED = 'fight:participant:healed',

  // Remote control events
  REMOTE_DICE_ROLLED = 'remote:dice:rolled',
  REMOTE_IMAGE_SHOWN = 'remote:image:shown',
  REMOTE_LOCATION_CHANGED = 'remote:location:changed',
}

/**
 * WebSocket message wrapper
 */
export type WebSocketMessage<T = unknown> = {
  event: WebSocketEvent;
  data: T;
  timestamp: number;
};
