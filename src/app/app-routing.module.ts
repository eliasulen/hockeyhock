import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'highlights',
    component: HighlightsComponent,
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
