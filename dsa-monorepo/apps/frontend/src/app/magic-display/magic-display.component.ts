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
    selector: 'magic-display',
    templateUrl: './magic-display.component.html',
    styleUrls: ['./magic-display.component.css'],
    standalone: false
})
export class MagicDisplayComponent implements OnInit {

  private _currentMagicEnergy: number
  private _maxMagicEnergy: number
  private magicDisplay: number

	private _isFocused: boolean;

  constructor(private websocketService: HeroLifeService) {}

  ngOnInit() {}

  @Input()
  get currentMagicEnergy(): number {
    return this._currentMagicEnergy;
  }
  set currentMagicEnergy(currentMagicEnergy: number) {
    this._currentMagicEnergy = currentMagicEnergy
  }


  @Input()
  get maxMagicEnergy(): number {
    return this._maxMagicEnergy
  }
  set maxMagicEnergy(maxMagicEnergy: number) {
    this._maxMagicEnergy = maxMagicEnergy
  }

  @Input()
  get life() {
    return this.magicDisplay;
  }

  public rippleDisplay(valueUpdate: number): void {
    const rippleColor = valueUpdate < 0 ? rippleColors.bad : rippleColors.good
  }


  // Test stuff
  public rippleText(text: String): void {
  };

}
