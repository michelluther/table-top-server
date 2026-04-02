import { AttributeService } from "./attribute.service";
import { Attribute } from "./attribute";

export class Skill {

  id: number;
  name: String;
  isWeaponSkill: boolean;
  skillGroupId: number;
  be: String;

  dice1: Attribute;
  dice2: Attribute;
  dice3: Attribute;
  constructor(dataObject: Object, private attributeService: AttributeService) {

    this.skillGroupId = dataObject['type'];
    this.id = dataObject['id'];
    this.name = dataObject['name'];
    this.be = dataObject['behinderung'];
    this.isWeaponSkill = dataObject['isWeaponSkill']
    if (dataObject['dice1']) {
      this.dice1 = this.attributeService.attributes.get(dataObject['dice1'].id);
      this.dice2 = this.attributeService.attributes.get(dataObject['dice2'].id);
      this.dice3 = this.attributeService.attributes.get(dataObject['dice3'].id);
    }

  }
}