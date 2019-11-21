import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from './modules/shared/shared.module';
import { PlayerHighlightsComponent } from './components/player-highlights/player-highlights.component';
import { HomeComponent } from './components/home/home.component';

import {VgCoreModule} from 'videogular2/compiled/core';
import {VgControlsModule} from 'videogular2/compiled/controls';
import {VgOverlayPlayModule} from 'videogular2/compiled/overlay-play';
import {VgBufferingModule} from 'videogular2/compiled/buffering';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlayerHighlightsComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
     VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
