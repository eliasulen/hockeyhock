import { Component, OnInit, Input } from '@angular/core';
import { Media, Playback, MediaSource, MediaEpg } from '../../data/internal/media';
import { MediaAdministratorService } from '../../services/media/media-administrator.service';
import { Settings } from '../../data/internal/setting'
import { VgAPI } from 'videogular2/compiled/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {


  public source: string;
  public epg: string;
  private api: VgAPI;

  public settings : any = Settings

  @Input() dialog : boolean = false;

  @Input() public medias: Media[];
  

  constructor(public mediaAdministratorService: MediaAdministratorService) {

    this.mediaAdministratorService.sourceChanged.subscribe(x => {
      if(x)
      {
        this.source = x;
      }
    })

    this.mediaAdministratorService.epgChanged.subscribe(x => {
      if(x)
      {
        this.epg = x;
      }
    })
    
   }

  ngOnInit() {

  }

  public onPlayerReady(api: VgAPI, videoId: string)
  {
    this.api = api;
    
    // this.api.getDefaultMedia().subscriptions.loadedData.subscribe(x => {

    //   if(this.api.textTracks[0])
    //   {
    //     for(var i = 0; i < this.api.textTracks.length; i++)
    //     {
    //       this.api.textTracks[0].removeCue(this.api.textTracks[0].cues[i])
    //     }
    //   }
    // })
  }

}
