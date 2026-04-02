import { Component, Input, OnInit } from '@angular/core';
import { Combatant } from 'app/domain/fight';

@Component({
    selector: 'combatant',
    templateUrl: './combatant.component.html',
    styleUrls: ['./combatant.component.css'],
    standalone: false
})
export class CombatantComponent implements OnInit {

  @Input()
  combatant: Combatant
  @Input()
  usedForGood: boolean
  @Input()
  sequence: number
  @Input()
  isActive: boolean

  constructor() { }

  ngOnInit() {
  }

  addToFight(){
    this.combatant.selectedForFight = true
    this.combatant.isGood = this.usedForGood
  }
  
  removeFromFight(){
    this.combatant.selectedForFight = false
    this.combatant.isGood = null
    
  }

  gotHit(hitPoints:number){
    this.combatant.currentLife =  this.combatant.currentLife - hitPoints
  }

}
