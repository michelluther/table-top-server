import { ChangeDetectorRef, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroLifeService } from 'app/hero-controls/hero-life.service';
import { Hero } from './hero';
import { InventoryItem } from './inventoryItem';
import { AccountEntry } from './moneyInventory';

import { UrlService } from 'app/url.service';



@Injectable()
export class InventoryService {

  private inventoryItemsUrl = `${UrlService.getBaseUrl()}/inventoryItems/`;


  private inventoryItems: InventoryItem[];
  private inventoryItemsPromise: Promise<InventoryItem[]>;



   constructor(private http: HttpClient, private chRef: ChangeDetectorRef, private service: HeroLifeService) {
  }

  updateAccountEntry(accountEntry: AccountEntry, hero: Hero, newAmountValue: number) {
    return new Promise((resolve, reject) => {
      this.service.sendUpate({
        heroId: hero.id,
        type: 'updateAccountEntry',
        unit: accountEntry.unit.toLowerCase(),
        amount: newAmountValue
      })
      resolve(accountEntry)
    })
  }

  addInventory(inventoryItem: InventoryItem, hero: Hero): Promise<InventoryItem> {
    return new Promise((resolve, reject) => {
      this.service.sendUpate({
        heroId: hero.id,
        type: 'addInventoryItem',
        name: inventoryItem.name,
        amount: inventoryItem.amount,
        weight: inventoryItem.weight
      })
      resolve(inventoryItem)
    })
  }

  setInventoryItemAmount(inventoryItem: InventoryItem, hero: Hero, amount: number): Promise<InventoryItem> {
    return new Promise(resolve => {
      this.service.sendUpate({
        heroId: hero.id,
        inventoryItemId: inventoryItem.id,
        type: 'updateInventoryItem',
        amount: amount
      })
      resolve(inventoryItem)
    })
  }

  deleteInventory(inventoryItem: InventoryItem, hero: Hero): void {
    new Promise((resolve, reject) => {
      this.service.sendUpate({
        type: 'deleteInventoryItem',
        heroId: hero.id,
        inventoryItemId: inventoryItem.id
      })
      resolve(inventoryItem)
    })
  }

}
