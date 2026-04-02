import { Component, OnInit, Input } from '@angular/core';
import { ActualSkill } from '../domain/actualSkill';
import { SkillService } from '../domain/skills.service';

@Component({
    selector: 'talent-card',
    templateUrl: './talent-card.component.html',
    styleUrls: ['./talent-card.component.css'],
    standalone: false
})
export class TalentCard implements OnInit {

  @Input()
  state: string = '';
  skillProperty: ActualSkill;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
  }

  @Input()
  get skill() {
    return this.skillProperty;
  }
  set skill(skill) {
    this.skillProperty = skill;
  }

  @Input()
  get skillGroup() {
    return this.skillProperty.getSkillGroup();
  }
}
