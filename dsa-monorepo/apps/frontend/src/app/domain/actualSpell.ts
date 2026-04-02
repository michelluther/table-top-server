import { Hero } from './hero';
import { Spell } from "./spell";
import { SpellGroup } from "./spellGroup";

export class ActualSpell {

  assignmentId: number;
  value: number;
  hero: Hero;
  isAssignedToHero: boolean;

  constructor(actualSpell: Object, hero: Hero, private spell: Spell, private spellGroup: SpellGroup) {
    this.assignmentId = actualSpell ? actualSpell['assignmentId'] : null;
    this.value = actualSpell ? actualSpell['value'] : -7;
    this.isAssignedToHero = actualSpell ? true : false;
    this.hero = hero;
  }

  getSpell(): Spell {
    return this.spell;
  };

  getSpellGroup(): SpellGroup {
    return this.spellGroup;
  }

  get dice1Value(): number {
    return this.hero.getAttribute(this.getSpell().dice1).value
  }

  get dice2Value(): number {
    return this.hero.getAttribute(this.getSpell().dice2).value
  }

  get dice3Value(): number {
    return this.hero.getAttribute(this.getSpell().dice3).value
  }
}