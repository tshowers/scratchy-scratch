import { TestBed } from '@angular/core/testing';

import { LickAppWidgetNotificationService } from './lick-app-widget-notification.service';

describe('LickAppWidgetNotificationService', () => {
  let service: LickAppWidgetNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickAppWidgetNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
