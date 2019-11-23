import { Injectable } from '@angular/core';

import { SettingType } from '../../data/internal/setting'

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor() { 

  }

  public save(key: SettingType, value: any)
  {
    localStorage.setItem(key, value)
  }

  public get(key: SettingType)
  {
    return localStorage.getItem(key.toString());
  }
  
}
