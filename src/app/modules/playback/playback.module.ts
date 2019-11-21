import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgStreamingModule } from 'videogular2/compiled/streaming'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VgCoreModule,
    VgStreamingModule,
    VgControlsModule
  ],
   exports:
   [
     CommonModule,
     VgCoreModule,
     VgStreamingModule,
     VgControlsModule
  ]
})
export class PlaybackModule { }
