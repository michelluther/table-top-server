import { Component, OnInit } from '@angular/core';
import { Adventure, AdventureService } from './../domain/adventure.service';

import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-overview',
    templateUrl: './admin-overview.component.html',
    styleUrls: ['./admin-overview.component.css'],
    providers: [AdventureService],
    standalone: false
})
export class AdminOverviewComponent implements OnInit {

  private adventures: Array<Adventure>

  constructor(public adventureService: AdventureService, private router: Router) {
    this.adventureService.getAdventures().then(adventures => {
      this.adventures = adventures
    })
  }

  ngOnInit() {
  }

  public sendImage(): void {

  }

  public startFight(): void {
    this.router.navigate(['master/fight/start']);
  }
  public showHeroes(): void {
    this.router.navigate(['master/heroes']);
  }

  public startTimer(): void {
    this.router.navigate(['master/startTimer'])
  }

}
