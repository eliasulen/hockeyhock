import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerHighlightsComponent } from './components/player-highlights/player-highlights.component';
import { GameDayHighlightsComponent } from './components/game-day-highlights/game-day-highlights.component'
import { GameDaySummariesComponent } from './components/game-day-summaries/game-day-summaries.component'
import { Settings } from './data/internal/setting'


const routes: Routes = [
  {
    path: '',
    redirectTo: Settings.routes.gameDayHighlights,
    pathMatch: 'full'
  },
  {
    path: Settings.routes.playerHighlights,
    component: PlayerHighlightsComponent,
    pathMatch: 'full'
  },
  {
    path: Settings.routes.gameDayHighlights,
    component: GameDayHighlightsComponent,
    pathMatch: 'full'
  },
  {
    path: 'game-day-summaries',
    component: GameDaySummariesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
