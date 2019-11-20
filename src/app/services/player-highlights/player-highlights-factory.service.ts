import { Injectable } from '@angular/core';
import { PlayerHighlightsDataService } from './player-highlights-data.service'
import { MediaDataService } from '../media/media-data.service'
import { PlayerHighlight } from '../../data/player-highlights/player-highlight';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, forkJoin, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerHighlightsFactoryService {

  constructor(
    private playerHighlightsDataService: PlayerHighlightsDataService,
    private mediaDataService: MediaDataService
    ) { }  

  search(playerId: number)
  {     
      return this.playerHighlightsDataService.search(playerId)
      .pipe(
        map(x => {
          return x.pipe(
            map(x => {
              let data : PlayerHighlight[] = []
              x.forEach((that) => {
               that.docs.forEach((that) => 
               {
                 var playerHighlight : PlayerHighlight = {
                   blurb: that.blurb,
                   mediaPlaybackId: null,
                   statsEventId: null,
                   gameId: null,
                   date: that.tags.filter(x => x.type == "display_timestamp").map(x => x.value)[0],
                   media: null
                 }

                 data.push(playerHighlight)
               })
              })
              return data;
            })
          )
        })
      )
  }
  }

