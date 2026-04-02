import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  HeroLifeService
} from './../hero-controls/hero-life.service';
import {
  MatRipple
} from '@angular/material/core'

const rippleColors = {
  good: '#C4F779',
  bad: '#E16772'
}

@Component({
    selector: 'life-display',
    templateUrl: './life-display.component.html',
    styleUrls: ['./life-display.component.css'],
    standalone: false
})

export class LifeDisplayComponent implements OnInit {

  private _currentLife: number
  private _maxLife: number
  private lifeDisplay: number


  constructor(private websocketService: HeroLifeService) {}

  ngOnInit() {}

  @Input()
  get currentLife(): number {
    return this._currentLife;
  }
  set currentLife(currentLife: number) {

    this._currentLife = currentLife
  }


  @Input()
  get maxLife(): number {
    return this._maxLife
  }
  set maxLife(maxLife: number) {
    this._maxLife = maxLife
  }

  @Input()
  get life() {
    return this.lifeDisplay;
  }

  public rippleDisplay(valueUpdate: number): void {
    const rippleColor = valueUpdate < 0 ? rippleColors.bad : rippleColors.good
    
  }

  // Test stuff
  public rippleText(text: String): void {
  };

}
