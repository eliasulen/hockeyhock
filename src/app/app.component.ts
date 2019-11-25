import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from './services/spinner/spinner.service';
import { DataProxyService } from './proxies/data-proxy/data-proxy.service';
import { environment } from '../environments/environment'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hockeyhock';

  constructor
  (
    translateService: TranslateService,
    private dataProxyService: DataProxyService
    ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en');

    dataProxyService.poke().subscribe(x => {
        console.log('poke completed')
    })

    dataProxyService.get("https://search-api.svc.nhl.com/svc/search/v2/nhl_nr_sitesearch_sv/sitesearch?hl=true&facet=type&expand=partner.media.image&q=nikita+kucherov&page=1&type=video&take=3").subscribe(x => 
    {
      console.log(x)
    })
}
}
