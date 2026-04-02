import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../domain/hero';

@Component({
    selector: 'spell-search',
    templateUrl: './spell-search.component.html',
    styleUrls: ['./spell-search.component.css'],
    standalone: false
})
export class SpellSearchComponent implements OnInit {

  @Input()
  hero: Hero;
  @Input()
  searchActive: boolean;
  spellSearchTerm: String = '';

  constructor() { }

  ngOnInit() {
  }

}
