import { Component, Inject, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-experience-addition',
    templateUrl: './experience-addition.component.html',
    styleUrls: ['./experience-addition.component.css'],
    standalone: false
})
export class ExperienceAdditionComponent implements OnInit {

  @Output()
  confirm = new EventEmitter()
  @Output()
  cancel = new EventEmitter()

  public newPointsToAdd: number = 10

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: ConfirmationData) { }

  ngOnInit() {
  }

  public raiseAccept(): void {
    this.confirm.emit(this.newPointsToAdd)
  }

  public raiseCancel(): void {
    this.cancel.emit()
  }

}

export class ConfirmationData {
  constructor(public currentPoints: number, public newPointsToAdd: number){}
}
