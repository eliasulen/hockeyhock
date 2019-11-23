import { Injectable } from '@angular/core';
import { MediaDataService } from '../../services/media/media-data.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, forkJoin, observable, of } from 'rxjs';
import { ScheduleDataService } from '../../services/schedule/schedule-data.service';
import { GameDayHighlight, Game, Venue, Team, GameStatus, GameType } from 'src/app/data/internal/game-day-highlight';
import { ScheduleResponse } from '../../data/external/schedule-response';
import { MediaEpg, Media, MediaPlayback, Playback } from '../../data/internal/media'
import { Epg } from '../../data/external/content-response'
import { ContentPoster } from '../../data/external/content-response'

@Injectable({
  providedIn: 'root'
})
export class GameDayHighlightsFactoryService {

  constructor(private mediaDataService: MediaDataService, private scheduleDataService: ScheduleDataService) { }
  
  get(startDate: string = null, endDate: string = null)
  {
      return this
      .scheduleDataService
      .get(startDate, endDate)
      .pipe(
        map(x => {
          let gameDayHighlight = this.toGameDayHighlight(x);

          gameDayHighlight.games.forEach(game => {
            this.mediaDataService.getByGameId(game.gamePk).subscribe(
              x =>
              {
                game.media = this.toMedia(x.media.epg, x.posters, MediaEpg.Extended_Highlights)
              } 
            )
          })

          return gameDayHighlight;
        })
      )
  }

  private toMedia(epgs : Epg[], contentPosters: ContentPoster[], type: MediaEpg) : Media
  {
    //TODo fixa ful lösning
    let trim = type.toString().replace("_", " ");

    let extendedHighlight = epgs.filter(x => x.title == trim)[0];
    let poster = contentPosters.filter(x => x.type == trim)[0];

    let playbacks : Playback[] = [] 

    if(!extendedHighlight ||
       !extendedHighlight.items ||
        extendedHighlight.items.length == 0 || 
        !extendedHighlight.items[0] ||
         !extendedHighlight.items[0].playbacks ||
          extendedHighlight.items[0].playbacks.length == 0)
          return null;

    extendedHighlight.items[0].playbacks.forEach(x => {
      let playback : Playback;

      if(x.name == MediaPlayback.FLASH_1800K_896x504)
      {
        playback = {
          url: x.url,
          type: MediaPlayback.FLASH_1800K_896x504
        }
      }
      else if(x.name == MediaPlayback.HTTP_CLOUD_WIRED_60)
      {
        playback = {
          url: x.url,
          type: MediaPlayback.HTTP_CLOUD_WIRED_60
        }
      } else{
        //TODO embed
      }

      if(playback)
        playbacks.push(playback)
    })

    let media : Media = {
      posterUrl: poster.posterUrl,
      mediaPlaybackId: Number(extendedHighlight.items[0].mediaPlaybackId),
      captionsUrl: null, //TODO,
      playbacks: playbacks
    };

    return media;
  }

  private toGameDayHighlight(x: ScheduleResponse) : GameDayHighlight
  {

    let data : Game[] = []

    x.dates.forEach((x) => {
      x.games.forEach((x) => {
        let venue : Venue = {
          name: x.venue.name
        }

        let homeTeam : Team = {
          id: x.teams.home.team.id,
          name: x.teams.home.team.name
        }

        let awayTeam : Team = {
          id: x.teams.away.team.id,
          name: x.teams.away.team.name
        }
        
        let game : Game = {
          venue: venue,
          gamePk: x.gamePk,
          gameDate: x.gameDate,
          homeTeam: homeTeam,
          awayTeam: awayTeam,
          gameStatus: GameStatus[x.status.abstractGameState],
          gameType: GameType[x.gameType],
          media: null //Set later
        }
        
        data.push(game);
      })
    })
    let gameDayHighlight : GameDayHighlight = {
      games: data,
      dates: x.dates.map(x => x.date) 
    }
    return gameDayHighlight;
  }
}
