import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Media, Playback, MediaSource, MediaEpg } from '../../data/internal/media';
import { MediaAdministratorService } from '../../services/media/media-administrator.service';
import { Settings } from '../../data/internal/setting'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  public source: string;
  public epg: string;

  public settings : any = Settings

  @Input() dialog : boolean = false;

  @Input() public medias: Media[];
  

  constructor(private mediaAdministratorService: MediaAdministratorService) {

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

}
