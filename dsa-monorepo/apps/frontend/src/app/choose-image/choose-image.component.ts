import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UrlService } from 'app/url.service';
import { Adventure, AdventureService, Image } from './../domain/adventure.service';
import { OperationFactory, operationTypes } from './../domain/remoteControlOperation';
import { RemoteControlService } from './../remote-control/remote-control.service';

export class ImagePopupData {
  constructor(public image: Image, public imageList: Array<Image>) {

  }
}


@Component({
    selector: 'app-choose-image',
    templateUrl: './choose-image.component.html',
    styleUrls: ['./choose-image.component.css'],
    providers: [AdventureService, RemoteControlService],
    standalone: false
})
export class ChooseImageComponent implements OnInit {

  public images: Array<Image>
  private adventures: Array<Adventure>
  private baseUrl: string

  constructor(
    public adventureService: AdventureService,
    public remoteControlService: RemoteControlService,
    public dialogRef: MatDialogRef<ChooseImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImagePopupData) {
    this.images = []
    this.baseUrl = UrlService.getBaseUrl()
  }

  ngOnInit() {
    this.adventureService.getAdventures().then(adventures => {
      this.adventures = adventures
      this.adventures.forEach(adventure => {
        // this.images = this.images.concat(adventure.elements)
      })
    })

  }

  public sendImage(image: Image): void {
    this.remoteControlService.sendRemoteControlInstruction(OperationFactory.createOperation(operationTypes.openImage,
      'all', [image.url, image.caption]))
  }

}

