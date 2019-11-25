import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'
import { SearchHighlightResponse } from '../../data/external/search-highlights-response'
import { DataProxyService } from '../../proxies/data-proxy/data-proxy.service';

const base: string = "https://search-api.svc.nhl.com/svc/search/v2/nhl_nr_sitesearch_en/sitesearch?hl=true&facet=type&expand=partner.media.image&q=";

  interface PageData{
    pageSize: number,
    pages: Page[]
  }

  interface Page {
    page: number
  }

@Injectable({
  providedIn: 'root'
})

export class SearchHighlightsDataService {

  constructor(private http: HttpClient, private dataProxyService: DataProxyService) { }

  private getPages(playerId: number, take: number, skip: number) : Observable<PageData>
  {
    let url = `${base}${playerId}&page=${1}&type=video`;

    return this.dataProxyService.get(url)
    .pipe(
      map(x => {
        let result = <SearchHighlightResponse>x;
        let skipPages = Math.ceil(skip / result.meta.page_size)
        let maxPages = result.meta.hits / result.meta.page_size;
        
        let pages : Page[] = []

        for(var i = skipPages; i < maxPages - 1; i++)
        {
          let page : Page = {
            page: i + 1
          }
          pages.push(page)
        }

        let pageData : PageData = {
          pages: pages,
          pageSize: result.meta.page_size
        }

        return pageData;
      })
    )
  }

  search(playerId: number, take: number, skip: number)
  {
    let url = `${base}${playerId}&page=${1}&type=video`;

     return this.getPages(playerId, take, skip)
    .pipe(
      map(pageData => {
        let data : Observable<SearchHighlightResponse>[] = []

        pageData.pages.forEach((that) => {
          if(that.page * pageData.pageSize < take + pageData.pageSize)
          {
            let url = `${base}${playerId}&page=${that.page}&type=video`;
            data.push(this.http.get<SearchHighlightResponse>(url))
          }
        })

        return forkJoin(data)
      })
    )

    }
    
     
  }



