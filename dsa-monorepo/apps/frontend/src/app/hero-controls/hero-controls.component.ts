import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hero } from '../domain/hero';
import { HeroLifeService } from './hero-life.service';
import { LifeDisplayComponent } from 'app/life-display/life-display.component';
import { MagicDisplayComponent } from 'app/magic-display/magic-display.component';


@Component({
    selector: 'hero-controls',
    templateUrl: './hero-controls.component.html',
    styleUrls: ['./hero-controls.component.css'],
    standalone: false
})
export class HeroControls {

	@Input()
	listMode: boolean = false;
	
	private _hero: Hero;
	private lifeDisplayNumber: number;
	private service: HeroLifeService;
	private _lifeClass: string;
	private _magicClass: string;
	private _activeDisplayComponent: Component;
	

	@ViewChild(LifeDisplayComponent, { static: false }) lifeDisplay : LifeDisplayComponent;
	@ViewChild(MagicDisplayComponent, { static: false }) magicDisplay : MagicDisplayComponent; 


	constructor(websocketService: HeroLifeService) {
		this.service = websocketService;
		this._lifeClass = 'displayActive';
		this._magicClass = 'displayInactive';
	}

	@Input()
	get hero() {
		return this._hero;
	}
	set hero(hero) {
		this._hero = hero;
	}

	@Input()
	get life() {
		return this.lifeDisplayNumber;
	}

	@Input()
	get magicClass() {
		return this._magicClass;
	}

	@Input()
	get lifeClass() {
		return this._lifeClass;
	}

	focusLife(): void {
		this._magicClass = 'displayInactive';
		this._lifeClass = 'displayActive';
	}

	focusMagic(): void {
		this._magicClass = 'displayActive';
		this._lifeClass = 'displayInactive';
	}

	updateValue(value: number): void {
		if(this._magicClass === 'displayInactive'){
			this.lifeDisplay.rippleDisplay(value)
			this.service.sendUpate({
				heroId: this._hero.id,
				type: 'lifeUpdate',
				oldLive: this.hero.currentLife,
				value: value
			});
		} else {
			this.magicDisplay.rippleDisplay(value)
			this.service.sendUpate({
				heroId: this._hero.id,
				type: 'magicUpdate',
				oldLive: this.hero.currentLife,
				value: value
			});
		}
	}

}
