import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'app/domain/hero';

@Component({
    selector: 'basic-data-display',
    templateUrl: './basic-data-display.component.html',
    styleUrls: ['./basic-data-display.component.css'],
    standalone: false
})
export class BasicDataDisplayComponent implements OnInit {


  @Input()
  hero: Hero

  constructor() { }

  get raceName(): string {
    return (this.hero?.race as any)?.name || this.hero?.race || '';
  }

  ngOnInit() {
  }

}
