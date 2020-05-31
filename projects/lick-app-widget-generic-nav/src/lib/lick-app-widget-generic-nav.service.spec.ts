import { TestBed } from '@angular/core/testing';

import { LickAppWidgetGenericNavService } from './lick-app-widget-generic-nav.service';

describe('LickAppWidgetGenericNavService', () => {
  let service: LickAppWidgetGenericNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickAppWidgetGenericNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
