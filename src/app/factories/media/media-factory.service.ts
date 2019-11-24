import { Injectable } from '@angular/core';
import { MediaDataService } from '../../services/media/media-data.service'
import { map } from 'rxjs/operators'
import { Media, MediaPlayback, Playback, MediaKeywordsAll, MediaSource } from '../../data/internal/media'
import { MediaResponse } from '../../data/external/media-response'

@Injectable({
  providedIn: 'root'
})
export class MediaFactoryService {

  constructor(private mediaDataService: MediaDataService) { }

  getByMediaPlaybackId(mediaPlaybackId)
  {
    return this.mediaDataService
    .getByMediaPlaybackId(mediaPlaybackId)
    .pipe(
      map(x => {
        return this.toMedia(x, mediaPlaybackId);
      })
    )
  }

  private toMedia(x: MediaResponse, mediaPlaybackId: number) : Media
  {
    let playbacks: Playback[] = []

    if(x.playbacks)
    {
    playbacks = x.playbacks
    .filter(x => x.name == MediaPlayback.HTTP_CLOUD_WIRED_60 || x.name == MediaPlayback.FLASH_1800K_896x504 || x.name == MediaPlayback.FLASH_1800K_960X540)
    .map(x => {
      let playback : Playback =
      {
        type: MediaPlayback[x.name],
        url: x.url,
        source: x.name == MediaPlayback.HTTP_CLOUD_WIRED_60 ? MediaSource.m3u8 : MediaSource.mp4
      }
      return playback;
    });
   }

    let playback : Playback =
    {
      type: MediaPlayback.embed,
      url: `https://www.nhl.com${x.url.replace("/video/", "/video/embed/")}`,
      source: MediaSource.embed
    }

    playbacks.push(playback);
   
    
    let media : Media =
    {
      posterUrl: x.posterUrl,
      playbacks: playbacks,
      mediaPlaybackId: mediaPlaybackId,
      captionsUrl: x.keywordsAll.filter(f => f.type == MediaKeywordsAll.closed_captions_location_vtt).map(f => f.value)[0]
    }

    return media;
  }
}
