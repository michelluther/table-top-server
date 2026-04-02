import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AttributeService } from './attribute.service';
import { Combatant, Fight } from './fight';
import { Hero } from './hero';
import { NPC, NPCType } from './npc';

import { SkillService } from './skills.service';
import { SpellService } from './spells.service';

import { UrlService } from 'app/url.service';

@Injectable()
export class AdventureService {


    private adventuresUrl = UrlService.getBaseUrl() + '/adventures/';
    private npcTypesUrl = UrlService.getBaseUrl() + 'npcTypes/';
    private currentAdventure = 1;
    private npcsUrl = `${UrlService.getBaseUrl()}/adventures/${this.currentAdventure}/npcs/`;
    private fightsURL = `${UrlService.getBaseUrl()}/adventures/${this.currentAdventure}/fights/`;
    private adventures: Adventure[];

    constructor(private http: HttpClient, private skillService: SkillService, private spellService: SpellService, private attributeService: AttributeService) {

	}

    getAdventures(): Promise<Adventure[]> {
        return this.http.get<any[]>(this.adventuresUrl)
            .toPromise()
            .then(response => {
                return this.extractAdventures(response);
            }
        )
    }

    getCurrentAdventureId(): number {
        return 1
    }

    extractAdventures(body: any[]): Adventure[] {
        let adventures = [];
        body.forEach(function (adventure) {
            var newAdventure = new Adventure()
            newAdventure.setData(adventure);
            adventures.push(newAdventure);
        }.bind(this));
        return adventures;
    }

    handleError(error: any) {
        let errMsg: string;
        if (error.error instanceof ErrorEvent) {
            // Client-side or network error
            errMsg = error.error.message;
        } else {
            // Backend error
            errMsg = `${error.status}: ${error.error || error.message}`;
        }
        console.error(errMsg);
        return of([]);
    }

    getAdventure(id: string): Promise<Adventure> {
        return this.getAdventures()
            .then(adventures =>
                adventures.find(adventure => adventure.id === id)
            );
    }

    getNPCTypes(): Promise<NPCType[]> {
        return this.http.get<any[]>(this.npcTypesUrl)
        .toPromise()
        .then(response => {
            return response.map(npcResult => {
                return new NPCType(npcResult.id, npcResult.name)
            });
        }
        )
    }

    async getNPCs(): Promise<Combatant[]> {
        return this.http.get<any[]>(this.npcsUrl)
        .toPromise()
        .then(async response => {
            const combatants = [];
            for (const npcResult of response) {
                if(npcResult.character) {
                    let character = await new Hero(this.skillService, this.spellService,
                                            this.attributeService).setData(npcResult.character);
                    character.isHero = false;
                    combatants.push(character);
                } else {
                    combatants.push(new NPC(
                        npcResult.npc.id,
                        npcResult.npc.name, 
                        null, 
                        npcResult.npc.life, 
                        npcResult.npc.initiative,
                        npcResult.npc.weapon_1_name, 
                        npcResult.npc.weapon_1_attack, 
                        npcResult.npc.weapon_1_parade, 
                        npcResult.npc.weapon_1_damage,
                        npcResult.npc.weapon_2_name, 
                        npcResult.npc.weapon_2_attack, 
                        npcResult.npc.weapon_2_parade, 
                        npcResult.npc.weapon_2_damage
                    ));
                }
            }
            return combatants;
        })
    }

    getFights(): Promise<Fight[]> {
        return this.http.get<any[]>(this.fightsURL)
        .toPromise()
        .then(response => {
            return response.map(fight => {
                return new Fight(fight.name)
            })
        })
    }

}

export class Adventure {

    public id: string
    public active: boolean
    public name: string

    private images: Image[]
    private characters: Character[]
    constructor() {
        this.images = []
        this.characters = []
    }

    public setData(dataObject) {
        this.id = dataObject.id
        this.name = dataObject.name
        dataObject.images.forEach(image => {
            let imageObject = new Image(this.buildImageLink(image.url), image.caption, image.sequence)
            this.images.push(imageObject)
        })
        dataObject.characters.forEach(character => {
            this.characters.push(new Character(character.name, this.buildImageLink(character.imageUrl), character.sequence))
        })
    }

    get elements():AdventureElement[] {
        const allElements:Array<AdventureElement> = []
        for (let i = 0; i <  this.images.length; i++) {
            allElements.push(this.images[i])
        }
        for (let j = 0; j <  this.characters.length; j++) {

            allElements.push(this.characters[j])
        }
        allElements.sort((elementA, elementB) => {
            return elementA.sequence - elementB.sequence
        })

        const allElementsGrouped = []
        for (let index = 0; index < allElements.length; index++) {
            const element = allElements[index];
            const existingElementWithThatSequenceIndex = allElementsGrouped.findIndex(groupedElement => element.sequence === groupedElement.sequence)
            if(existingElementWithThatSequenceIndex !== -1) {
                const existingElementWithThatSequence = allElementsGrouped[existingElementWithThatSequenceIndex]
                if(existingElementWithThatSequence.type === ElementType.Section) {
                    (existingElementWithThatSequence as Section).elements.push(element)
                } else {
                    const newSection = new Section();
                    newSection.sequence = element.sequence
                    newSection.elements.push(existingElementWithThatSequence)
                    newSection.elements.push(element)
                    allElementsGrouped[existingElementWithThatSequenceIndex] = newSection;

                }
            } else {
                allElementsGrouped.push(element)
            }
        }
        return allElementsGrouped
    } 
    
    buildImageLink(absolutePath:string):string {
        return `${UrlService.getBaseUrl()}${absolutePath}`
    }

}

export enum ElementType {Image = 'image', Character = 'character', Location = 'location', Section = 'section'}

export interface AdventureElement {
    title:string;
    sequence:number;
    imageUrl:string;
    type:ElementType;
}

export class Image implements AdventureElement{
    constructor(public url: string, public caption: string,public sequence:number) {}
    
    get imageUrl(): string {
        return this.url;
    }

    get type(): ElementType {
        return ElementType.Image;
    }

    get title(): string {
        return this.caption    
    }
}

export class Character implements AdventureElement {
    constructor(public name:string, public imageUrl:string,public sequence:number){}
    
    get title(): string {
        return this.name;
    }
    get type(): ElementType {
        return ElementType.Character;
    }
}

export class Section implements AdventureElement {
    title: string;
    sequence: number;
    imageUrl: string;
    type: ElementType = ElementType.Section;

    elements: AdventureElement[] = []
    
}