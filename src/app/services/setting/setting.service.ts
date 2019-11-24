import { Injectable } from '@angular/core';

import { SettingType, Setting, Settings } from '../../data/internal/setting'
import { BehaviorSubject } from 'rxjs';

const defaults : [SettingType, string][] =
[
  [SettingType.source, Settings.source.m3u8],
  [SettingType.epg, Settings.epgs.extended_highlights]
]

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
    let item = localStorage.getItem(key.toString());

    if(!item)
    {
      item = defaults.filter(f => f[0] == key)[0][1];
    }

    return item;
  }
  
}
