import { TestBed } from '@angular/core/testing';

import { LickyLoggerService } from './licky-logger.service';

describe('LickyLoggerService', () => {
  let service: LickyLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LickyLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
