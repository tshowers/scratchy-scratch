import { TestBed } from '@angular/core/testing';

import { LickAppWidgetSectionEditService } from './lick-app-widget-section-edit.service';

describe('LickAppWidgetSectionEditService', () => {
  let service: LickAppWidgetSectionEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickAppWidgetSectionEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
