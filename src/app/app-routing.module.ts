import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerHighlightsComponent } from './components/player-highlights/player-highlights.component';
import { GameDayHighlightsComponent } from './components/game-day-highlights/game-day-highlights.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'game-day-highlights',
    pathMatch: 'full'
  },
  {
    path: 'player-highlights',
    component: PlayerHighlightsComponent,
    pathMatch: 'full'
  },
  {
    path: 'game-day-highlights',
    component: GameDayHighlightsComponent,
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
