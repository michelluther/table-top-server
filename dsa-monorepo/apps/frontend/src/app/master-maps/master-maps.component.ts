import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Adventure, AdventureImageAdmin, AdventureService } from './../domain/adventure.service';
import { ImagePopupComponent } from './../image-popup/image-popup.component';

@Component({
    selector: 'app-master-maps',
    templateUrl: './master-maps.component.html',
    styleUrls: ['./master-maps.component.css'],
    providers: [AdventureService],
    standalone: false
})
export class MasterMapsComponent implements OnInit {

  public adventures: Adventure[] = [];
  public selectedAdventureId: string = null;
  public images: AdventureImageAdmin[] = [];
  public caption = '';
  public sequence: number = null;
  public selectedFile: File = null;
  public isUploading = false;
  public errorMessage: string = null;
  public savingImageId: number = null;

  constructor(private adventureService: AdventureService, private dialog: MatDialog) { }

  ngOnInit() {
    this.adventureService.getAdventures().then(adventures => {
      this.adventures = adventures;
      if (adventures.length > 0) {
        this.selectedAdventureId = adventures[0].id;
        this.loadImages();
      }
    });
  }

  onAdventureChange(): void {
    this.loadImages();
  }

  loadImages(): void {
    if (!this.selectedAdventureId) return;
    this.adventureService.getAdventureImages(this.selectedAdventureId).then(images => {
      this.images = images;
      this.sortImages();
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files && input.files.length > 0 ? input.files[0] : null;
  }

  upload(): void {
    if (!this.selectedAdventureId || !this.selectedFile) return;
    this.isUploading = true;
    this.errorMessage = null;
    this.adventureService.uploadAdventureImage(this.selectedAdventureId, this.selectedFile, this.caption, this.sequence)
      .then(image => {
        this.images.push(image);
        this.sortImages();
        this.caption = '';
        this.sequence = null;
        this.selectedFile = null;
        this.isUploading = false;
      })
      .catch(() => {
        this.errorMessage = 'Hochladen fehlgeschlagen.';
        this.isUploading = false;
      });
  }

  toggleActive(image: AdventureImageAdmin): void {
    this.adventureService.updateAdventureImage(this.selectedAdventureId, image.id, { isActive: !image.isActive })
      .then(updated => {
        image.isActive = updated.isActive;
      });
  }

  saveDetails(image: AdventureImageAdmin): void {
    this.savingImageId = image.id;
    this.adventureService.updateAdventureImage(this.selectedAdventureId, image.id, {
      caption: image.caption,
      sequence: image.sequence,
    })
      .then(updated => {
        image.caption = updated.caption;
        image.sequence = updated.sequence;
        this.sortImages();
        this.savingImageId = null;
      })
      .catch(() => {
        this.savingImageId = null;
      });
  }

  showImage(image: AdventureImageAdmin): void {
    this.dialog.open(ImagePopupComponent, {
      panelClass: 'fullscreen-image-dialog',
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: {
        url: image.url,
        caption: image.caption,
      },
    });
  }

  remove(image: AdventureImageAdmin): void {
    this.adventureService.deleteAdventureImage(this.selectedAdventureId, image.id).then(() => {
      this.images = this.images.filter(existing => existing.id !== image.id);
    });
  }

  private sortImages(): void {
    this.images.sort((a, b) => a.sequence - b.sequence);
  }

}
