import { Pipe, PipeTransform } from '@angular/core';
import { ActualSkill } from '../domain/actualSkill';
import { ActualSkillGroup } from '../domain/actualSkillGroup';

@Pipe({
    name: 'MatchesTalentSearchTerm',
    standalone: false
})

export class MatchesTalentSearchTerm implements PipeTransform {

    transform(skills: Array<ActualSkill>, searchTerm: string): Array<ActualSkill> {
        if (searchTerm != '' && searchTerm !== undefined) {
            return skills.filter(skill => {
                return (skill.getSkill().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            })
        } else {
            return skills;
        }
    }
}

@Pipe({
    name: 'MatchesTalentSearchTermChildren',
    standalone: false
})

export class MatchesTalentSearchTermChildren implements PipeTransform {

    transform(skillGroups: Array<ActualSkillGroup>, searchTerm: string): Array<ActualSkillGroup> {
        if (searchTerm != '' && searchTerm !== undefined) {
            return skillGroups.filter(SkillGroup => {
                return (SkillGroup.getSkills().filter(skill => skill.getSkill().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)).length > 0;
            })
        } else {
            return skillGroups;
        }
    }
}