import { TestBed } from '@angular/core/testing';

import { GameDayHighlightsFactoryService } from './game-day-highlights-factory.service';

describe('GameDayHighlightsFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameDayHighlightsFactoryService = TestBed.get(GameDayHighlightsFactoryService);
    expect(service).toBeTruthy();
  });
});
