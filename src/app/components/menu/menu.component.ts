import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { SettingService } from '../../services/setting/setting.service';
import { SettingType } from '../../data/internal/setting'

const defaultSource = "mp4"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})



export class MenuComponent implements OnInit {

  menuRoutes: string[] = ["game-day-highlights", "player-highlights"]
  sourceSettings: string[] = ["m3u8", "mp4"]

  constructor(private router: Router, private settingService: SettingService) { }

  ngOnInit() {
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
