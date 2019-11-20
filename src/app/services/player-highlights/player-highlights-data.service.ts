import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'
import { PlayerHighlightsResponse } from '../../data/player-highlights/player-highlights-response'

const base: string = "https://search-api.svc.nhl.com/svc/search/v2/nhl_nr_sitesearch_en/sitesearch?hl=true&facet=type&expand=partner.media.image&q=";
///team/{teamId}/?hl=true&facet=type&expand=partner.media.image&q=

@Injectable({
  providedIn: 'root'
})

export class PlayerHighlightsDataService {

  constructor(private http: HttpClient) { }

  private getAmountOfPages(playerId: number)
  {
    let url = `${base}${playerId}&page=${1}&type=video`;

    return this.http.get<PlayerHighlightsResponse>(url)
    .pipe(
      map(result => {
        return result.meta.hits / result.meta.page_size;
      })
    )
  }

  search(playerId: number)
  {
    let url = `${base}${playerId}&page=${1}&type=video`;

     return this.getAmountOfPages(playerId)
    .pipe(
      map(amountOfPages => {
        let data : Observable<PlayerHighlightsResponse>[] = []
        for(var i = 0; i < amountOfPages - 1 ; i++)
        {
          let url = `${base}${playerId}&page=${i+1}&type=video`;
          data.push(this.http.get<PlayerHighlightsResponse>(url))
        }

        return forkJoin(data)
      })
    )

    }
    
     
  }



