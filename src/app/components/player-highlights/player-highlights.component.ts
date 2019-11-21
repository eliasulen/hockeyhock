import { Component, OnInit } from '@angular/core';
import { PlayerHighlightsFactoryService } from '../../services/player-highlights/player-highlights-factory.service';
import { PlayerHighlight } from '../../data/player-highlights/player-highlight';
import { MediaFactoryService } from '../../services/media/media-factory.service';
import { Observable, forkJoin } from 'rxjs';
import { Media, Playback, MediaPlayback } from '../../data/media/media';

@Component({
  selector: 'app-player-highlights',
  templateUrl: './player-highlights.component.html',
  styleUrls: ['./player-highlights.component.scss']
})
export class PlayerHighlightsComponent implements OnInit {

  public playerHighlights: PlayerHighlight[] = [];

  constructor(
    private playerHighlightFactoryService: PlayerHighlightsFactoryService,
    private mediaFactoryService: MediaFactoryService
    ) { }

  ngOnInit() {
    
    let take : number = 11;

    this.playerHighlightFactoryService.search(8476453, 10, 0).subscribe(x => 
      {
        x.subscribe(x => { 
          let playerHighlights = x;
          let data : Observable<Media>[] = []

          playerHighlights.forEach((that) => {
            data.push(this.mediaFactoryService.get(that.mediaPlaybackId))
          })

          forkJoin(data).subscribe(y => {
            y.forEach((that) => 
            {
              playerHighlights.filter(x => x.mediaPlaybackId == that.mediaPlaybackId)[0].media = that;
            })

            playerHighlights = playerHighlights.filter(
              x => x.media && x.media.playbacks && x.media.playbacks.length > 0 && x.media.playbacks.filter(p => p.type != MediaPlayback.embed).length > 0);

            this.playerHighlights = playerHighlights;

            console.log(this.playerHighlights)
          })
        })
      });
    
  }

  showVideo(playback: Playback, playbacks: Playback[])
  {
    if(!playbacks)
      return false;

    let first = MediaPlayback.m3u8;
    let second = MediaPlayback.mp4;
    let third = MediaPlayback.embed;

      if(playback.type == first)
        return true;

      if(playback.type == second && playbacks.filter(f => f.type == first).length == 0)
        return true;

      if(playback.type == third && playbacks.filter(f => f.type == first).length == 0 && playbacks.filter(f => f.type == second).length == 0)
        return true;

      return false;
  }

}
