import { Component, Input, OnInit } from '@angular/core';
import { ActualSpell } from 'app/domain/actualSpell';
import { Hero } from 'app/domain/hero';
import { HeroLifeService } from 'app/hero-controls/hero-life.service';

@Component({
    selector: 'edit-spell',
    templateUrl: './edit-spell.component.html',
    styleUrls: ['./edit-spell.component.css'],
    standalone: false
})
export class EditSpellComponent implements OnInit {

  @Input()
  spell: ActualSpell
  @Input()
  costOfAscension: number
  @Input()
  hero:Hero
  private _state:String
  private _service: HeroLifeService;

  constructor(private service:HeroLifeService) { 
    this._service = service
  }

  ngOnInit() {
  }

  public get targetValue():number {
    if(this.spell.value === -7) return 0
    else return this.spell.value + 1
  }

  public increaseSpell():void {
    this._state = 'toBeConfirmed'
  }

  public cancelIncrease(): void {
    this._state = ''
  }
  
  public confirmIncrease():void {
    this._service.sendUpate({
      heroId: this.hero.id,
      type: 'updateSpell',
      skillId: this.spell.getSpell().id,
      assignmentId: this.spell.assignmentId,
      value: this.targetValue,
      price: this.costOfAscension
    });
    this.spell.value = this.targetValue;
    this.hero.experience_used += this.costOfAscension;
    // this.heroMU
    this._state = ''
  }

  get state(): String {
    return this._state
  }

}
