import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDaySummariesComponent } from './game-day-summaries.component';

describe('GameDaySummariesComponent', () => {
  let component: GameDaySummariesComponent;
  let fixture: ComponentFixture<GameDaySummariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDaySummariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDaySummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
