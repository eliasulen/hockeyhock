import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

const poke = "poke/"
const proxy = "proxy/"

@Injectable({
  providedIn: 'root'
})
export class DataProxyService {

   private poked: boolean = false;

  constructor(private http: HttpClient) {
   }

   public get(url: string)
   {
      let trimmed = url.replace(new RegExp("/", 'g'), "%2F");
      return this.http.get(`${environment.apiUrl}${proxy}${encodeURIComponent(trimmed)}`);
   }

   public poke()
   {
      return this.http.get(`${environment.apiUrl}${poke}`)
   }
}
