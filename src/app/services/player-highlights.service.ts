import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerHighlights } from '../data/player-highlights'

const base: string = "https://search-api.svc.nhl.com/svc/search/v2/nhl_nr_sitesearch_en/sitesearch?hl=true&facet=type&expand=partner.media.image&q=";
///team/{teamId}/?hl=true&facet=type&expand=partner.media.image&q=

@Injectable({
  providedIn: 'root'
})

export class PlayerHighlightsService {

  constructor(private http: HttpClient) { }

  getLink(playerId: string, page: string) : Observable<HttpResponse<PlayerHighlights>>
  {
      let url = `${base}${playerId}&page=${page}&type=video`;
      return this.http.get<PlayerHighlights>(url, { observe: 'response' });
  }


}
