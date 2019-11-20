import { TestBed } from '@angular/core/testing';

import { PlayerHighlightsDataService } from './player-highlights-data.service';

describe('PlayerHighlightsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerHighlightsDataService = TestBed.get(PlayerHighlightsDataService);
    expect(service).toBeTruthy();
  });
});
