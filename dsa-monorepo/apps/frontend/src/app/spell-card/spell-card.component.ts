import { Component, OnInit, Input } from '@angular/core';
import { ActualSpell } from '../domain/actualSpell';
import { SpellService } from '../domain/spells.service';

@Component({
    selector: 'spell-card',
    templateUrl: './spell-card.component.html',
    styleUrls: ['./../talent-card/talent-card.component.css'],
    standalone: false
})
export class SpellCard implements OnInit {

  spellProperty: ActualSpell;

  constructor(private spellService: SpellService) { }

  ngOnInit() {
  }

  @Input()
  get spell() {
    return this.spellProperty;
  }
  set spell(spell) {
    this.spellProperty = spell;
  }

}
