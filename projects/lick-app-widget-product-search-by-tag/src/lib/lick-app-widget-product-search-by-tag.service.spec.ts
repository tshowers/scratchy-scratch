import { TestBed } from '@angular/core/testing';

import { LickAppWidgetProductSearchByTagService } from './lick-app-widget-product-search-by-tag.service';

describe('LickAppWidgetProductSearchByTagService', () => {
  let service: LickAppWidgetProductSearchByTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickAppWidgetProductSearchByTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
