import { ChangeDetectorRef, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AttributeService } from './attribute.service';
import { Skill } from './skill';
import { SkillGroup } from './skillgroup';

import { UrlService } from 'app/url.service';


@Injectable()
export class SkillService {

  private skillsUrl = `${UrlService.getBaseUrl()}/skills/`;
  private skillTypesUrl = `${UrlService.getBaseUrl()}/skillTypes/`;

  private skills: Skill[];

  private skillGroups: SkillGroup[];

  private skillGroupsPromise: Promise<SkillGroup[]>;
  private skillsPromise: Promise<Skill[]>;

   constructor(private http: HttpClient, private chRef: ChangeDetectorRef, private attributeService: AttributeService) {
  }

  getSkills(): Promise<Skill[]> {
    if (!this.skillsPromise) {
      this.skillsPromise = this.http.get<any[]>(this.skillsUrl)
        .toPromise()
        .then(response => {
          return this.extractSkills(response);
        })
      this.skillsPromise.catch(error => {
        console.error('error getting skills')
        this.skillsPromise = null;
      })
    }
    return this.skillsPromise;
  }

  getSkillGroups(): Promise<SkillGroup[]> {
    if (!this.skillGroupsPromise) {
      this.skillGroupsPromise = this.http.get<any[]>(this.skillTypesUrl)
        .toPromise()
        .then(response => {
          this.skillGroups = this.extractSkillTypes(response);
          return this.skillGroups;
        })
      this.skillGroupsPromise.catch(error => {
        console.error('error getting skill groups')
      })
    }
    return this.skillGroupsPromise;
  }

  extractSkills(body: any[]): Skill[] {
    let skills = [];
    body.forEach(skill => {
      skills.push(new Skill(skill, this.attributeService));
    });
    return skills;
  }

  extractSkillTypes(body: any[]): SkillGroup[] {
    let skillTypes = [];
    body.forEach(skillType => {
      skillTypes.push(new SkillGroup(skillType, this.chRef));
    });
    return skillTypes;
  }

  getSkill(id: number): Promise<Skill> {
    return this.getSkills()
      .then(skills =>
        skills.find(skill => skill.id === id)
      );
  }

  getSkillGroup(id: number): Promise<SkillGroup> {
    return this.getSkillGroups().then(
      skillGroups =>
        skillGroups.find(skillGroup => skillGroup.id === id)
    )
  }

  getWeaponSkills(): Promise<Skill[]> {
    return new Promise((resolve, reject) => {
      this.getSkills().then(skills => {
        resolve(skills.filter(skill => {
          return skill.skillGroupId === 1 || skill.skillGroupId === 8
        }))
      })
    })
  }

}
