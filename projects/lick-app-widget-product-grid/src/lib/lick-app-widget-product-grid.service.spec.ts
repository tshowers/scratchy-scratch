import { TestBed } from '@angular/core/testing';

import { LickAppWidgetProductGridService } from './lick-app-widget-product-grid.service';

describe('LickAppWidgetProductGridService', () => {
  let service: LickAppWidgetProductGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickAppWidgetProductGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
