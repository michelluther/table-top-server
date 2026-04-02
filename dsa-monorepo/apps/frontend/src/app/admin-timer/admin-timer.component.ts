import { Component, OnInit } from '@angular/core';
import { TimeRemaining, Timer, TimerService } from 'app/domain/timer.service';

@Component({
    selector: 'app-admin-timer',
    templateUrl: './admin-timer.component.html',
    styleUrls: ['./admin-timer.component.css'],
    standalone: false
})
export class AdminTimerComponent implements OnInit {

  public timeRemaining: TimeRemaining

  constructor(private timerService:TimerService, public timer:Timer) { 
    this.timer = timerService.timer
    this.timeRemaining = timerService.timeRemaining
  }

  ngOnInit() {
  }

  addToTimerMinutes(minutes:number) {
    this.timer.minutes += minutes
  }
  addToTimerSeconds(seconds:number) {
    this.timer.seconds += seconds
  }
  subtractFromTimerMinutes(minutes:number) {
    this.timer.minutes -= minutes
  }
  subtractFromTimerSeconds(seconds:number) {
    this.timer.seconds -= seconds
  }

  setTimer(title:string, minutes:number, seconds:number):void {
    this.timer.title = title,
    this.timer.minutes = minutes
    this.timer.seconds = seconds
  }

  startTimer():void {
    this.timerService.startTimer()
  }
  
  stopTimer(): void {
    this.timerService.clearTimer()
  }

}


