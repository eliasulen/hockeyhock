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
public lastDate: string;

  constructor(private gameDayHighlightsFactoryService: GameDayHighlightsFactoryService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.gameDayHighlightsFactoryService.get()
    .subscribe(x => 
      {
        this.startDate = x.dates[0]
        this.lastDate = x.dates[0]
        this.gameDayHighlights.push(x);
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
          console.log(x)
        }
      )
    }
  }

  public mediaAmount(gameDayHighlight: GameDayHighlight)
  {
    return gameDayHighlight.games.filter(f => f.media != null).length
  }

  public hasMedia(gameDayHighlight: GameDayHighlight)
  {
    return gameDayHighlight.games.filter(f => f.media != null).length > 0
  }

  public isMp4(playback: Playback)
  {
    return playback.type == MediaPlayback.FLASH_1800K_896x504 || playback.type == MediaPlayback.FLASH_1800K_960X540;
  }

  getVideoId(media: Media)
  {
    return media.mediaPlaybackId
  }


}
