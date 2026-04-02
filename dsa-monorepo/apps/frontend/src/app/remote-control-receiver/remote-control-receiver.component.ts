import { Component, OnInit } from '@angular/core';
import { UrlService } from 'app/url.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { RemoteControlReceiverService } from './remote-control-receiver.service';



// import { Lightbox } from 'ngx-lightbox';
@Component({
    selector: 'remote-control-receiver',
    templateUrl: './remote-control-receiver.component.html',
    styleUrls: ['./remote-control-receiver.component.css'],
    standalone: false
})
export class RemoteControlReceiverComponent implements OnInit {

  private wsUrl = `${UrlService.getBaseURLWS()}/remoteControl`;
  public remoteControlSubject: Subject<MessageEvent>;
  private connectionInterval: number;
  private currentlyConnected: boolean = false;

  constructor(private websocketService: RemoteControlReceiverService, private toastr: ToastrService) {}
  ngOnInit(): void {
    
  }

  public handleIncommingMessage(message): void {
    let messageData = JSON.parse(message.data);
  }

}
