import { find, filter } from 'lodash';
import { ActualAttribute } from "./actualAttribute";
import { ActualSkill } from "./actualSkill";
import { ActualSkillGroup } from "./actualSkillGroup";
import { ActualSpell } from "./actualSpell";
import { ActualSpellGroup } from "./actualSpellGroup";
import { Armor } from './armor';
import { AttributeService } from './attribute.service';
import { Combatant } from './fight';
import { HeroType } from "./heroType";
import { InventoryItem } from "./inventoryItem";
import { MoneyInventory } from './moneyInventory';
import { Skill } from "./skill";
import { SkillService } from "./skills.service";
import { SpellService } from "./spells.service";
import { Weapon } from './weapon';
import { WeaponSkillDistribution } from "./weaponSkillDistribution";

export class Hero implements Combatant {

  id: number;
  isGood: boolean;
  selectedForFight: boolean;

  name: string;
  race: Object;
  size: number;
  gender: string;

  culture: number;

  avatar_small: string;

  experience: number;

  money: MoneyInventory;

  MU: number;
  CH: number;
  FF: number;
  GE: number;
  IN: number;
  KK: number;
  KO: number;

  life: number;
  life_lost: number;

  magicEnergy: number;
  magicEnergy_lost: number;

  experience_used: number;
  hero_type: HeroType;
  _initiative: number;
  _currentInitiative: number;
  KL: number;
  magieresistenz: number;
  social_rank: number;

  abenteuer_punkte: number;

  knowsMagic: boolean;

  attack_basis: number;
  parade_basis: number;
  fernkampf_basis: number;

  currentAttack: number;
  currentParade: number;

  currentLongRangeValue: number;

  level: number;


  attributes: Array<ActualAttribute>;

  skills: Array<ActualSkill>;
  skillGroups: ActualSkillGroup[];

  spells: Array<ActualSpell>;
  spellGroups: ActualSpellGroup[];

  weapons: Array<Weapon>
  _currentWeapon: Weapon | null

  armor: Array<Armor>
  inventory: Array<InventoryItem>
  hairColor: string
  eyeColor: string
  weight: number

  weaponSkillDistributions: Array<WeaponSkillDistribution>

  constructor(private skillService: SkillService, private spellService: SpellService, private attributeService: AttributeService) {
    this.skillService = skillService;
    this.weapons = []
  }
  isHero: boolean = true;
  nextUp: boolean;
  get damage(): string {
    throw new Error('Method not implemented.');
  }
  
  get initiative(): number {
    return this._initiative;
  }

  set initiative(initiative: number) {
    this._initiative = initiative
  }

  get currentInitiative():number {
    return this._currentInitiative
  }

  set currentInitiative(initiative:number) {
    this._currentInitiative = initiative
  }

  setData(dataObject: Object): Promise<Hero> {
     
    this.attack_basis = dataObject['attack_basis'];
    this.parade_basis = dataObject['parade_basis'];
    this.fernkampf_basis = dataObject['fernkampf_basis']

    this.life_lost = dataObject['life_lost'];
    this.avatar_small = dataObject['avatar_small'];

    this.culture = dataObject['culture'];
    this.experience = dataObject['experience'];

    this.level = Math.floor(Math.sqrt(this.experience / 50 + 0.25) + 0.5)

    this.experience_used = dataObject['experience_used'];
    this.gender = dataObject['gender'];
    this.hero_type = dataObject['hero_type'];
    this.id = dataObject['id'];
    this._initiative = dataObject['ini_basis'];
    this.knowsMagic = dataObject['knows_magic'];

    this.money = new MoneyInventory(dataObject['money_dukaten'], dataObject['money_silbertaler'], dataObject['money_kreuzer'], dataObject['money_heller'])
    this.hairColor = dataObject['hair_color']
    this.eyeColor = dataObject['eye_color']
    this.weight = dataObject['weight']

    this.attributes = [
      new ActualAttribute(dataObject['MU'], this.attributeService.attributes.get('MU')),
      new ActualAttribute(dataObject['KL'], this.attributeService.attributes.get('KL')),
      new ActualAttribute(dataObject['IN'], this.attributeService.attributes.get('IN')),
      new ActualAttribute(dataObject['CH'], this.attributeService.attributes.get('CH')),
      new ActualAttribute(dataObject['FF'], this.attributeService.attributes.get('FF')),
      new ActualAttribute(dataObject['GE'], this.attributeService.attributes.get('GE')),
      new ActualAttribute(dataObject['KO'], this.attributeService.attributes.get('KO')),
      new ActualAttribute(dataObject['KK'], this.attributeService.attributes.get('KK'))
    ];
    

    // Set individual attribute properties
    this.MU = dataObject['MU'];
    this.KL = dataObject['KL'];
    this.IN = dataObject['IN'];
    this.CH = dataObject['CH'];
    this.FF = dataObject['FF'];
    this.GE = dataObject['GE'];
    this.KO = dataObject['KO'];
    this.KK = dataObject['KK'];
    
    this.life = dataObject['life'];
    this.magicEnergy = dataObject['magic_energy'];
    this.magicEnergy_lost = dataObject['magic_energy_lost'];
    this.magieresistenz = dataObject['magieresistenz'];
    this.name = dataObject['name'];
    this.race = dataObject['race'];
    this.size = dataObject['size'];
    this.social_rank = dataObject['social_rank']

    this.weapons = []
    this.armor = []
    
    this.weaponSkillDistributions = dataObject['weaponSkillDistributions'].map(weaponSkillDistribution => {
      return new WeaponSkillDistribution(weaponSkillDistribution.skill, weaponSkillDistribution.attack, weaponSkillDistribution.parade)
    })

    this.inventory = dataObject['inventoryItems'].map(inventoryItem => {
      return new InventoryItem(inventoryItem.id, inventoryItem.name, inventoryItem.amount, inventoryItem.weight)
    });
    
    // Wait for async initialization to complete before returning
    return this.structureSkills(dataObject['skills'], dataObject['weaponSkillDistributions'], dataObject['weapons'], dataObject['armor'])
      .then(() => {
        if (this.knowsMagic) {
          this.structureSpells(dataObject['spells']);
        }
        return this;
      });
  }

  structureSkills(actualSkillsOfHero: Array<Object>, weaponSkillDistributions: Array<Object>, weapons: Array<Object>, armor: Array<Object>): Promise<void> {

    return Promise.all([
      this.skillService.getSkillGroups(),
      this.skillService.getSkills()
    ]).then(skillGroupsAndSkills => {
      this.skillGroups = new Array<ActualSkillGroup>();
      let skillGroups = skillGroupsAndSkills[0];
      let allSkills = skillGroupsAndSkills[1];
      this.skills = [];

      allSkills.forEach(skill => {
        let actualSkill = find(actualSkillsOfHero, actualSkillData => { return skill.id === actualSkillData['id'] }) // can be undefined, the hero does not have the skill
        let skillSkillGroup = find(skillGroups, skillGroup => { return skill.skillGroupId == skillGroup.id });
        this.skills.push(new ActualSkill(actualSkill, this, skill, skillSkillGroup));
      })

      this.skills.sort((skillA, skillB) => {
        if (skillA.getSkill().name < skillB.getSkill().name) { return -1; }
        if (skillA.getSkill().name > skillB.getSkill().name) { return 1; }
        return 0;
      })

      skillGroups.forEach(skillGroup => {
        let skills = filter(this.skills, actualSkill => {
          return actualSkill.getSkill().skillGroupId == skillGroup.id
        });
        this.skillGroups.push(new ActualSkillGroup(skillGroup, skills));
      })

      weapons.forEach(weapon => {
        this.addWeapon(new Weapon(
          weapon['id'],
          weapon['name'],
          weapon['tp_dice'],
          weapon['tp_add_points'],
          weapon['extra_tp_from_kk'],
          find(allSkills, skill => {
            return skill.id === weapon['skill']
          }),
          this.getAttribute('KK').value
        ))
      })
      if (this.weapons.length > 0){
        this.currentWeapon = this.weapons[0]
      } else {
        this.currentWeapon = null
      } 
      armor.forEach(armor => {
        this.addArmor(new Armor(
          armor['id'],
          armor['name'],
          armor['rs'],
          armor['be'])
        )
      })
    });

  }

  addArmor(armor: Armor): void {
    this.armor.push(armor)
  }

  deleteArmorById(armorId: string): void {
    const armorIndex = this.armor.findIndex(armorItem => {
      return armorItem.id === armorId;
    })
    this.armor.splice(armorIndex, 1)
  }

  getArmorById(armorId: string): Armor {
    return this.armor.find(armorItem => {
      return armorItem.id === armorId;
    })
  }

  get armorValue(): number {
    return this.armor.reduce((previousArmorValue, armorEntry) => {
      if (armorEntry.isEquipped)
        return previousArmorValue + armorEntry.rs
      else return previousArmorValue
    }, 0)
  }

  get behinderung(): number {
    return this.armor.reduce((previousBehinderungValue, armorEntry) => {
      if (armorEntry.isEquipped)
        return previousBehinderungValue + armorEntry.behinderung
      else return previousBehinderungValue
    }, 0)
  }

  equipArmorById(armorId: string, isEquipped: boolean): void {
    this.getArmorById(armorId).isEquipped = isEquipped
  }

  addWeapon(weapon: Weapon): void {
    this.weapons.push(weapon)
  }

  deleteWeaponById(weaponId: string): void {
    const weaponIndex = this.weapons.findIndex(weapon => {
      return weapon.id === weaponId;
    })
    this.weapons.splice(weaponIndex, 1)
  }

  addInventoryItem(inventoryItem: InventoryItem): void {
    this.inventory.push(inventoryItem)
  }

  getInventoryItemById(inventoryItemId: number): InventoryItem {
    const inventoryIndex = this.inventory.findIndex(InventoryItem => {
      return InventoryItem.id === inventoryItemId;
    })
    return this.inventory[inventoryIndex];
  }

  deleteInventoryItemById(inventoryItemId: number): void {
    const inventoryIndex = this.inventory.findIndex(InventoryItem => {
      return InventoryItem.id === inventoryItemId;
    })
    this.inventory.splice(inventoryIndex, 1)
  }

  updateInventoryItemAmount(inventoryItemId: number, amount) {
    this.getInventoryItemById(inventoryItemId).amount = amount
  }

  structureSpells(actualSpellsOfHero: Array<Object>): void {
    const spellsPromise = Promise.all([
      this.spellService.getSpells(),
      this.spellService.getSpellGroups()
    ]).then(spellsAndSpellGroups => {

      this.spellGroups = new Array<ActualSpellGroup>();
      this.spells = new Array<ActualSpell>();

      const allSpells = spellsAndSpellGroups[0]
      const spellGroups = spellsAndSpellGroups[1]



      spellGroups.forEach(spellGroup => {
        this.spellGroups.push(new ActualSpellGroup(spellGroup, []));
      })

      allSpells.sort((spellA, spellB) => {
        if (spellA.name < spellB.name) { return -1; }
        if (spellA.name > spellB.name) { return 1; }
        return 0;
      })

      allSpells.forEach(spell => {
        let actualSpellDataObject = actualSpellsOfHero.find(actualSpellData => {
          return spell.id === actualSpellData['id']
        })
        let spellGroupOfSpell = this.spellGroups.find(spellGroup => {
          return spellGroup.getSpellGroup().id === spell.spellGroupId
        })
        let actualSpell = new ActualSpell(actualSpellDataObject, this, spell, spellGroupOfSpell.getSpellGroup())
        this.spells.push(actualSpell)
        spellGroupOfSpell.getSpells().push(actualSpell)
      });



    })
  }

  _getDistributionOfSkill(weaponSkill: Skill) {
    return this.weaponSkillDistributions.find(distribution => {
      return distribution.skillId == weaponSkill.id
    })
  }

  getAttribute(id: String) {
    return this.attributes.find(attribute => attribute.attribute.id === id)
  }

  set currentWeapon(weapon: Weapon | null) {
    this._currentWeapon = weapon
    
    // Check if weapon has a skill before proceeding
    if (!weapon?.skill) {
      console.warn('Weapon has no skill, returning early. Weapon:', weapon);
      return
    }
    
    const skillDistribution = this._getDistributionOfSkill(weapon.skill)

    if (this._currentWeapon.skill.skillGroupId === 1) {
      this.currentAttack = skillDistribution ? this.attack_basis + skillDistribution.attack : this.attack_basis
      this.currentParade = skillDistribution ? this.parade_basis + skillDistribution.parade : this.parade_basis
    }
    if (this._currentWeapon.skill.skillGroupId === 8) {
      const actualSkill = this.skills.find((skill) => {
        return skill.getSkill().id === this._currentWeapon.skill.id
      })
      if (actualSkill) {
        this.currentLongRangeValue = this.fernkampf_basis + actualSkill.value
      } else {
        console.error('ERROR: Could not find actualSkill for ranged weapon, skills array length:', this.skills.length);
      }
    }

  }

  get attack(): number {
    return this.currentAttack
  }

  get parade(): number {
    return this.currentParade
  }

  get currentWeapon() {
    return this._currentWeapon
  }

  currentWeaponSkillIsMelee(): boolean {
    const result = this._currentWeapon && this._currentWeapon.skill.skillGroupId === 1;
    return result;
  }

  currentWeaponSkillIsLongRange(): boolean {
    if (this._currentWeapon)
      return this._currentWeapon.skill.skillGroupId === 8
    else return false
  }

  get currentWeaponDamageText(): string {
    return this._currentWeapon ? this._currentWeapon.damageText : '0'
  }

  get currentLife(): number {
    return this.life - this.life_lost
  }

  get currentMagicEnergy(): number {
    return this.magicEnergy - this.magicEnergy_lost
  }

  getAttackOfWeaponSkill(weaponSkill: Skill): number {
    const skillDistribution = this._getDistributionOfSkill(weaponSkill)
    return skillDistribution ? this.attack_basis + skillDistribution.attack : this.attack_basis
  }

  get availablePoints(): number {
    return this.experience - this.experience_used;
  }

  getParadeOfWeaponSkill(weaponSkill: Skill): number {
    const skillDistribution = this._getDistributionOfSkill(weaponSkill)
    return skillDistribution ? this.parade_basis + skillDistribution.attack : this.parade_basis
  }

  get fightTexts(): string[]{
    return this.currentWeapon ? [`${this.currentWeapon.name}`, `AT: ${this.currentAttack}, PA: ${this.currentParade}`, `TP: ${this.currentWeaponDamageText}`] : ['keine Waffe gesetzt', 'AT:', 'PA:']
  }
}