
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../domain/hero';
import { HeroService } from '../domain/hero.service';

import { FormControl } from '@angular/forms';
import { map, startWith, switchMap } from 'rxjs/operators';

import { UrlService } from 'app/url.service';

import { ActualSkill } from '../domain/actualSkill';

@Component({
    selector: 'hero-details',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
    standalone: false
})
export class HeroDetailComponent implements OnInit {

	talentSearchTerm: String = '';
	talentSearchActive: boolean = false;
	// autoSearchTerm: Observable<String> = '';
	searchCtrl: FormControl;
	hero: Hero;
	@Input()
	_detailArea: String;
	private baseUrl: String;
	public things: Promise<Object[]>;
	// public filteredThings: Observable<Any[]>;
	public filteredSkills: Observable<ActualSkill[]>;
	breakpoint: number;


	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location,

	) {
		this.detailArea = 'character';
		this.searchCtrl = new FormControl();
		this.baseUrl = UrlService.getBaseUrl();
		let that = this;
		new Promise((resolve, reject) => {
			let heroTimer = setInterval(() => {
				if (this.hero && this.hero.skills) {
					console.debug(this.hero.skills);
					resolve(
						this.filteredSkills = this.searchCtrl.valueChanges
							.pipe(
								startWith(''),
								map(searchTerm => {
									return searchTerm ? this.filterSkills(searchTerm) : this.hero.skills.slice()
								})
							));
					clearTimeout(heroTimer);
				}
			}, 100);

		});
	}


	ngOnInit(): void {

		this.route.params
			.pipe(switchMap((params: Params) => this.heroService.getHero(+params['id'])))
			.subscribe(hero => {
				this.hero = hero;
			});;
		this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
	}

	filterSkills(name: string) {
		return this.hero.skills.filter(skill =>
			skill.getSkill().name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
	}


	navToAnchor(anchor:string):void {
		
	}

	onSectionChange(event):void {
	}

	showArea(areaTarget):void {
		this.detailArea = areaTarget
	}

	set detailArea(target) {
		this._detailArea = target
	}

	get detailArea() {
		return this._detailArea
	}

	removeWeaponFromInventory(weapon):void {
		debugger;
	}


}