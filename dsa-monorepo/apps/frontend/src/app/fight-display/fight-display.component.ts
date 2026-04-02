import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fight-display',
    templateUrl: './fight-display.component.html',
    styleUrls: ['./fight-display.component.css'],
    standalone: false
})
export class FightDisplayComponent implements OnInit {

  @Input()
  heroes: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
