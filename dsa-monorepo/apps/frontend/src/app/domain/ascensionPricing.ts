import { Skill } from "./skill";
import { SkillService } from "./skills.service";
import { SkillGroup } from "./skillgroup";
import { Hero } from './hero'

export class AscensionPricing {

    levelFrom: number;
    levelTo: number;
    priceA: number;
    priceB: number;
    priceC: number;
    priceD: number;
    priceE: number;
    priceF: number;
    priceG: number;
    priceH: number;
    

    constructor(pricingData: any, index) {
        this.levelFrom = index
        this.levelTo = index + 1
        this.priceA = pricingData['cost_a']
        this.priceB = pricingData['cost_b']
        this.priceC = pricingData['cost_c']
        this.priceD = pricingData['cost_d']
        this.priceE = pricingData['cost_e']
        this.priceF = pricingData['cost_f']
        this.priceG = pricingData['cost_g']
        this.priceH = pricingData['cost_h']
    }

  getPrice(from, to, group): number {
    return this['price_'+group];
  };

}