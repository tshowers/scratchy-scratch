import { TestBed } from '@angular/core/testing';

import { LickAppWidgetProductWishlistService } from './lick-app-widget-product-wishlist.service';

describe('LickAppWidgetProductWishlistService', () => {
  let service: LickAppWidgetProductWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickAppWidgetProductWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
