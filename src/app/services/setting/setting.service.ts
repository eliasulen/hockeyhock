import { Injectable } from '@angular/core';

import { SettingType, Setting } from '../../data/internal/setting'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor() { 

  }

  public settingChanged: BehaviorSubject<Setting> = new BehaviorSubject(null)

  public save(key: SettingType, value: any)
  {
    localStorage.setItem(key, value)

    let setting : Setting = {
      key: key,
      value: value
    }

    this.settingChanged.next(setting)
  }

  public get(key: SettingType)
  {
    return localStorage.getItem(key.toString());
  }
  
}
