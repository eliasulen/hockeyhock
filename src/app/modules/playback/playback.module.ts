import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgStreamingModule } from 'videogular2/compiled/streaming'
import { VgBufferingModule } from 'videogular2/compiled/buffering'
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VgCoreModule,
    VgStreamingModule,
    VgControlsModule,
    VgBufferingModule,
    VgOverlayPlayModule
  ],
   exports:
   [
     CommonModule,
     VgCoreModule,
     VgStreamingModule,
     VgControlsModule,
     VgBufferingModule,
     VgOverlayPlayModule
  ]
})
export class PlaybackModule { }
