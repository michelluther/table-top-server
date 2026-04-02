import { Hero } from './hero';
import { Skill } from "./skill";
import { SkillGroup } from "./skillgroup";

export class ActualSkill {

  assignmentId: number;
  value: number;
  hero: Hero;
  isAssignedToHero: boolean;

  constructor(actualSkill: Object, hero: Hero, private skill: Skill, private skillGroup: SkillGroup) {
    this.assignmentId = actualSkill ? actualSkill['assignmentId'] : null;
    this.value = actualSkill ? actualSkill['value'] : 0;
    this.isAssignedToHero = actualSkill ? true : false;
    this.hero = hero;
  }

  getSkill(): Skill {
    return this.skill;
  };

  getAttack(): number {
    return this.hero.getAttackOfWeaponSkill(this.skill);
  };

  getParade(): number {
    return this.hero.getParadeOfWeaponSkill(this.skill);
  };

  getSkillGroup(): SkillGroup {
    return this.skillGroup;
  }

  get dice1Value(): number {
    return this.hero.getAttribute(this.getSkill().dice1.id).value
  }
  
  get dice2Value(): number {
    return this.hero.getAttribute(this.getSkill().dice2.id).value
  }
  
  get dice3Value(): number {
    return this.hero.getAttribute(this.getSkill().dice3.id).value
    
  }
}