import { Pipe, PipeTransform } from '@angular/core';
import { Character } from "./adventure.service";



export class Fight {
    private _combatants: Array<Character>;

    constructor(public name:string) {}

    get combatants(): Array<Character> {
        return this._combatants
    } 
}

export interface Combatant {

    id: number
    isGood: boolean
    currentLife: number
    name: string
    selectedForFight: boolean 
    initiative: number
    currentInitiative: number
    fightTexts: Array<string>
    nextUp: boolean
    isHero: boolean
}

@Pipe({
    name: 'MatchesCombatantSearchTerm',
    standalone: false
})

export class MatchesCombatantSearchTerm implements PipeTransform {

    transform(combatants: Array<Combatant>, searchTerm: string): Array<Combatant> {
        if (searchTerm != '' && searchTerm !== undefined) {
            return combatants.filter(combatant => {
                return (combatant.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            })
        } else {
            return combatants;
        }
    }
}

@Pipe({
    name: 'IsGoodFighter',
    standalone: false
})

export class IsGoodFighter implements PipeTransform {

    transform(combatants: Array<Combatant>, isGood: boolean): Array<Combatant> {
        return combatants.filter(combatant => combatant.isGood !== !isGood)
        
    }
}