import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
    selector: 'app-master-qr-code',
    templateUrl: './master-qr-code.component.html',
    styleUrls: ['./master-qr-code.component.css'],
    standalone: false
})
export class MasterQrCodeComponent implements OnInit {

  public playerUrl: string;
  public qrCodeDataUrl: string = null;
  public errorMessage: string = null;
  public copied = false;

  ngOnInit() {
    this.playerUrl = `${document.baseURI.replace(/\/$/, '')}/player/heroes`;
    QRCode.toDataURL(this.playerUrl, { width: 320, margin: 2 })
      .then(dataUrl => {
        this.qrCodeDataUrl = dataUrl;
      })
      .catch(() => {
        this.errorMessage = 'QR-Code konnte nicht erzeugt werden.';
      });
  }

  copyUrl(): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.playerUrl).then(() => this.onCopied());
      return;
    }
    // navigator.clipboard is only available in secure contexts (https/localhost);
    // this app is typically served over plain http on a LAN IP, so fall back
    // to the legacy selection-based copy mechanism.
    const textarea = document.createElement('textarea');
    textarea.value = this.playerUrl;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      this.onCopied();
    } finally {
      document.body.removeChild(textarea);
    }
  }

  private onCopied(): void {
    this.copied = true;
    setTimeout(() => { this.copied = false; }, 2000);
  }

}
