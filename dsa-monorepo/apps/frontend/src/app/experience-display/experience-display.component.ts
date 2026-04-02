import { Component, Input, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Hero } from "app/domain/hero";
import {
  ConfirmationData,
  ExperienceAdditionComponent,
} from "app/experience-addition/experience-addition.component";
import { HeroLifeService } from "app/hero-controls/hero-life.service";

@Component({
  selector: "experience-display",
  templateUrl: "./experience-display.component.html",
  styleUrls: ["./experience-display.component.css"],
  standalone: false,
})
export class ExperienceDisplayComponent implements OnInit {
  @Input()
  experience: string;

  @Input()
  availablePoints: number;

  @Input()
  hero: Hero;

  private addExperiencePointsDialogRef: MatDialogRef<ExperienceAdditionComponent>;

  constructor(
    private dialog: MatDialog,
    private lifeService: HeroLifeService,
  ) {}

  ngOnInit() {}

  openAddExperiencePointsDialog(): void {
    this.addExperiencePointsDialogRef = this.dialog.open(
      ExperienceAdditionComponent,
      { data: new ConfirmationData(this.hero.experience, 0) },
    );
    this.addExperiencePointsDialogRef.componentInstance.confirm.subscribe(
      this.addExperiencePoints.bind(this),
    );
    this.addExperiencePointsDialogRef.componentInstance.cancel.subscribe(
      this.closeAddExperiencePointsDialog.bind(this),
    );
  }

  addExperiencePoints(additionalPoints): void {
    this.lifeService.sendUpate({
      type: "addExperiencePoints",
      heroId: this.hero.id,
      additionalPoints: additionalPoints,
    });
    this.closeAddExperiencePointsDialog();
  }

  closeAddExperiencePointsDialog(): void {
    this.addExperiencePointsDialogRef.close();
  }
}
