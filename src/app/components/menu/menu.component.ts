import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { SettingService } from '../../services/setting/setting.service';
import { SettingType, Settings } from '../../data/internal/setting'

const defaultSource = Settings.source.mp4

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  menuRoutes: string[] = []
  sourceSettings: string[] = []

  constructor(private router: Router, private settingService: SettingService) { }

  ngOnInit() {

    this.sourceSettings = Object.keys(Settings.source).map(x => Settings.source[x])
    this.menuRoutes = Object.keys(Settings.routes).map(x => Settings.routes[x])

    //TODO fixa sen
    this.menuRoutes = this.menuRoutes.filter(f => f != Settings.routes.playerHighlights)

    if(!this.settingService.get(SettingType.source))
    {
      this.settingService.save(SettingType.source, defaultSource);
    }
  }

  isActive()
  {
    return this.menuRoutes.filter(menuRoute => menuRoute == this.getActive()).length > 0
  }

  setSource(value: any)
  {
    this.settingService.save(SettingType.source, value);
  }

  getSource()
  {
    return this.settingService.get(SettingType.source);
  }

  getActive()
  {
    let url = this.router.url.substring(1)

    if(url.indexOf('/') != -1)
    {
      url = url.substring(0, url.indexOf('/'))
    }

    return url;
  }

}
