import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaResponse, Cuts } from '../../data/external/media-response'
import { map } from 'rxjs/operators'
import { ContentResponse, ContentPoster } from '../../data/external/content-response';

const posterResolutions: string[] = ['1136x640', '1024x576', '960x540', '768x432', '640x360', '568x320', '372x210', '320x180', '248x140', '124x70']

@Injectable({
  providedIn: 'root'
})

export class MediaDataService {

  constructor(private http: HttpClient) { }

  getByGameId(gameId: number) : Observable<ContentResponse>
  {
    let url = `http://statsapi.web.nhl.com/api/v1/game/${gameId}/content`;
    return this.http.get(url)
    .pipe(
      map(x => {
          let contentResponse : any = x;

          contentResponse.posters = this.getContentPosterUrls(contentResponse, gameId);

          return contentResponse;
      })
    );
  }

  getByMediaPlaybackId(mediaPlaybackId: number) : Observable<MediaResponse>
  {
    let url = `https://nhl.bamcontent.com/nhlNR/id/v1/${mediaPlaybackId}/details/web-v1.json`;
    return this.http.get(url).pipe(map(x => {
        let mediaResponse : any = x;
        mediaResponse.posterUrl = this.getMediaPosterUrl(mediaResponse)
        
        return mediaResponse;
    }));
  }

  private getContentPosterUrls(contentResponse: ContentResponse, gameId: number) : ContentPoster[]
  {
    let data : ContentPoster[] = []

    contentResponse.media.epg.forEach((epg) => {
      
      epg.items.forEach((item) => {
        if(item.image && item.image.cuts)
        {
            posterResolutions.forEach(x => {
              if(item.image.cuts[x] && item.image.cuts[x].src)
              {
                let contentPoster : ContentPoster = {
                  posterUrl: item.image.cuts[x].src,
                  type: epg.title,
                  gameId: gameId
                }

                if(data.filter(f => f.type == epg.title).length == 0)
                  data.push(contentPoster)
              }
            })
        }
      })
    })

    return data;
  }

  private getMediaPosterUrl(mediaResponse: any) : string
  {
    if(!mediaResponse || !mediaResponse.image || !mediaResponse.image.cuts)
     return null;
    
     let posterUrls : string[] = []
     posterResolutions.forEach((that) => 
     {
        if(mediaResponse.image.cuts[that] && mediaResponse.image.cuts[that].src)
        {
          posterUrls.push(mediaResponse.image.cuts[that].src)
        }
     })

     if(posterUrls.length == 0)
      return null;

      return posterUrls[0];
  }
}
