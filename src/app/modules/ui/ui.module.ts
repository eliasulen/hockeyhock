import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    //
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class UiModule { }
