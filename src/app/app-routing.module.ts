import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerHighlightsComponent } from './components/player-highlights/player-highlights.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'player-highlights',
    component: PlayerHighlightsComponent,
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
