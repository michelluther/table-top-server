
import { SkillGroup } from "./skillgroup";
import { ActualSkill } from "./actualSkill";

export class ActualSkillGroup {

    constructor(private skillGroup:SkillGroup, private skills: ActualSkill[] ) { }

    getSkillGroup(): SkillGroup {
        return this.skillGroup
    }


    getSkills(): ActualSkill[] {
        return this.skills;
    }
  }