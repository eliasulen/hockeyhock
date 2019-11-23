import { TestBed } from '@angular/core/testing';

import { ScheduleDataService } from './schedule-data.service';

describe('ScheduleDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScheduleDataService = TestBed.get(ScheduleDataService);
    expect(service).toBeTruthy();
  });
});
