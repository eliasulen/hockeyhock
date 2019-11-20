import { TestBed } from '@angular/core/testing';

import { PlayerHighlightsFactoryService } from './player-highlights-factory.service';

describe('PlayerHighlightsFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerHighlightsFactoryService = TestBed.get(PlayerHighlightsFactoryService);
    expect(service).toBeTruthy();
  });
});
