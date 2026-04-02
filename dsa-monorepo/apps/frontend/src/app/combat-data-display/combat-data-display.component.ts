import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Armor } from 'app/domain/armor';
import { Hero } from 'app/domain/hero';
import { Weapon } from 'app/domain/weapon';
import { HeroLifeService } from 'app/hero-controls/hero-life.service';

@Component({
    selector: 'combat-data-display',
    templateUrl: './combat-data-display.component.html',
    styleUrls: ['./combat-data-display.component.css'],
    standalone: false
})
export class CombatDataDisplayComponent implements OnInit {

  @Input()
  hero: Hero

  constructor(private service:HeroLifeService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // Trigger change detection after a short delay to ensure async hero initialization is complete
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 100);
  }

  updateCurrentWeapon(weapon: Weapon) {
    return new Promise((resolve, reject) => {
      this.service.sendUpate({
          heroId: this.hero.id,
          type: 'setCurrentWeapon',
          weaponId: weapon.id
      })
      this.hero.currentWeapon = weapon
      resolve(weapon)
    })
  }

  updateEquippedArmor(armor: Armor) {
    return new Promise((resolve, reject) => {
      armor.isEquipped = !armor.isEquipped;
      this.service.sendUpate({
          heroId: this.hero.id,
          type: 'equipArmor',
          weaponId: armor.id,
          isEquipped: armor.isEquipped
      })
      resolve(armor)
  })
}

}
