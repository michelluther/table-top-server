import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../domain/hero';

@Component({
    selector: 'talent-search',
    templateUrl: './talent-search.component.html',
    styleUrls: ['./talent-search.component.css'],
    standalone: false
})
export class TalentSearchComponent implements OnInit {

  @Input()
  hero: Hero;
  @Input()
  searchActive: boolean;
  talentSearchTerm: String = '';
  @Input() 
  editMode: boolean

  constructor() { }

  ngOnInit() {
  }

}
