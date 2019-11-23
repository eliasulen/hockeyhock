import { TestBed } from '@angular/core/testing';

import { MediaAdministratorService } from './media-administrator.service';

describe('MediaAdministratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaAdministratorService = TestBed.get(MediaAdministratorService);
    expect(service).toBeTruthy();
  });
});
