import { Component, OnInit } from '@angular/core';
import { AdventureService } from 'app/domain/adventure.service';
import { Combatant, Fight } from 'app/domain/fight';
import { Hero } from 'app/domain/hero';
import { HeroService } from 'app/domain/hero.service';
import { NPCType } from 'app/domain/npc';
import { OperationFactory, operationTypes } from 'app/domain/remoteControlOperation';
import { RemoteControlService } from 'app/remote-control/remote-control.service';

@Component({
    selector: 'app-fight-setup',
    templateUrl: './fight-setup.component.html',
    styleUrls: ['./fight-setup.component.css'],
    standalone: false
})
export class FightSetupComponent implements OnInit {

  npcTypes: NPCType[]
  state: string
  allSet: boolean
  heroes: Combatant[]
  npcs: Combatant[]
  createNPCNow: boolean = false
  existingFights: Fight[]

  public fightName: string = 'Rumble in the djungle'

  combatants: Combatant[]

  combatantSearchTerm: string = ''

  constructor(private remoteControlService:RemoteControlService, private adventureService:AdventureService, private heroService:HeroService) {
    this.state = 'initial'
    this.heroService.getHeroes().then(heroes => {
      for (let index = 0; index < heroes.length; index++) {
        const hero = heroes[index];
        hero.selectedForFight = false
      }
      this.heroes = heroes;
    })
    this.adventureService.getNPCs().then(npcs => {
      for (let index = 0; index < npcs.length; index++) {
        const npc = npcs[index];
        npc.selectedForFight = false
      }
      this.npcs = npcs
    })
    this.adventureService.getNPCTypes().then(npcTypes => {
      this.npcTypes = npcTypes
    })
    this.adventureService.getFights().then(fights => {
      this.existingFights = fights
    })
   }



  ngOnInit() {
    
  }

  initNPCGeneration() {
    this.createNPCNow = true;
  }

  startNewFight(){
    this.state = 'setup_1'
  }
  goToStep2() {
    this.state = 'setup_2'
    this.combatants = this.heroes.filter(hero => hero.selectedForFight === true).concat(this.npcs.filter(npc => npc.selectedForFight === true))
  }
  goToStep3() {
    this.state = 'setup_overview'
    this.combatants = this.combatants.concat(this.heroes.filter(hero => hero.selectedForFight === true && hero.isGood === false)).concat(this.npcs.filter(npc => npc.selectedForFight === true && npc.isGood === false))
  }

  calculateInititives(){
    for (let index = 0; index < this.combatants.length; index++) {
      const combatant = this.combatants[index];
      combatant.currentInitiative = combatant.initiative +  + Math.floor(Math.random()*6+1)
    }
    this.combatants.sort((combatantA, combatantB) => {
      return combatantB.currentInitiative - combatantA.currentInitiative
    })
    this.allSet = true
  }

  nameIt() {
    this.state = 'name'
  }

  go() {
    this.state = 'fight'
    for (let index = 0; index < this.combatants.length; index++) {
      const combatant = this.combatants[index];
      if(index === 0) combatant.nextUp = true
      else combatant.nextUp = false
    }
    this.startFight(this.fightName, this.adventureService.getCurrentAdventureId(), this.combatants.map(combatant => {
        return {
          isGood: combatant.isGood,
          isCharacter: combatant instanceof Hero,
          id: combatant.id,
          initiative: combatant.currentInitiative
        }
    }))
  }

  nextFighter(){
    let nextFighterIsUp = false

    for (let index = 0; index < this.combatants.length; index++) {
      const combatant = this.combatants[index];
      if(combatant.nextUp === true){
          nextFighterIsUp = true;
        combatant.nextUp = false
      } else if(nextFighterIsUp) {
        combatant.nextUp = true
        nextFighterIsUp = false
      }
    }

    if(nextFighterIsUp) this.combatants[0].nextUp = true
  }


  createNPC(templateId, name) {
    this.remoteControlService.sendRemoteControlInstruction(OperationFactory.createOperation(operationTypes.createNPC, 'self', {name: name, templateId: templateId}))
  }

  startFight(fightNameParam, currentAdventureId, participants){
    this.remoteControlService.sendRemoteControlInstruction(OperationFactory.createOperation(operationTypes.startFight, 'self', {name: fightNameParam, adventureId: currentAdventureId,  participants: participants}))
  }

  continueFight(fight:Fight) {
  }

  addAllHeroes() {
    this.heroes.forEach(hero => {
      hero.selectedForFight = true
    });
  }
  
  removeAllHeroes() {
    this.heroes.forEach(hero => {
      hero.selectedForFight = false
    });
  }

}
