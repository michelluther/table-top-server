import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActualAttribute } from 'app/domain/actualAttribute';
import { AscensionPricing } from 'app/domain/ascensionPricing'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnhancementPricingService } from 'app/domain/enhancement-pricing.service';
import { Attribute } from 'app/domain/attribute';
import { Hero } from 'app/domain/hero';
import { HeroLifeService } from './../hero-controls/hero-life.service';

@Component({
    selector: 'edit-attribute',
    templateUrl: './edit-attribute.component.html',
    styleUrls: ['./edit-attribute.component.css'],
    standalone: false
})
export class EditAttributeComponent implements OnInit {

  private _costOfAscension:number
  private _attribute: ActualAttribute
  private _hero:Hero
  private _state:String
  private _service: HeroLifeService;
  

  constructor(private service:HeroLifeService) { 
    this._service = service
  }

  ngOnInit() {

  }

  @Input()
  set attribute(attribute){
    this._attribute = attribute
  }

  get attribute():ActualAttribute {
    return this._attribute
  }

  @Input()
  set hero(hero){
    this._hero = hero
  }

  get hero():Hero {
    return this._hero
  }

  @Input()
  set costOfAscension(costOfAscension:number){
    this._costOfAscension = costOfAscension
  }

  get costOfAscension():number {
    return this._costOfAscension
  }

  public cancelIncrease(): void {
    this._state = ''
  }

  public increaseAttribute():void {
    this._state = 'toBeConfirmed'
  }
  
  public confirmIncrease():void {
    this._service.sendUpate({
      heroId: this._hero.id,
      type: 'updateAttribute',
      attribute: this._attribute.attribute.id,
      value: this.targetValue,
      price: this._costOfAscension
    });
    // this.heroMU
    this._state = ''
    this._attribute.value = this.targetValue;
    this.hero.experience_used += this.costOfAscension;
  }

  get targetValue(): number {
    return this._attribute.value + 1
  }

  get state(): String {
    return this._state
  }

}
