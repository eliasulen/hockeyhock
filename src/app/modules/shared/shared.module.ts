import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '../ui/ui.module'

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PlaybackModule } from '../playback/playback.module'

import { CustomHttpInterceptor } from '../../interceptors/custom-http-interceptor'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
    HttpClientModule,
    PlaybackModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports: [
    CommonModule,
    UiModule,
    TranslateModule,
    HttpClientModule,
    PlaybackModule
  ], providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }]
})
export class SharedModule { }
