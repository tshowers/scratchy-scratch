import { TestBed } from '@angular/core/testing';

import { LickMarketingRelatedProducts1Service } from './lick-marketing-related-products1.service';

describe('LickMarketingRelatedProducts1Service', () => {
  let service: LickMarketingRelatedProducts1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickMarketingRelatedProducts1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
