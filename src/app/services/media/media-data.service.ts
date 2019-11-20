import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaResponse } from '../../data/media/media-response'

const base: string = "https://nhl.bamcontent.com/nhlNR/id/v1/";

@Injectable({
  providedIn: 'root'
})
export class MediaDataService {

  constructor(private http: HttpClient) { }

  get(mediaPlaybackId: number) : Observable<MediaResponse>
  {
    let url = `${base}${mediaPlaybackId}/details/web-v1.json`;
    return this.http.get<MediaResponse>(url);
  }
}
