import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationData, ConfirmDeletionComponent } from 'app/confirm-deletion/confirm-deletion.component';
import { Armor } from 'app/domain/armor';
import { ArmorService } from 'app/domain/armor.service';
import { Hero } from 'app/domain/hero';
import { InventoryService } from 'app/domain/inventory.service';
import { InventoryItem } from 'app/domain/inventoryItem';
import { AccountEntry } from 'app/domain/moneyInventory';
import { Skill } from 'app/domain/skill';
import { SkillService } from 'app/domain/skills.service';
import { Weapon } from 'app/domain/weapon';
import { WeaponService } from 'app/domain/weapons.service';
import { EditMoneyComponent, EditMoneyData } from 'app/edit-money/edit-money.component';

@Component({
    selector: 'inventory-display',
    templateUrl: './inventory-display.component.html',
    styleUrls: ['./inventory-display.component.css'],
    standalone: false
})
export class InventoryDisplayComponent implements OnInit {


  @Input()
  hero: Hero

  newWeapon: Weapon
  newArmor: Armor
  newInventoryItem: InventoryItem

  public selectedSkillId: number

  public showAddWeaponSheet: boolean = false
  public showAddArmorSheet: boolean = false
  public showAddInventorySheet: boolean = false
  private _addWeapon: Weapon
  private _weaponToDelete: Weapon
  private _armorToDelete: Armor
  private _inventoryItemToDelete: InventoryItem
  private _moneyUnitToEdit: string


  private deletionDialogRef: MatDialogRef<ConfirmDeletionComponent>
  private editModeyDialogRef: MatDialogRef<EditMoneyComponent>


  public weaponSkills: Skill[]

  constructor(private skillService: SkillService, private weaponService: WeaponService, private armorService: ArmorService, private inventoryService: InventoryService, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.skillService.getWeaponSkills().then(weaponSkills => {
      this.weaponSkills = weaponSkills;
      this.newWeapon = new Weapon(null, 'new weapon', 1, 4, 14, this.weaponSkills[0])
      this.newArmor = new Armor(null, 'Neue Rüstung', 2, 2),
        this.newInventoryItem = new InventoryItem(null, 'Neues Ding', 1, 1)
    })

  }

  /** money maintenance */

  editMoney(accountEntry: AccountEntry): void {
    this.editModeyDialogRef = this.dialog.open(EditMoneyComponent, { data: accountEntry })
    this.editModeyDialogRef.componentInstance.confirm.subscribe(this.updateAccountEntry.bind(this))
    this.editModeyDialogRef.componentInstance.cancel.subscribe(this.closeEditMoneyDialog.bind(this))
  }

  updateAccountEntry(updateMoneyData: EditMoneyData): void {
    this.inventoryService.updateAccountEntry(updateMoneyData.accountEntry, this.hero, updateMoneyData.newAmount)
    this.editModeyDialogRef.close();
  }

  closeEditMoneyDialog(): void {
    this.editModeyDialogRef.close()
  }

  /** weapon maintenance */
  addWeaponToInventory(): void {
    this.showAddWeaponSheet = true
  }

  addWeapon(): void {
    const selectedSkillId = this.selectedSkillId;
    const skill = this.weaponSkills.find(weaponSkill => {
      return weaponSkill.id == selectedSkillId
    })
    this.newWeapon.skill = skill;
    this.weaponService.addWeapon(this.newWeapon, this.hero)
    this.showAddWeaponSheet = false;
  }

  cancelAddWeaponToInventory(): void {
    this.showAddWeaponSheet = false
  }

  removeWeaponFromInventory(weapon: Weapon): void {
    this._weaponToDelete = weapon
    this.deletionDialogRef = this.dialog.open(ConfirmDeletionComponent, { data: new ConfirmationData('Möchtest Du das Ding wegwerfen?', 'Es handelt sich dabei um die Waffe <strong>"' + weapon.name + '"</strong>') })
    this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteWeapon.bind(this))
    this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this))
  }

  deleteWeapon(): void {
    this.weaponService.deleteWeapon(this._weaponToDelete, this.hero);
    this.deletionDialogRef.close();
  }

  /** armor maintenance*/

  addArmorToInventory(): void {
    this.showAddArmorSheet = true
  }

  removeArmorFromInventory(armor: Armor): void {
    this._armorToDelete = armor
    this.deletionDialogRef = this.dialog.open(ConfirmDeletionComponent, { data: new ConfirmationData('Möchtest Du die Rüstung wegwerfen?', 'Es handelt sich dabei um die das Rüstungsteil <strong>"' + armor.name + '"</strong>') })
    this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteArmor.bind(this))
    this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this))
  }

  cancelAddArmorToInventory(): void {
    this.showAddArmorSheet = false
  }

  addArmor(): void {
    this.armorService.addArmor(this.newArmor, this.hero)
    this.showAddArmorSheet = false
  }

  deleteArmor(): void {
    this.armorService.deleteArmor(this._armorToDelete, this.hero);
    this.deletionDialogRef.close();
  }

  /** general inventory maintenance */


  addInventoryToInventory(): void {
    this.showAddInventorySheet = true;
  }

  addInventory(): void {
    this.inventoryService.addInventory(this.newInventoryItem, this.hero)
    this.showAddInventorySheet = false;
  }

  cancelAddInventoryToInventory(): void {
    this.showAddInventorySheet = false;
  }

  removeInventoryItemFromInventory(inventoryItem: InventoryItem): void {
    this._inventoryItemToDelete = inventoryItem
    this.deletionDialogRef = this.dialog.open(ConfirmDeletionComponent, { data: new ConfirmationData('Brauchst Du das Stück nicht mehr?', 'Es handelt sich dabei um <strong>"' + inventoryItem.name + '"</strong>') })
    this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteInventory.bind(this))
    this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this))
  }

  deleteInventory(): void {
    this.inventoryService.deleteInventory(this._inventoryItemToDelete, this.hero)
    this.deletionDialogRef.close();
  }

  subtractFromInventoryAmount(inventoryItem: InventoryItem): void {
    if (inventoryItem.amount > 0) this.inventoryService.setInventoryItemAmount(inventoryItem, this.hero, inventoryItem.amount - 1)
  }

  addToInventoryAmount(inventoryItem: InventoryItem): void {
    this.inventoryService.setInventoryItemAmount(inventoryItem, this.hero, inventoryItem.amount + 1)
  }

  cancelDeletion(): void {
    this.deletionDialogRef.close();
  }

}
