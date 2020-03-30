import { TestBed } from '@angular/core/testing';

import { LickMarketingProduct1Service } from './lick-marketing-product1.service';

describe('LickMarketingProduct1Service', () => {
  let service: LickMarketingProduct1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickMarketingProduct1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
