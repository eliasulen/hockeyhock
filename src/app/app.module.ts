import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from './modules/shared/shared.module';
import { PlayerHighlightsComponent } from './components/player-highlights/player-highlights.component';
import { GameDayHighlightsComponent } from './components/game-day-highlights/game-day-highlights.component';
import { MediaComponent } from './components/media/media.component';
import { MediaDialogComponent } from './dialogs/media-dialog/media-dialog.component';
import { SettingComponent } from './components/setting/setting.component';
import { GameDaySummariesComponent } from './components/game-day-summaries/game-day-summaries.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlayerHighlightsComponent,
    GameDayHighlightsComponent,
    MediaComponent,
    MediaDialogComponent,
    SettingComponent,
    GameDaySummariesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatMomentDateModule
  ],
  entryComponents: [
    MediaDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
