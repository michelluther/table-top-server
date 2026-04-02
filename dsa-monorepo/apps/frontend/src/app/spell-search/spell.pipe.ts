import { Pipe, PipeTransform } from '@angular/core';
import { ActualSpell } from '../domain/actualSpell';
import { ActualSpellGroup } from '../domain/actualSpellGroup';

@Pipe({
    name: 'MatchesSpellSearchTerm',
    standalone: false
})

export class MatchesSpellSearchTerm implements PipeTransform {

    transform(spells: Array<ActualSpell>, searchTerm: string): Array<ActualSpell> {
        if (searchTerm != '' && searchTerm !== undefined) {
            return spells.filter(spell => {
                return (spell.getSpell().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            })
        } else {
            return spells;
        }
    }
}

@Pipe({
    name: 'MatchesSpellSearchTermChildren',
    standalone: false
})

export class MatchesSpellSearchTermChildren implements PipeTransform {

    transform(spellGroups: Array<ActualSpellGroup>, searchTerm: string): Array<ActualSpellGroup> {
        if (searchTerm != '' && searchTerm !== undefined) {
            return spellGroups.filter(spellGroup => {
                return (spellGroup.getSpells().filter(spell => spell.getSpell().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)).length > 0;
            })
        } else {
            return spellGroups;
        }
    }
}