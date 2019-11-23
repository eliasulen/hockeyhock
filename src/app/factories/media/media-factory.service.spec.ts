import { TestBed } from '@angular/core/testing';

import { MediaFactoryService } from './media-factory.service';

describe('MediaFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaFactoryService = TestBed.get(MediaFactoryService);
    expect(service).toBeTruthy();
  });
});
