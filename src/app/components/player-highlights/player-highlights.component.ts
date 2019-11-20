import { Component, OnInit } from '@angular/core';
import { PlayerHighlightsService } from 'src/app/services/player-highlights.service';

@Component({
  selector: 'app-player-highlights',
  templateUrl: './player-highlights.component.html',
  styleUrls: ['./player-highlights.component.scss']
})
export class PlayerHighlightsComponent implements OnInit {

  public link: string = "nothing yet";

  constructor(private playerHighlightService: PlayerHighlightsService) { }

  ngOnInit() {
    this.playerHighlightService.getLink("8476453", "1").subscribe(
      response => 
      {
      
      }

    );
  }

}
