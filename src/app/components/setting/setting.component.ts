import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting/setting.service'
import { Settings, SettingType } from '../../data/internal/setting'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  sourceSettings: string[] = []
  epgSettings: string[] = []

  constructor(private settingService: SettingService) { }

  ngOnInit() {
    this.sourceSettings = Object.keys(Settings.source).map(x => Settings.source[x])
    this.epgSettings = Object.keys(Settings.epgs).map(x => Settings.epgs[x]).filter(x => x != Settings.epgs.default)
  }

  setSource(value: any)
  {
    this.settingService.save(SettingType.source, value);
  }

  getSource()
  {
    return this.settingService.get(SettingType.source);
  }

  setEpg(value: any)
  {
    this.settingService.save(SettingType.epg, value);
  }

  getEpg()
  {
    return this.settingService.get(SettingType.epg);
  }
}
