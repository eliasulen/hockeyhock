import { Component, OnInit } from '@angular/core';
import { PlayerHighlightsFactoryService } from '../../services/player-highlights/player-highlights-factory.service';
import { PlayerHighlight } from '../../data/player-highlights/player-highlight';

@Component({
  selector: 'app-player-highlights',
  templateUrl: './player-highlights.component.html',
  styleUrls: ['./player-highlights.component.scss']
})
export class PlayerHighlightsComponent implements OnInit {

  public playerHighlights: PlayerHighlight[];

  constructor(private playerHighlightFactoryService: PlayerHighlightsFactoryService) { }

  ngOnInit() {
    
    this.playerHighlightFactoryService.search(8476453).subscribe(x => 
      {
        x.subscribe(x => {
          this.playerHighlights = x;
        })
      });
    
  }

}
