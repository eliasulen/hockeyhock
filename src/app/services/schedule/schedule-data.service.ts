import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaResponse, Cuts } from '../../data/external/media-response'
import { map } from 'rxjs/operators'
import { ScheduleResponse } from '../../data/external/schedule-response';

@Injectable({
  providedIn: 'root'
})
export class ScheduleDataService {

  constructor(private http: HttpClient) { }

  //https://statsapi.web.nhl.com/api/v1/schedule

  get(startDate: string = null, endDate: string = null)
  {
    let url = `https://statsapi.web.nhl.com/api/v1/schedule`;

    if(startDate && endDate)
    {
      url = `${url}?startDate=${startDate}&endDate=${endDate}`
    }

    return this.http.get<ScheduleResponse>(url)
  }
}
