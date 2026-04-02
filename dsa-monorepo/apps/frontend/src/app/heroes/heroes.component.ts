import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gameState } from 'app/domain/applicationState';
import { Hero } from '../domain/hero';
import { HeroService } from '../domain/hero.service';
import { Skill } from '../domain/skill';
import { SkillService } from '../domain/skills.service';

@Component({
    selector: 'heroes-list',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    animations: [
        trigger('inOutAnimation', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('0.5s 1s ease-out', style({ opacity: 1 }))
            ])
        ])
    ],
    standalone: false
})

export class HeroesComponent implements OnInit {

	heroes: Hero[];
	skills: Skill[];
	selectedHero: Hero;

	
	currentlyLoading: boolean = false;
	_activeMainNavEntry: string = 'heroes';

	constructor(
		private heroService: HeroService,
		private skillService: SkillService,
		private router: Router
	) {
		this.loadBasicData();
	}

	loadBasicData(): void {
		this.currentlyLoading = true;
		const heroesPromise = this.heroService.getHeroes()
		const skillsPromise = this.skillService.getSkills()
		Promise.all([heroesPromise, skillsPromise]).then(results => {
			this.heroes = this.heroService.heroes;
			this.skills = results[1];
			this.currentlyLoading = false;
			gameState.dataInitialized = true;
		}).catch(error => {
			this.currentlyLoading = false;
		})
	}

	startGame(): void {
		gameState.gameStarted = true;
	}

	activateNavEntry(navEntry): void {
		this._activeMainNavEntry = navEntry
	}

	ngOnInit(): void {

	}
	
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		this.gotoDetail();
	}

	gotoDetail(): void {
		this.router.navigate(['/hero', this.selectedHero.id]);
	}

	get gameStarted(): boolean {
		return gameState.gameStarted;
	}

	get successfullyLoaded(): boolean {
		return gameState.dataInitialized;
	}

	get activeMainNavEntry(): string {
		return this._activeMainNavEntry;
	}
}
