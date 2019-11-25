import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const base = "https://hockeyhock-proxy.herokuapp.com/api/"

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
      return this.http.get(`${encodeURIComponent(base + proxy + url)}`);
   }

   public poke()
   {
      return this.http.get(`${base}${poke}`)
   }
}
