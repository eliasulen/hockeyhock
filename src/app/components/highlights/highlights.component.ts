import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {

  public link: string = "nothing yet";

  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
    this.highlightService.getLink("14", "8476453", "1").subscribe(
      response => 
      {
        this.highlightService.getVideo(response.body.docs[0].url).subscribe(
          response => 
          {
             this.link = this.highlightService.parseVideo(response.body);
          }
        )
      }

    );
  }

}
