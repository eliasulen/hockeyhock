import { Injectable } from '@angular/core';
import { MediaDataService } from './media-data.service'
import { map } from 'rxjs/operators'
import { Media, MediaPlayback, Playback } from '../../data/media/media'

@Injectable({
  providedIn: 'root'
})
export class MediaFactoryService {

  constructor(private mediaDataService: MediaDataService) { }

  get(mediaPlaybackId)
  {
    return this.mediaDataService
    .get(mediaPlaybackId)
    .pipe(
      map(x => {

        let playbacks: Playback[] = []

        if(x.playbacks)
        {
        playbacks = x.playbacks
        .filter(x => x.name == MediaPlayback.m3u8 || x.name == MediaPlayback.mp4)
        .map(x => {
          let playback : Playback =
          {
            type: x.name == MediaPlayback.m3u8 ? MediaPlayback.m3u8 : MediaPlayback.mp4, //TODO Läs ut enum från value
            url: x.url
          }
          return playback;
        });
       }

        let playback : Playback =
        {
          type: MediaPlayback.embed,
          url: `https://www.nhl.com${x.url.replace("/video/", "/video/embed/")}`
        }

        playbacks.push(playback);
       
        
        let media : Media =
        {
          playbacks: playbacks,
          mediaPlaybackId: mediaPlaybackId
        }

        return media;
      })
    )
  }
}
