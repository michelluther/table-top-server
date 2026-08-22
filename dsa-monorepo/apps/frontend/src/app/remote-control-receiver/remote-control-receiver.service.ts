import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActiveToast, Toast, ToastrService } from 'ngx-toastr';
// import { Rx } from 'rxjs';
import { Timer, TimerService } from 'app/domain/timer.service';
import { TimerDialogComponent } from 'app/timer-dialog/timer-dialog.component';
import { UrlService } from 'app/url.service';
import { Subject, Subscription } from 'rxjs';
import { io, Socket } from 'socket.io-client';

import { take } from 'rxjs/operators';
import { OperationFactory, RemoteControlOperation, operationTypes } from './../domain/remoteControlOperation';
import { ImagePopupComponent } from './../image-popup/image-popup.component';



@Injectable()
export class RemoteControlReceiverService {

  private operationsMap: Map<string, Function> = new Map()


  private serverUrl = UrlService.getSocketIOUrl();
  public wsClientId = Math.random().toString(36).substring(7);
  private socket: Socket;
  private remoteControlReceiverSubject: Subject<any>;
  private remoteControlReceiverSubscription: Subscription;
  private connectionInterval: number;

  private currentlyConnected: boolean = false;
  private timerDialogRef: MatDialogRef<TimerDialogComponent>
  private openImageDialogRef: MatDialogRef<ImagePopupComponent>
  private timerToaster: ActiveToast<Toast>;

  constructor(private http: HttpClient, public dialog: MatDialog, private toastr: ToastrService, private timerService:TimerService) {

    this.createSocketConnection()

    this.operationsMap.set(operationTypes.openImage, (openImageOperation: RemoteControlOperation) => {
      if (this.openImageDialogRef) {
        this.openImageDialogRef.close()
      }
      this.openImageDialogRef = this.dialog.open(ImagePopupComponent, {
        panelClass: 'fullscreen-image-dialog',
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        data: {
          url: openImageOperation.getParameter('url'),
          caption: openImageOperation.getParameter('caption')
        }
      })
    })

    this.operationsMap.set(operationTypes.startTimer, (startTimerOperation:RemoteControlOperation) => {
      if(this.timerService.timer.running === false){
        const timerData:Timer = startTimerOperation.getParameters() as Timer
        this.timerService.timer.minutes = timerData.minutes
        this.timerService.timer.seconds = timerData.seconds
        this.timerService.timer.title = timerData.title
        this.timerService.startTimer(true)
        this.timerToaster = this.toastr.info(
          `Ihr könnt kurz nachdenken: \n${startTimerOperation.getParameter('minutes')} Minuten\n${startTimerOperation.getParameter('seconds')} Sekunden!`, 
          'Bedenkzeit', 
          {
            timeOut: this.timerService.timer.getTimerMilliseconds(),
            tapToDismiss: false,
            progressBar: true
          }
        )
        this.timerToaster.onTap.pipe(take(1))
        .subscribe(function(){
          
          this.timerDialogRef = this.dialog.open(TimerDialogComponent, {
            data: {timer: this.timerService.timer, timeRemaining: this.timerService.timeRemaining }
          })
          this.timerDialogRef.componentInstance.cancelDialog.subscribe(this.closeTimerDialog.bind(this))
          this.timerDialogRef.componentInstance.stopTimer.subscribe(() => {
            this.timerService.clearTimer()
            this.closeTimerDialog()
          })
        }.bind(this))
      }
    })

    this.operationsMap.set(operationTypes.timerFinished, (timerFinishedOperation:RemoteControlOperation) => {
      this.closeTimerDialog()
      this.timerService.stopTimer(false)
      if(this.timerToaster)
        this.toastr.clear(this.timerToaster.toastId)
      this.toastr.info('Die Zeit ist abgelaufen', `Time's Up!`)
    })
    this.operationsMap.set(operationTypes.timerStopped, (timerFinishedOperation:RemoteControlOperation) => {
      this.closeTimerDialog()
      this.timerService.stopTimer(false)
      if(this.timerToaster)
        this.toastr.clear(this.timerToaster.toastId)
      this.toastr.info(`Der Plan ist gefasst!`,'Geschafft')
    })
  }

  private closeTimerDialog():void {
    if(this.timerDialogRef)
      this.timerDialogRef.close()
  }

  private createSocketConnection(): void {
    try {
      // Connect to Socket.IO /remoteControl namespace
      this.socket = io(`${this.serverUrl}/remoteControl`, {
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionDelay: 4000,
        reconnectionAttempts: Infinity,
      });

      this.remoteControlReceiverSubject = new Subject();

      // Subscribe to handle incoming instructions
      this.remoteControlReceiverSubscription = this.remoteControlReceiverSubject.subscribe((data) => {
        const instruction = OperationFactory.createOperationFromJSON(JSON.stringify(data));
        const instructionFunction = this.operationsMap.get(instruction.getType());
        if (instructionFunction) {
          instructionFunction.apply(this, [instruction]);
        } else {
          console.warn('[RemoteControlReceiver] No handler for instruction type:', instruction.getType());
        }
      });

      // Listen for remote control instructions from server
      this.socket.on('remote_control_instruction', (data: any) => {
        console.log('[RemoteControlReceiver] Received instruction:', data);
        this.remoteControlReceiverSubject.next(data);
      });

      // Handle connection success
      this.socket.on('connect', () => {
        this.currentlyConnected = true;
        this.toastr.success('Du bist online.');
        clearInterval(this.connectionInterval);
        console.log('[RemoteControlReceiver] Connected to Socket.IO server');
      });

      // Handle connection errors
      this.socket.on('connect_error', (error) => {
        console.error('[RemoteControlReceiver] Connection error:', error);
        if (this.currentlyConnected) {
          this.toastr.error('Es gab einen Fehler', 'Verbindungsproblem');
        }
      });

      // Handle disconnection
      this.socket.on('disconnect', (reason) => {
        if (this.currentlyConnected) {
          this.currentlyConnected = false;
          this.toastr.error('Du bist nicht mehr mit dem Server verbunden', 'Die Verbindung ist abgebaut worden');
          console.log('[RemoteControlReceiver] Disconnected:', reason);
        }
      });

      // Handle errors
      this.socket.on('error', (error) => {
        console.error('[RemoteControlReceiver] Socket error:', error);
      });

    } catch (error) {
      console.error('error setting up Socket.IO with remote control receiver', error);
    }
  }



}

