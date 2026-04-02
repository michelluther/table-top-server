import { Component, Input, OnInit } from '@angular/core';
import { ActualSkill } from 'app/domain/actualSkill';
import { Hero } from 'app/domain/hero';
import { HeroLifeService } from 'app/hero-controls/hero-life.service';

@Component({
    selector: 'edit-talent',
    templateUrl: './edit-talent.component.html',
    styleUrls: ['./edit-talent.component.css'],
    standalone: false
})
export class EditTalentComponent implements OnInit {

  @Input()
  skill: ActualSkill
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
    if(this.skill.value === -7) return 0
    else return this.skill.value + 1
  }

  public increaseSkill():void {
    this._state = 'toBeConfirmed'
  }

  public cancelIncrease(): void {
    this._state = ''
  }
  
  public confirmIncrease():void {
    this._service.sendUpate({
      heroId: this.hero.id,
      type: 'updateSkill',
      skillId: this.skill.getSkill().id,
      assignmentId: this.skill.assignmentId,
      value: this.targetValue,
      price: this.costOfAscension
    });
    this.skill.value = this.targetValue;
    this.hero.experience_used += this.costOfAscension;
    // this.heroMU
    this._state = ''
  }

  get state(): String {
    return this._state
  }

}
