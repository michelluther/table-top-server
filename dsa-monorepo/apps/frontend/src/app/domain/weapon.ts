import { Skill } from "./skill";
export class Weapon {

    constructor(public id: string, public name: string, public damageDice: number, private _damageAddPoints: number, public extraPointsFromKk: number, public skill: Skill = null, public heroKk: number = null) {

    }

    get damageAddPoints(): number {
        if (this.extraPointsFromKk < this.heroKk)
            return this._damageAddPoints + this.heroKk - this.extraPointsFromKk
        else
            return this._damageAddPoints
    }

    get damageTextGeneral(): string {
        return this.damageDice.toString() + 'W6+' + this._damageAddPoints.toString()
    }

    get damageText(): string {
        return this.damageDice.toString() + 'W6+' + this.damageAddPoints.toString()
    }

}