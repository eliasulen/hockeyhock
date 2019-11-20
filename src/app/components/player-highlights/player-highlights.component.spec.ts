import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHighlightsComponent } from './player-highlights.component';

describe('PlayerHighlightsComponent', () => {
  let component: PlayerHighlightsComponent;
  let fixture: ComponentFixture<PlayerHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
