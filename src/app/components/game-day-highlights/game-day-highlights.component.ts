import { Component, OnInit } from '@angular/core';
import { GameDayHighlightsFactoryService } from '../../factories/game-day-highlights/game-day-highlights-factory.service';
import { GameDayHighlight } from '../../data/internal/game-day-highlight'
import { DatePipe } from '@angular/common'
import { Playback, MediaPlayback, Media } from '../../data/internal/media'

@Component({
  selector: 'app-game-day-highlights',
  templateUrl: './game-day-highlights.component.html',
  styleUrls: ['./game-day-highlights.component.scss']
})
export class GameDayHighlightsComponent implements OnInit {

public gameDayHighlights : GameDayHighlight[] = []
public startDate : string;
public allDates: string[] = []
public lastDate: string;

  constructor(private gameDayHighlightsFactoryService: GameDayHighlightsFactoryService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.load();
  }

  private load()
  {
    this.gameDayHighlightsFactoryService.get()
    .subscribe(x => 
      {
        this.startDate = x.dates[0]
        this.lastDate = x.dates[0]
        this.gameDayHighlights.push(x);
        this.allDates.push(this.startDate)
        console.log(x)
      })
  }

  public loadMore()
  {
    if(this.lastDate)
    {
      var date = new Date(this.lastDate)
      date.setDate(date.getDate() + -1)
      let transform = this.datePipe.transform(date, 'yyyy-MM-dd')
      
      this.gameDayHighlightsFactoryService.get(transform, transform).subscribe(
        x => {
          this.lastDate = transform;
          this.gameDayHighlights.push(x);
          this.allDates.push(transform)
          console.log(x)
        }
      )
    }
  }

  // public reinitialize()
  // {
  //   this.lastDate = this.startDate;
  //   this.gameDayHighlights = []
  //   this.allDates = []

  //   let allDates = this.allDates;
  //   this.load();

  //   allDates.forEach((x, index) => {
  //     if(index > 0)
  //     {
  //       this.loadMore();
  //     }
  //   })
  // }

  public mediaAmount(gameDayHighlight: GameDayHighlight)
  {
    return gameDayHighlight.games.filter(f => f.media != null).length
  }

  public hasMedia(gameDayHighlight: GameDayHighlight)
  {
    return gameDayHighlight.games.filter(f => f.media != null).length > 0
  }


}
