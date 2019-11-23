import { Injectable } from '@angular/core';
import { Media, MediaPlayback, Playback } from '../../data/internal/media'

@Injectable({
  providedIn: 'root'
})
export class MediaAdministratorService {

  constructor() { }

  showPlayback(playback: Playback, media: Media) : boolean
  {
    return false;
  }

  showMedia(media: Media) : boolean
  {
    return false;
  }

  getVideoId(media: Media) : string
  {
    return null;
  }

  isMp4(playback: Playback) : boolean
  {
    return false;
  }

  isHls(playback: Playback) : boolean
  {
    return false;
  }

  isEmbed(playback: Playback) : boolean
  {
    return false;
  }
}
