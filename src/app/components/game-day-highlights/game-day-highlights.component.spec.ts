import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDayHighlightsComponent } from './game-day-highlights.component';

describe('GameDayHighlightsComponent', () => {
  let component: GameDayHighlightsComponent;
  let fixture: ComponentFixture<GameDayHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDayHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDayHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
