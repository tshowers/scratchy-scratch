import { TestBed } from '@angular/core/testing';

import { LickAppWidgetProductBestSellersService } from './lick-app-widget-product-best-sellers.service';

describe('LickAppWidgetProductBestSellersService', () => {
  let service: LickAppWidgetProductBestSellersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickAppWidgetProductBestSellersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
