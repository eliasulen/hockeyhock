import { Injectable } from '@angular/core';
import { SearchHighlightsDataService } from '../../services/search-highlights/search-highlights-data.service'
import { PlayerHighlight, PlayerHighlightTags } from '../../data/internal/player-highlight';
import { SearchHighlightResponse } from '../../data/external/search-highlights-response'

import { MediaDataService } from '../../services/media/media-data.service'
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, forkJoin, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerHighlightsFactoryService {

  constructor(
    private searchHighlightsDataService: SearchHighlightsDataService,
    ) { }  

  search(playerId: number, take: number, skip: number)
  {     
      return this.searchHighlightsDataService.search(playerId, take, skip)
      .pipe(
        map(x => {
          return x.pipe(
            map(x => {
              return this.toPlayerHighlights(x, take);
            })
          )
        })
      )
  }

  private toPlayerHighlights(x: SearchHighlightResponse[], take: number) : PlayerHighlight[]
  {
    let data : PlayerHighlight[] = []
    let count : number = 0
    x.forEach((that, index) => {
     
     that.docs.forEach((that) => 
     {
      if(take > count)
      {
         var playerHighlight : PlayerHighlight = {
         blurb: that.blurb,
         mediaPlaybackId: that.tags.filter(x => x.type == PlayerHighlightTags.mediaplaybackid).map(x => x.value)[0] || null, //TODO fix common method
         statsEventId: that.tags.filter(x => x.type == PlayerHighlightTags.statsEventId).map(x => x.value)[0] || null,
         gameId: that.tags.filter(x => x.type == PlayerHighlightTags.gameId).map(x => x.value)[0] || null,
         date: that.tags.filter(x => x.type == PlayerHighlightTags.display_timestamp).map(x => x.value)[0] || null,
         media: null //Set later
       }
       data.push(playerHighlight)
       count++
      }
     })
    })
    return data;
  }
  }

