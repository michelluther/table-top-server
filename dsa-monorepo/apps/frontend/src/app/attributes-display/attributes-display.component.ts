import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './../domain/hero'
import { ActualAttribute } from 'app/domain/actualAttribute';
import { EditDialogComponent } from './../edit-dialog/edit-dialog.component'

@Component({
    selector: 'attributes-display',
    providers: [EditDialogComponent],
    templateUrl: './attributes-display.component.html',
    styleUrls: ['./attributes-display.component.css'],
    standalone: false
})
export class AttributesDisplayComponent implements OnInit {


  @Input()
  hero: Hero
  editMode: boolean

  constructor(public editDialog: EditDialogComponent) { 
    this.editMode = false
  }

  ngOnInit() {
  }

}
