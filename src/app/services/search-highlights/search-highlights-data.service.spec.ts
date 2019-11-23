import { TestBed } from '@angular/core/testing';

import { SearchHighlightsDataService } from './search-highlights-data.service';

describe('SearchHighlightsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchHighlightsDataService = TestBed.get(SearchHighlightsDataService);
    expect(service).toBeTruthy();
  });
});
