import { Skill } from "./skill";
import { SkillService } from "./skills.service";
import { SkillGroup } from "./skillgroup";
import { Attribute } from './attribute'

export class ActualAttribute {

  private valueNumber: number;
  private _attribute: Attribute;

  constructor(actualValue: number, attribute: Attribute) {
    this.valueNumber = actualValue;
    this._attribute = attribute;
  }

  set value(value: number) {
    this.valueNumber = value;
  }


  get value(): number {
    return this.valueNumber
  }

  get name(): String {
    return this.attribute.name
  }

  get short(): String {
    return this.attribute.short
  }

  get attribute(): Attribute {
    return this._attribute;
  }
}