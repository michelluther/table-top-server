import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Spell } from './spell';
import { SpellGroup } from './spellGroup';

import { ChangeDetectorRef } from '@angular/core';
import { UrlService } from 'app/url.service';

@Injectable()
export class SpellService {

  private spellsUrl = `${UrlService.getBaseUrl()}/spells/`;
  private spellTypesUrl = `${UrlService.getBaseUrl()}/spellTypes/`;

  private spells: Spell[];

  private spellGroups: SpellGroup[];

  private spellGroupsPromise: Promise<SpellGroup[]>;
  private spellsPromise: Promise<Spell[]>;

  constructor(private http: HttpClient, private chRef: ChangeDetectorRef) {
  }

  getSpells(): Promise<Spell[]> {
    if (!this.spellsPromise) {
      this.spellsPromise = this.http.get<any[]>(this.spellsUrl)
        .toPromise()
        .then(response => {
          return this.extractSpells(response);
        })
    }
    return this.spellsPromise;
  }

  getSpellGroups(): Promise<SpellGroup[]> {
    if (!this.spellGroupsPromise) {
      this.spellGroupsPromise = this.http.get<any[]>(this.spellTypesUrl)
        .toPromise()
        .then(response => {
          this.spellGroups = this.extractSpellTypes(response);
          return this.spellGroups;
        })
    }
    return this.spellGroupsPromise;
  }

  extractSpells(body: any[]): Spell[] {
    let spells = [];
    body.forEach(spell => {
      spells.push(new Spell(spell));
    });
    return spells;
  }

  extractSpellTypes(body: any[]): SpellGroup[] {
    let spellTypes = [];
    body.forEach(spellType => {
      spellTypes.push(new SpellGroup(spellType, this.chRef));
    });
    return spellTypes;
  }

  getSpell(id: number): Promise<Spell> {
		return this.getSpells()
			.then(spells => 
				spells.find(spell => spell.id === id)
			);
  }
  
  getSpellGroup(id: number):Promise<SpellGroup> {
    return this.getSpellGroups().then(
      spellGroups =>
        spellGroups.find(spellGroup => spellGroup.id === id)
    )
  }

}
