import { Component, OnInit } from '@angular/core';
import { RemoteControlService } from './remote-control.service'
import { Subject, Observable, Subscription, Observer } from 'rxjs';
import { OperationFactory, RemoteControlOperation } from './../domain/remoteControlOperation'
import { ChooseImageComponent, ImagePopupData } from './../choose-image/choose-image.component'
import { MatDialog } from '@angular/material/dialog';
import { Image } from 'app/domain/adventure.service';

@Component({
    selector: 'remote-control',
    templateUrl: './remote-control.component.html',
    styleUrls: ['./remote-control.component.css'],
    standalone: false
})
export class RemoteControlComponent implements OnInit {

  private service: RemoteControlService
  private remoteControlSubject: Subject<any>
  private remoteControlReceiverSubscription: Subscription

  constructor(websocketService: RemoteControlService, public dialog: MatDialog) {
    this.service = websocketService;
  }

  ngOnInit() {
  }

  private sendRemoteControlOperation(type: string, target: string, parameters: Array<string>): void {
    const operation = OperationFactory.createOperation(type, target, parameters)
    this.service.sendRemoteControlInstruction(operation)
  }

  public sendImage(url: string): void {
    const dialogRef = this.dialog.open(ChooseImageComponent, {
      // data: new ImagePopupData(null, [new Image('http://test.gif', 'the test')])
      // width: '250px',
    });
    // this.sendRemoteControlOperation('openImage', 'all', ['http://www.ulisses-spiele.de/media/images/produkt-produkt_das-schwarze-auge_dsa-logo_wandtattoo_3161_c.jpg'])
  }

}
