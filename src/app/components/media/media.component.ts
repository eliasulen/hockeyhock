import { Component, OnInit, Input } from '@angular/core';
import { Media, Playback } from '../../data/internal/media';
import { SettingService } from '../../services/setting/setting.service';
import { SettingType, Settings } from '../../data/internal/setting'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  public showHls : boolean = false;
  public showMp4 : boolean = false;
  public showEmbed : boolean = false;

  @Input() media: Media;

  constructor(private settingService: SettingService) {

    this.updateSources(this.settingService.get(SettingType.source))

    this.settingService.settingChanged.subscribe(x => {
      if(x && x.key == SettingType.source)
      {
        this.updateSources(x.value)
      }
    })
   }

   private updateSources(value: string)
   {
    this.showHls = value == Settings.source.m3u8;
    this.showEmbed = false;
    this.showMp4 = value == Settings.source.mp4;
   }

  showPlayback(playback: Playback, media: Media) : boolean
  {
    return true;
  }

  canShowHls()
  {
    return true;
  }

  canShowMp4()
  {
    return true;
  }

  getVideoId(media: Media) : number
  {
    return media.mediaPlaybackId; 
  }

  ngOnInit() {

  }

}
