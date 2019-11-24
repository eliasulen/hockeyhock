import { Injectable } from '@angular/core';
import { Media, MediaEpg, MediaSource, Playback } from '../../data/internal/media'
import { Settings, SettingType } from '../../data/internal/setting'
import { SettingService } from '../setting/setting.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaAdministratorService {

private epg: string;
private source: string;
public sourceChanged: BehaviorSubject<string> = new BehaviorSubject(null)
public epgChanged: BehaviorSubject<string> = new BehaviorSubject(null)

constructor(private settingService: SettingService) { 

  this.epg = this.settingService.get(SettingType.epg)
  this.source = this.settingService.get(SettingType.source)

  this.settingService.settingChanged.subscribe(x => {
    if(x)
    {
      if(x.key == SettingType.source)
      {
        this.source = x.value;
        this.sourceChanged.next(this.source)
      }
      if(x.key == SettingType.epg)
      {
        this.epg = x.value;
        this.epgChanged.next(this.epg)
      }
    }
  })

  this.epgChanged.next(this.epg)
  this.sourceChanged.next(this.source)
}


public hasShowableMedia(medias: Media[])
{
  let valid = this.validMedias(medias)
  let epg = this.hasSelectedEpg(medias)
  let source = this.hasSelectedSource(medias)

  return valid && epg && source;
}

public getVideoId(media: Media) : string
{
  return media.mediaPlaybackId + '-' + media.epg; 
}

private validMedias(medias: Media[])
{
 
 let result = true;

  medias.forEach(x => {
    if(!x)
    result = false;
  })

  return result;
}

private hasSelectedEpg(medias: Media[])
{
   if(!medias)
   return false;

   if(medias.length > 0 && medias.length == medias.filter(f => f.epg == MediaEpg.Default).length)
     return true;

   let result = medias.filter(f => f.epg == this.epg).length > 0
   return result;
}

private hasSelectedSource(medias: Media[])
{
  if(!medias)
   return false;

   let result = medias.filter(f => f.playbacks.filter(p => p.source == this.source).length > 0).length > 0
   return result;
}

}
