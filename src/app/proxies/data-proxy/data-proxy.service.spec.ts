import { TestBed } from '@angular/core/testing';

import { DataProxyService } from './data-proxy.service';

describe('DataProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataProxyService = TestBed.get(DataProxyService);
    expect(service).toBeTruthy();
  });
});
