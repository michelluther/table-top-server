import { Spell } from "./spell";
import { SpellService } from "./spells.service";
import { SpellGroup } from "./spellGroup";
import { ActualSpell } from "./actualSpell";

export class ActualSpellGroup {

    constructor(private spellGroup:SpellGroup, private spells: ActualSpell[] ) { }

    getSpellGroup():SpellGroup {
        return this.spellGroup;
    }

    setSpells(spells: Array<ActualSpell>){
        this.spells = spells;
    } 

    getSpells(): ActualSpell[] {
        return this.spells;
    }
  }