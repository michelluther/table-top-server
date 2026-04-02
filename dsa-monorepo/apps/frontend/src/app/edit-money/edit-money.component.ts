
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountEntry } from 'app/domain/moneyInventory';

@Component({
    selector: 'app-edit-money',
    templateUrl: './edit-money.component.html',
    styleUrls: ['./edit-money.component.css'],
    standalone: false
})
export class EditMoneyComponent implements OnInit {

  @Output()
  confirm = new EventEmitter<EditMoneyData>()
  @Output()
  cancel = new EventEmitter()

  public newAmount: number;
  public accountEntry: AccountEntry;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: AccountEntry) {
    this.newAmount = data.amount;
    this.accountEntry = data
  }

  ngOnInit() {
  }

  public raiseAccept(): void {
    this.confirm.emit(new EditMoneyData(this.accountEntry, this.newAmount))
  }

  public raiseCancel(): void {
    this.cancel.emit()
  }

}

export class EditMoneyData {
  constructor(public accountEntry: AccountEntry, public newAmount: number) { }
}

