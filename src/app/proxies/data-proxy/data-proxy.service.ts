import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

const poke = "poke/"
const proxy = "proxy/"

@Injectable({
  providedIn: 'root'
})
export class DataProxyService {


  constructor(private http: HttpClient) {
   }

   public get(url: string)
   {
      return this.http.get(`${encodeURIComponent(environment.apiUrl + proxy + url)}`);
   }

   public poke()
   {
      return this.http.get(`${environment.apiUrl}${poke}`)
   }
}
