import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TimeRemaining, Timer } from 'app/domain/timer.service';

@Component({
    selector: 'app-timer-dialog',
    templateUrl: './timer-dialog.component.html',
    styleUrls: ['./timer-dialog.component.css'],
    standalone: false
})
export class TimerDialogComponent implements OnInit {

  @Output()
  stopTimer = new EventEmitter()
  @Output()
  cancelDialog = new EventEmitter()

  constructor(
    public dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) public timerData: {timer: Timer, timeRemaining: TimeRemaining} ) { 

    }

  ngOnInit() {
  }

  public raiseStopTimer(): void {
    this.stopTimer.emit()
  }

  public raiseCancel(): void {
    this.cancelDialog.emit()
  }

}
