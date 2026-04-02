import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from 'app/url.service';
import { AscensionPricing } from './ascensionPricing';

@Injectable({
  providedIn: 'root'
})
export class EnhancementPricingService {

  private ascensionsUrl: string = UrlService.getBaseUrl() + '/ascensions/';
  private ascensionsPromise: Promise<AscensionPricing[]>;
  private ascensionPricing: Array<AscensionPricing>;
  constructor(private http: HttpClient) { }

  public getAscensionPricing(): Promise<AscensionPricing[]> {
    if (!this.ascensionPricing) {
      this.ascensionsPromise = this.http.get(this.ascensionsUrl)
        .toPromise()
        .then(response => {
          this.ascensionPricing = this.extractAscensions(response);
          return this.ascensionPricing;
        })
        return this.ascensionsPromise;
    } else {
      return new Promise(resolve => {
        resolve(this.ascensionPricing)
      })
    }
  }

  private extractAscensions(response: any): Array<AscensionPricing> {
    return response.map((ascensionResponse, index) => {
      return new AscensionPricing(ascensionResponse, index)
    })
    
  }
  
}
