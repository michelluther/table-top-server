import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlService } from 'app/url.service';
import { Hero } from '../domain/hero';
import { HeroService } from '../domain/hero.service';

@Component({
    selector: 'hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: ['./hero-card.component.css'],
    standalone: false
})

export class HeroCard implements OnInit {

	heroProperty: Hero;
	public baseUrl: String;

	constructor(
		private heroService: HeroService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.baseUrl = UrlService.getBaseUrl();
	}

	ngOnInit(): void {

	}

	@Input()
	get hero() {
		return this.heroProperty;
	}
	set hero(hero) {
		this.heroProperty = hero;
	}

	onSelect(hero: Hero): void {
		this.heroProperty = hero;
		this.gotoDetail();
	}

	gotoDetail(): void {
		this.router.navigate(['../hero', this.heroProperty.id], { relativeTo: this.route });
	}
}