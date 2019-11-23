import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  menuRoutes: string[] = ["game-day-highlights", "player-highlights"]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isActive()
  {
    return this.menuRoutes.filter(menuRoute => menuRoute == this.getActive()).length > 0
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
