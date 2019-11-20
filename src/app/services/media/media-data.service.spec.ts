import { TestBed } from '@angular/core/testing';

import { MediaDataService } from './media-data.service';

describe('MediaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaDataService = TestBed.get(MediaDataService);
    expect(service).toBeTruthy();
  });
});
