import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Rx } from 'rxjs';
import { UrlService } from 'app/url.service';
import { Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';

import { RemoteControlOperation } from './../domain/remoteControlOperation';



@Injectable()
export class RemoteControlService {

    private serverUrl = UrlService.getSocketIOUrl();
    public wsClientId = Math.random().toString(36).substring(7);
    private socket: Socket;
    public remoteControlSubject: Subject<any>;

    constructor(private http: HttpClient) {
        this.socket = this.createSocketConnection();
        this.remoteControlSubject = new Subject();

        // Listen for responses from server (if any)
        this.socket.on('remote_control_instruction', (data: any) => {
            this.remoteControlSubject.next(data);
        });

        // Handle connection events
        this.socket.on('connect', () => {
            console.log('[RemoteControl] Connected to Socket.IO server');
        });

        this.socket.on('connect_error', (error) => {
            console.error('[RemoteControl] Connection error:', error);
        });
    }

    private createSocketConnection(): Socket {
        try {
            const socket = io(`${this.serverUrl}/remoteControl`, {
                transports: ['websocket', 'polling'],
                reconnection: true,
                reconnectionDelay: 4000,
            });
            return socket;
        } catch (error) {
            console.error('error setting up Socket.IO to remote control sender', error);
            return null as any;
        }
    }

    public sendRemoteControlInstruction(instruction: RemoteControlOperation): void {
        const jsonData = JSON.parse(instruction.toJSON());
        console.debug(`[RemoteControl] Sending instruction:`, jsonData);

        // Emit to the appropriate event based on instruction type
        // The backend namespace is listening for events
        this.socket.emit('remote_control_instruction', jsonData);
    }


}

