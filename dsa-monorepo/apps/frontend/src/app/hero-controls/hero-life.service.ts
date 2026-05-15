import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Armor } from 'app/domain/armor';
import { InventoryItem } from 'app/domain/inventoryItem';
import { Weapon } from 'app/domain/weapon';
import { ToastrService } from 'ngx-toastr';
// import { Rx } from 'rxjs';
import { UrlService } from 'app/url.service';
import { Subject } from 'rxjs';
import { HeroService } from "./../domain/hero.service";
import { SkillService } from "./../domain/skills.service";
import { io, Socket } from 'socket.io-client';



@Injectable()
export class HeroLifeService {

    private serverUrl = UrlService.getSocketIOUrl();
    public wsClientId = Math.random().toString(36).substring(7);
    private socket: Socket;
    public heroSubject: Subject<any>;
    private heroService: HeroService;
    private connectionInterval: number;
    private hasBeenDisconnected: boolean = false;

    private currentlyConnected: boolean = false;

    constructor(private http: HttpClient, heroService: HeroService, private toastr: ToastrService, private skillService: SkillService) {
        this.heroService = heroService;
        this.createSocketConnection();
    }

    private createSocketConnection(): void {
        try {
            // Connect to Socket.IO /heroes namespace
            this.socket = io(`${this.serverUrl}/heroes`, {
                transports: ['websocket', 'polling'],
                reconnection: true,
                reconnectionDelay: 4000,
                reconnectionAttempts: Infinity,
            });

            this.heroSubject = new Subject();
            this.heroSubject.subscribe(this.handleIncommingMessage.bind(this));

            // Listen for hero_update events from server
            this.socket.on('hero_update', (data: any) => {
                this.heroSubject.next(data);
            });

            // Handle connection success
            this.socket.on('connect', async () => {
                this.currentlyConnected = true;
                this.toastr.success('Du bist online.');
                clearInterval(this.connectionInterval);
                await this.heroService.getHeroes(true);
                console.log('[Heroes] Connected to Socket.IO server');
            });

            // Handle connection errors
            this.socket.on('connect_error', (error) => {
                console.error('[Heroes] Connection error:', error);
                if (this.currentlyConnected) {
                    this.toastr.error('Fehler bei der Websocketkommunikation mit den Helden.', 'Fehler');
                }
            });

            // Handle disconnection
            this.socket.on('disconnect', (reason) => {
                if (this.currentlyConnected) {
                    this.currentlyConnected = false;
                    this.toastr.error('Du bist nicht mehr mit dem Server verbunden', 'Die Verbindung ist abgebaut worden');
                    console.log('[Heroes] Disconnected:', reason);
                }
            });

            // Handle errors
            this.socket.on('error', (error) => {
                console.error('[Heroes] Socket error:', error);
                this.toastr.error('Es gab einen Fehler bei der Verbindung', 'Fehler');
            });
        } catch (error) {
            console.error('[Heroes] Failed to create socket:', error);
            this.toastr.error('bisher hat es noch nicht geklappt', 'Fehler');
        }
    }

    public sendUpate(data): void {
        try {
            // Emit the event with the data's type as the event name
            // The backend is listening for events like 'lifeUpdate', 'magicUpdate', etc.
            this.socket.emit(data.type, data);
            console.log('[Heroes] Sent update:', data.type, data);
        } catch (error) {
            console.error('[Heroes] Error sending update:', error);
            this.toastr.error('bisher hat es noch nicht geklappt', 'Fehler');
        }
    }

    public handleIncommingMessage(messageData): void {
        // Data is already parsed by Socket.IO, no need to JSON.parse

        this.heroService.getHero(messageData.heroId).then(hero => {
            switch (messageData.type) {
                case 'lifeUpdate':
                    hero.life_lost = hero.life_lost - messageData.value;
                    break;
                case 'magicUpdate':
                    hero.magicEnergy_lost = hero.magicEnergy_lost - messageData.value;
                    break;
                case 'updateAttribute':
                    // TODO: update hero's attribute
                    hero.getAttribute(messageData['attribute']).value = messageData['value']
                    this.toastr.success(`${hero.name} hat die Eigenschaft ${hero.getAttribute(messageData['attribute']).name} gesteigert!`, 'Bäähm!')
                    break;
                case 'addWeapon':
                    this.skillService.getSkill(messageData['skill']).then(skill => {
                        hero.addWeapon(new Weapon(
                            messageData['weaponId'],
                            messageData['weaponName'],
                            messageData['damageDice'],
                            messageData['damageAddPoints'],
                            messageData['extraPointsFromKk'],
                            skill
                        ))
                        this.toastr.success(`${hero.name} hat eine Waffe mehr!`, 'Bäähm!')
                    })
                    break;
                case 'deleteWeapon':
                    hero.deleteWeaponById(messageData['weaponId']);
                    this.toastr.success(`${hero.name} hat eine Waffe weniger!`, 'Hui!!')
                    break;
                case 'addArmor':
                    hero.addArmor(new Armor(
                        messageData['armorId'],
                        messageData['armorName'],
                        messageData['armorRS'],
                        messageData['armorBE'],
                    ));
                    this.toastr.success(`${hero.name} ist nun besser gerüstet!`, 'Zack!')
                    break;
                case 'deleteArmor':
                    hero.deleteArmorById(messageData['armorId']);
                    this.toastr.success(`${hero.name} muss nun aufpassen, er hat weniger Schutz!`, 'Zack!')
                    break;
                case 'setCurrentWeapon': {
                    const weapon = hero.weapons.find(w => w.id == messageData['weaponId']);
                    if (weapon) {
                        // Triggers the Hero.currentWeapon setter, which recomputes
                        // currentAttack / currentParade / currentLongRangeValue.
                        hero.currentWeapon = weapon;
                    }
                    break;
                }
                case 'equipArmor': {
                    // Newer clients send `armorId`; legacy ones reuse `weaponId`.
                    const armorId = messageData['armorId'] ?? messageData['weaponId'];
                    if (armorId !== undefined) {
                        hero.equipArmorById(armorId, messageData['isEquipped'] === true);
                    }
                    break;
                }
                case 'addInventoryItem':
                    hero.addInventoryItem(new InventoryItem(messageData['inventoryId'], messageData['name'], messageData['amount'], messageData['weight']))
                    this.toastr.success(`${hero.name} hat was neues: ${messageData['name']}!`, 'Zack!')
                    break;
                case 'deleteInventoryItem':
                    const itemName = hero.getInventoryItemById(messageData['inventoryItemId']).name;
                    hero.deleteInventoryItemById(messageData['inventoryItemId']);
                    this.toastr.success(`${hero.name} hat etwas abgegeben: ${itemName}!`, 'Zack!')
                    break;
                case 'updateInventoryItem':
                    hero.updateInventoryItemAmount(messageData['inventoryItemId'], messageData['amount']);
                    break;
                case 'addExperiencePoints':
                    hero.experience = hero.experience + messageData['additionalPoints'];
                    this.toastr.success(`${hero.name} hat ${messageData['additionalPoints']} neue Abenteuerpunkte!`, 'Hurrrraaaah!')
                case 'updateAccountEntry':
                    hero.money[messageData['unit']] = messageData['amount'];
                default:
                    break;
            }
        })
    }

}
