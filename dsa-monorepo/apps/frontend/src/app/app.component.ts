import { Component } from '@angular/core';
import { AdventureService } from './domain/adventure.service';
import { ArmorService } from './domain/armor.service';
import { AttributeService } from './domain/attribute.service';
import { HeroService } from './domain/hero.service';
import { InventoryService } from './domain/inventory.service';
import { SkillService } from './domain/skills.service';
import { SpellService } from './domain/spells.service';
import { Timer, TimerService } from './domain/timer.service';
import { WeaponService } from './domain/weapons.service';
import { HeroLifeService } from './hero-controls/hero-life.service';
import { RemoteControlReceiverService } from './remote-control-receiver/remote-control-receiver.service';
import { RemoteControlService } from './remote-control/remote-control.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService, AttributeService, HeroLifeService, SkillService, SpellService, WeaponService, ArmorService, InventoryService, RemoteControlReceiverService, RemoteControlService, AdventureService, TimerService, Timer],
    standalone: false
})
export class AppComponent {
	title = 'Tour of Heroes';

	constructor(private heroService: HeroService, private attributeService: AttributeService) { }

}
