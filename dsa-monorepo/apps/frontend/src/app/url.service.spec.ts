import { TestBed } from '@angular/core/testing';

import { UrlService } from './url.service';

describe('UrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlService = TestBed.inject(UrlService);
    expect(service).toBeTruthy();
  });
});
