import { Component, OnInit } from '@angular/core';
import { PlayerHighlightsFactoryService } from '../../factories/player-highlights/player-highlights-factory.service';
import { PlayerHighlight } from '../../data/internal/player-highlight';
import { MediaFactoryService } from '../../factories/media/media-factory.service';
import { Observable, forkJoin } from 'rxjs';
import { Media, Playback, MediaPlayback } from '../../data/internal/media';
import { tap } from 'rxjs/operators';
import { SpinnerService } from '../../services/spinner/spinner.service';

@Component({
  selector: 'app-player-highlights',
  templateUrl: './player-highlights.component.html',
  styleUrls: ['./player-highlights.component.scss']
})
export class PlayerHighlightsComponent implements OnInit {

  public playerHighlights: PlayerHighlight[] = [];
  constructor(
    private playerHighlightFactoryService: PlayerHighlightsFactoryService,
    private mediaFactoryService: MediaFactoryService,
    public spinnerService: SpinnerService
    ) { }

  ngOnInit() {
    //8476453

    this.callSearch(8476453, 5, 0);
  }

  private callSearch(playerId: number, take: number, skip: number)
  {
    this.playerHighlightFactoryService.search(playerId, take, skip).subscribe(x => 
      {
        x.pipe(tap(x => {
          
        })).subscribe(x => { 
          //TODO flytta in i factory service
          let playerHighlights = x;
          let data : Observable<Media>[] = []

          playerHighlights.forEach((that) => {
            data.push(this.mediaFactoryService.getByMediaPlaybackId(that.mediaPlaybackId))
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

}
