import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Skill } from './skill';

import { HeroLifeService } from 'app/hero-controls/hero-life.service';

import {ChangeDetectorRef} from '@angular/core';
import { Hero } from './hero';
import { Armor } from './armor';

@Injectable()
export class ArmorService {
  
  constructor(private service:HeroLifeService) {
  }

  addArmor(armor: Armor, hero: Hero): Promise<Armor> {
    return new Promise((resolve, reject) => {
      this.service.sendUpate({
          heroId: hero.id,
          type: 'addArmor',
          armorName: armor.name,
          armorRS: armor.rs,
          armorBE: armor.behinderung
      })
      resolve(armor)
  })}

  deleteArmor(armor: Armor, hero: Hero): void {
    new Promise((resolve, reject) => {
      this.service.sendUpate({
          type: 'deleteArmor',
          heroId: hero.id,
          armorId: armor.id
      })
      resolve(armor)
    })
  }
  
}
