import { Combatant } from "./fight";

export class NPCType {

    constructor(public id: string, public name: string){}
}

export class NPC implements Combatant {
    
    selectedForFight: boolean;

    constructor(public id:number, public name: string, public isGood: boolean, public currentLife: number, private _initiative: number , private _weapon_1: string, private _attack_1: number, private _parade_1: number, private _damage_1: string, private _weapon_2: string, private _attack_2: number, private _parade_2: number, private _damage_2: string){}
    
    isHero: boolean = false;
    nextUp: boolean;
    currentInitiative: number;

    get initiative(): number {
        return this._initiative; 
    }

    set initiative(initiative: number) {
        this._initiative = initiative
      }
      
    get fightTexts(): string[]{
        const fightTexts = [`${this._weapon_1}`, 
            `AT: ${this._attack_1}, PA: ${this._parade_1}`, 
            `TP: ${this._damage_1}`]
        if(this._weapon_2) fightTexts.concat([`${this._weapon_2}`, 
        `AT: ${this._attack_2}, PA: ${this._parade_2}`, 
        `TP: ${this._damage_2}`])
        return fightTexts
      }
    
}