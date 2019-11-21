import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaResponse, Cuts } from '../../data/media/media-response'
import { map } from 'rxjs/operators'

const base: string = "https://nhl.bamcontent.com/nhlNR/id/v1/";

const posterResolutions: string[] = ['1136x640', '1024x576', '960x540', '768x432', '640x360', '568x320', '372x210', '320x180', '248x140', '124x70']

@Injectable({
  providedIn: 'root'
})
export class MediaDataService {

  constructor(private http: HttpClient) { }

  get(mediaPlaybackId: number) : Observable<MediaResponse>
  {
    let url = `${base}${mediaPlaybackId}/details/web-v1.json`;
    return this.http.get(url).pipe(map(x => {
        let mediaResponse : any = x;
        mediaResponse.posterUrl = this.getPosterUrl(mediaResponse)
        
        return mediaResponse;
    }));
  }

  private getPosterUrl(mediaResponse: any) : string
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
