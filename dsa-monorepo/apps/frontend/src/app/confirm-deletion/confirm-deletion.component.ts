import { Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'confirm-deletion',
    templateUrl: './confirm-deletion.component.html',
    styleUrls: ['./confirm-deletion.component.css'],
    standalone: false
})
export class ConfirmDeletionComponent implements OnInit {


  @Output()
  confirm = new EventEmitter()
  @Output()
  cancel = new EventEmitter()

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: ConfirmationData) { }


  ngOnInit() {
  }

  public raiseAccept(): void {
    this.confirm.emit()
  }

  public raiseCancel(): void {
    this.cancel.emit()
  }

}

export class ConfirmationData {
  constructor(public title: string, public text: string){}
}
