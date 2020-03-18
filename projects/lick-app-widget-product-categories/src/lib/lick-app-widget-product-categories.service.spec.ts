import { TestBed } from '@angular/core/testing';

import { LickAppWidgetProductCategoriesService } from './lick-app-widget-product-categories.service';

describe('LickAppWidgetProductCategoriesService', () => {
  let service: LickAppWidgetProductCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickAppWidgetProductCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
