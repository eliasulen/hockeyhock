import { Component, OnInit, Input } from '@angular/core';
import { Media, Playback } from '../../data/internal/media';
import { MediaAdministratorService } from '../../services/media/media-administrator.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  @Input() media: Media;

  constructor(public mediaAdministratorService: MediaAdministratorService) { }

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
    return true;
  }

  isHls(playback: Playback) : boolean
  {
    return false;
  }

  isEmbed(playback: Playback) : boolean
  {
    return false;
  }

  ngOnInit() {
    console.log(this.media)
  }

}
