import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Media, Playback, MediaSource, MediaEpg } from '../../data/internal/media';
import { SettingService } from '../../services/setting/setting.service';
import { SettingType, Settings } from '../../data/internal/setting'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  showHls : boolean = false;
  showMp4 : boolean = false;
  showEmbed : boolean = false;

  epg: string;

  @Input() dialog : boolean = false;

  public sourceHls = MediaSource.m3u8
  public sourceMp4 = MediaSource.mp4
  public sourceEmbed = "todo"

  @Input() public medias: Media[];
  

  constructor(private settingService: SettingService) {

    this.updateSources(this.settingService.get(SettingType.source))
    this.epg = this.settingService.get(SettingType.epg)


    this.settingService.settingChanged.subscribe(x => {
      if(x)
      {
        if(x.key == SettingType.source)
        {
          this.updateSources(x.value)
        }
        if(x.key == SettingType.epg)
        {
          this.epg = x.value;
        }
      }
    })
    
   }

   public selectedEpg(medias: Media[])
   {
    if(medias.length == medias.filter(f => f.epg == MediaEpg.Default).length)
    return MediaEpg.Default;

      return this.epg;
   }

   public hasSelectedEpg(medias: Media[])
   {
      if(!medias)
      return false;

      if(medias.length == medias.filter(f => f.epg == MediaEpg.Default).length)
        return true;

      return medias.filter(f => f.epg == this.epg).length > 0
   }

   public validMedias(medias: Media[])
   {
    
    let result = true;

     medias.forEach(x => {
       if(!x)
       result = false;
     })

     return result;
   }


   public selectedSource()
   {
     if(this.showHls)
     return Settings.source.m3u8;

     if(this.showMp4)
     return Settings.source.mp4

   }

   public hasSelectedSource(media: Media)
   {

     if(this.showHls)
     {
       return media.playbacks.filter(f => f.source == Settings.source.m3u8).length > 0
     }

     if(this.showMp4)
     {
       return media.playbacks.filter(f => f.source == Settings.source.mp4).length > 0
     }

     return false;
   }

   public updateSources(value: string)
   {
    this.showHls = value == Settings.source.m3u8;
    this.showEmbed = false;
    this.showMp4 = value == Settings.source.mp4;
   }


  getVideoId(media: Media) : string
  {
    return media.mediaPlaybackId + '-' + media.epg; 
  }

  ngOnInit() {

  }

}
