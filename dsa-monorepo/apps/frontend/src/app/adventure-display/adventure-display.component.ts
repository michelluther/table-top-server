import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Adventure, AdventureElement, AdventureService } from 'app/domain/adventure.service';
import { ImagePopupComponent } from 'app/image-popup/image-popup.component';


@Component({
    selector: 'adventure-display',
    templateUrl: './adventure-display.component.html',
    styleUrls: ['./adventure-display.component.css'],
    standalone: false
})
export class AdventureDisplayComponent implements OnInit {

  _adventure: Adventure = null;

  constructor(private adventureService:AdventureService, public dialog: MatDialog) { 
    adventureService.getAdventures().then(adventures => {this._adventure = adventures[0]})
  }

  ngOnInit() {
  }

  @Input()
  get adventure():Adventure {
    return this._adventure
  }

  @Input()
  get elements():AdventureElement[] {
    if (this._adventure) return this._adventure.elements
    else return []
  }

  public showItem(element:AdventureElement){
    const dialogRef = this.dialog.open(ImagePopupComponent, {
      // width: '90%',
      maxHeight: '100%',
      height: '90%',
      data: { 
        url: element.imageUrl, 
        caption: element.title 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.debug('The dialog was closed');
    });
  }

}
