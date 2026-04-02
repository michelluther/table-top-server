import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface ImagePopupData {
  url: string;
  caption: string;
}


@Component({
    selector: 'app-image-popup',
    templateUrl: './image-popup.component.html',
    styleUrls: ['./image-popup.component.css'],
    standalone: false
})
export class ImagePopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ImagePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImagePopupData) { }

  ngOnInit() {
  }

}
