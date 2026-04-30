import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Attribute } from './attribute';
import { AttributeService } from './attribute.service';
import { Hero } from './hero';
import { SkillService } from './skills.service';
import { SpellService } from './spells.service';
import type { CharacterDetailDto } from '@dsa-monorepo/shared-types';

import { UrlService } from 'app/url.service';



@Injectable()
export class HeroService {

	private heroesUrl = `${UrlService.getBaseUrl()}/api/characters`;
	private _heroes: Hero[];
	private attributesConfigured: Attribute[]

	constructor(private http: HttpClient, private skillService: SkillService, private spellService: SpellService, private attributeService: AttributeService) {

	}

	getHeroes(force: boolean = false) : Promise<Hero[]> {
		if (this._heroes && !force) {
			return new Promise((resolve, reject) => {
				resolve(this._heroes)
			})
		} else {
			const characterGetPromise = this.http.get<{ characters: CharacterDetailDto[], count: number }>(this.heroesUrl)
				.toPromise()
				.then(async response => {
					if (!this._heroes) {
						this._heroes = [];
					}
					let heroes = await this.extractData(response.characters);
					for (let hero of heroes) {
						const bufferdHero = this._heroes ? this._heroes.find(h => h.id === hero.id) : null;
						if (bufferdHero) {
							Object.assign(bufferdHero, hero);
						} else {
							this._heroes.push(hero);
						}
					}
					this._heroes.sort((heroA, heroB) => {
						if(heroA.name > heroB.name)
							return 1
						else return -1
					})
					return this._heroes;
				}
				)

			characterGetPromise.catch(error => {
				console.error('[HeroService] Error getting characters:', error);
				console.error('[HeroService] Error details:', {
					status: error.status,
					statusText: error.statusText,
					message: error.message,
					url: this.heroesUrl
				});
			})
			return characterGetPromise
		}
	}

	get heroes (): Hero[] {
		if (this._heroes) {
			return this._heroes;
		} else {
			return [];
		}
	}

	async extractData(body: CharacterDetailDto[]): Promise<Hero[]> {
		const heroes = [];
		for (const heroData of body) {
			const newHero = new Hero(this.skillService, this.spellService, this.attributeService);
			const initializedHero = await newHero.setData(heroData);
			heroes.push(initializedHero);
		}
		return heroes;
	}

	handleError(error: any) {
		let errMsg: string;
		if (error.error instanceof ErrorEvent) {
			// Client-side or network error
			errMsg = error.error.message;
		} else {
			// Backend error
			errMsg = `${error.status}: ${error.error || error.message}`;
		}
		console.error(errMsg);
		return throwError(errMsg);
	}

	getHero(id: number): Promise<Hero> {

		return new Promise((resolve, reject) => this.getHeroes()
			.then(heroes =>
				resolve(heroes.find(hero => hero.id === id))
			));
	}

	get attributes(): Array<Attribute> {
		return this.attributesConfigured
	}

}