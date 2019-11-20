import { TestBed } from '@angular/core/testing';

import { PlayerHighlightsService } from './player-highlights.service';

describe('PlayerHighlightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerHighlightsService = TestBed.get(PlayerHighlightsService);
    expect(service).toBeTruthy();
  });
});
