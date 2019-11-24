import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Media, Playback, MediaSource } from '../../data/internal/media';
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
  @Input() dialog : boolean = false;

  public sourceHls = MediaSource.m3u8
  public sourceMp4 = MediaSource.mp4
  public sourceEmbed = "todo"

  @Input() public media: Media;

  constructor(private settingService: SettingService) {

    this.updateSources(this.settingService.get(SettingType.source))

    if(!this.dialog)
    {
    this.settingService.settingChanged.subscribe(x => {
      if(x && x.key == SettingType.source)
      {
        this.updateSources(x.value)
      }
    })
    }
   }

   onPlayerReady($event: any, dialog: boolean)
   {
     if(dialog)
     {

     }
   }

   public selectedSource(media: Media)
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


  showMedia()
  {
    return this.media;
  }


  getVideoId(media: Media) : number
  {
    return media.mediaPlaybackId; 
  }

  ngOnInit() {

  }

}
