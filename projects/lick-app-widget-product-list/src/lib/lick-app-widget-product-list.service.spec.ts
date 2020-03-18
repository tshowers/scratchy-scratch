import { TestBed } from '@angular/core/testing';

import { LickAppWidgetProductListService } from './lick-app-widget-product-list.service';

describe('LickAppWidgetProductListService', () => {
  let service: LickAppWidgetProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickAppWidgetProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
