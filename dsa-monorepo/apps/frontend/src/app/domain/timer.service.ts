import { Injectable } from '@angular/core';

import { RemoteControlService } from 'app/remote-control/remote-control.service';
import { OperationFactory, operationTypes } from './remoteControlOperation';



@Injectable()
export class TimerService { 

    public readonly timer: Timer
    public readonly timeRemaining: TimeRemaining 

    constructor(private remoteControlService:RemoteControlService){
        this.timer = new Timer()
        this.timer.minutes = 0
        this.timer.seconds = 0
        this.timer.title = 'Denkt nach'
        this.timer.running = false
        this.timeRemaining  = new TimeRemaining(0,0,0)
    }

    public startTimer(isLocal: boolean = false): void {
        this.timer.isLocal = isLocal
        const timerPeriod:number = this.timer.getTimerMilliseconds()
        this.timer.timerId = window.setTimeout(this.stopTimer.bind(this), timerPeriod)
        if(this.timer.isLocal === false){
            const remoteControlOperation = OperationFactory.createOperation(operationTypes.startTimer, 'all', this.timer)
            this.remoteControlService.sendRemoteControlInstruction(remoteControlOperation)
        }
        
        this.timer.running = true;
        this.timeRemaining.minutes = this.timer.minutes
        this.timeRemaining.seconds = this.timer.seconds
        this.timeRemaining.intervalId = window.setInterval(this._countDown.bind(this), 1000, this.timeRemaining)
      }
    

    public stopTimer(letOthersKnow: boolean = true): void {
        window.clearTimeout(this.timer.timerId)
        window.clearInterval(this.timeRemaining.intervalId)
        this.timer.running = false
        if(letOthersKnow === true){
            const remoteControlOperation = OperationFactory.createOperation(operationTypes.timerFinished, 'all', this.timer)
            this.remoteControlService.sendRemoteControlInstruction(remoteControlOperation)
        }
    }

    public clearTimer(): void {
        window.clearTimeout(this.timer.timerId)
        window.clearInterval(this.timeRemaining.intervalId)
        this.timer.running = false
        const remoteControlOperation = OperationFactory.createOperation(operationTypes.timerStopped, 'all', this.timer)
        this.remoteControlService.sendRemoteControlInstruction(remoteControlOperation)
    }

    private _countDown(timeRemaining:TimeRemaining):void {
        timeRemaining.seconds --
        if(timeRemaining.seconds < 0) {
            timeRemaining.minutes --
            if (timeRemaining.minutes < 0)
            this.stopTimer();
            else timeRemaining.seconds = 59
        }
    }

}

export class Timer {

    public timerId: number
    public title:string
    public minutes: number
    public seconds: number
    public running: boolean
    public isLocal: boolean = false

    constructor() {}

    public getTimerMilliseconds():number {
      return (this.seconds + this.minutes*60) * 1000 
    }
}

export class TimeRemaining { 

    constructor(
        private _intervalId: number,
        private _minutes: number,
        private _seconds: number){}
  
    public get secondsString(): string {
      return this.seconds.toString().padStart(2, '0')
    }
  
    public get intervalId(): number {
      return this._intervalId
    }
  
    public get minutes(): number {
      return this._minutes
    }
    public get seconds(): number {
      return this._seconds
    }
    public set minutes(minutes:number) {
     this._minutes = minutes
    }
    public set seconds(seconds:number) {
      this._seconds = seconds
    }
    public set intervalId(intervalId:number) {
      this._intervalId = intervalId
    }
  
  }