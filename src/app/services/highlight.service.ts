import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Highlight } from '../data/highlight'

const base: string = "https://search-api.svc.nhl.com/svc/search/v2/nhl_nr_sitesearch_en/sitesearch/team/";

@Injectable({
  providedIn: 'root'
})

export class HighlightService {

  constructor(private http: HttpClient) { }

  getLink(teamId: string, playerId: string, page: string) : Observable<HttpResponse<Highlight>>
  {
      let url = `${base}${teamId}?hl=true&facet=type&expand=partner.media.image&q=${playerId}&page=${page}&type=video`;
      return this.http.get<Highlight>(url, { observe: 'response' });
  }

  getVideo(resource: string) : Observable<HttpResponse<string>>
  {
    let url = `${resource}`
    return this.http.get<string>(url, { observe: 'response'});
  }

  parseVideo(content: string) : string
  {
    let split = "contentURL";
    let splitEnd = ".mp4";
    let splitClean = "http";

    var url = content.substring(content.indexOf(split), content.indexOf(splitEnd) - content.indexOf(split) + splitEnd.length);
    var end = url.substring(url.indexOf(splitClean));
    
    return end;
  }
}
