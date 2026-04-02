import { Injectable } from '@angular/core';
import { Attribute } from './attribute'


@Injectable()
export class AttributeService {

	private attributesConfigured:Map<String, Attribute>

	constructor() { 
		this.attributesConfigured = new Map<String, Attribute>([
		['MU', new Attribute('MU', 'Mut', 'MU')],
        ['KL', new Attribute('KL', 'Klugheit', 'KL')],
        ['IN', new Attribute('IN', 'Intuition', 'IN')],
		['CH', new Attribute('CH', 'Charisma', 'CH')],
		['FF', new Attribute('FF', 'Fingerfertigkeit', 'FF')],
        ['GE', new Attribute('GE', 'Gewandheit', 'GE')],
        ['KO', new Attribute('KO', 'Konstitution', 'KO')],
        ['KK', new Attribute('KK', 'Körperkraft', 'KK')]
    ])
	}

	get attributes():Map<String, Attribute> {
		return this.attributesConfigured
	}

}