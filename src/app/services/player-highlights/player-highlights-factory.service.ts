import { Injectable } from '@angular/core';
import { PlayerHighlightsDataService } from './player-highlights-data.service'
import { MediaDataService } from '../media/media-data.service'
import { PlayerHighlight, PlayerHighlightTags } from '../../data/player-highlights/player-highlight';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, forkJoin, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerHighlightsFactoryService {

  constructor(
    private playerHighlightsDataService: PlayerHighlightsDataService,
    ) { }  

  search(playerId: number, take: number, skip: number)
  {     
      return this.playerHighlightsDataService.search(playerId, take, skip)
      .pipe(
        map(x => {
          return x.pipe(
            map(x => {
              let data : PlayerHighlight[] = []
              let count : number = 0
              x.forEach((that, index) => {
               
               that.docs.forEach((that) => 
               {
                if(take > count)
                {
                   var playerHighlight : PlayerHighlight = {
                   blurb: that.blurb,
                   mediaPlaybackId: that.tags.filter(x => x.type == PlayerHighlightTags.mediaPlaybackId).map(x => x.value)[0] || null, //TODO fix common method
                   statsEventId: that.tags.filter(x => x.type == PlayerHighlightTags.StatsEventId).map(x => x.value)[0] || null,
                   gameId: that.tags.filter(x => x.type == PlayerHighlightTags.GameId).map(x => x.value)[0] || null,
                   date: that.tags.filter(x => x.type == PlayerHighlightTags.Date).map(x => x.value)[0] || null,
                   media: null //Set later
                 }
                 data.push(playerHighlight)
                 count++
                }
               })
              })
              return data;
            })
          )
        })
      )
  }
  }

