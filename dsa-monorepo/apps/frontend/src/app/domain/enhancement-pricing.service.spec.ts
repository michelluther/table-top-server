import { TestBed } from '@angular/core/testing';

import { EnhancementPricingService } from './enhancement-pricing.service';

describe('EnhancementPricingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnhancementPricingService = TestBed.inject(EnhancementPricingService);
    expect(service).toBeTruthy();
  });
});
