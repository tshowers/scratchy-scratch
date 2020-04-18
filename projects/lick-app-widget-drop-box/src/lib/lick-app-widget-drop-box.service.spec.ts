import { TestBed } from '@angular/core/testing';

import { LickAppWidgetDropBoxService } from './lick-app-widget-drop-box.service';

describe('LickAppWidgetDropBoxService', () => {
  let service: LickAppWidgetDropBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickAppWidgetDropBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
