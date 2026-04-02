import { Skill } from './skill';

import { ChangeDetectorRef } from '@angular/core';

export class SkillGroup {

  id: number;
  name: String;
  skills: Skill[];
  hasThreeDices: boolean;
  hasAttackParade: boolean;
  isLongRangeWeaponSkill: boolean;
  skillType: String;

  constructor(dataObject: Object, private chRef: ChangeDetectorRef) {
    this.name = dataObject['name'];
    this.id = dataObject['id'];
    if (this.id == 1 || this.id == 8) {
      this.hasThreeDices = false;
    } else {
      this.hasThreeDices = true;
    }
    if (this.id == 1) {
      this.hasAttackParade = true;
    } else {
      this.hasAttackParade = false;
    }
    if (this.id == 8) {
      this.isLongRangeWeaponSkill = true;
    } else {
      this.isLongRangeWeaponSkill = false;
    }
    this.skillType = dataObject['skill_group']['name']
  }

  setSkills(skills: Skill[]) {
    this.skills = skills;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getAscensionPricingTableColumn():string {
    return `price${this.skillType}`
  }

  getSkillsPromise(): Promise<Object[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve([{ value: 1 }, { value: 2 }]), 1000)
    });;
  }

}