import { TestBed } from '@angular/core/testing';

import { LickAppWidgetProductCheckoutService } from './lick-app-widget-product-checkout.service';

describe('LickAppWidgetProductCheckoutService', () => {
  let service: LickAppWidgetProductCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickAppWidgetProductCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
