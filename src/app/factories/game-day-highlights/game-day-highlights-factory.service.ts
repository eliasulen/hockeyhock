import { Injectable } from '@angular/core';
import { MediaDataService } from '../../services/media/media-data.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, forkJoin, observable, of } from 'rxjs';
import { ScheduleDataService } from '../../services/schedule/schedule-data.service';
import { GameDayHighlight, Game, Venue, Team, GameStatus, GameType } from 'src/app/data/internal/game-day-highlight';
import { ScheduleResponse } from '../../data/external/schedule-response';
import { MediaEpg, Media, MediaPlayback, Playback, MediaSource } from '../../data/internal/media'
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
                let medias = this.toMedia(x.media.epg, x.posters, [MediaEpg.Extended_Highlights, MediaEpg.Recap])
                game.media = medias[0] || null
                game.alternateMedia = medias[1] || null;
              } 
            )
          })

          return gameDayHighlight;
        })
      )
  }

  private toMedia(epgs : Epg[], contentPosters: ContentPoster[], types: MediaEpg[]) : Media[]
  {

    let actualEpgs : Epg[] = []

    types.forEach(x => {
      let trim = x.toString().replace("_", " ");

      let e = epgs.filter(x => x.title == trim)[0]

      if(!e ||
        !e.items ||
         e.items.length == 0 || 
         !e.items[0] ||
          !e.items[0].playbacks ||
           e.items[0].playbacks.length == 0)
           return null;

           actualEpgs.push(e);
    })


    let playbacks : Playback[] = [] 

    let medias : Media[] = []

    actualEpgs.forEach(x => {
      x.items[0].playbacks.forEach(x => {
        let playback : Playback;
  
        if(x.name == MediaPlayback.FLASH_1800K_896x504 || x.name == MediaPlayback.FLASH_1800K_960X540)
        {
          playback = {
            url: x.url,
            type: MediaPlayback.FLASH_1800K_896x504,
            source: MediaSource.mp4
          }
        }
        else if(x.name == MediaPlayback.HTTP_CLOUD_WIRED_60)
        {
          playback = {
            url: x.url,
            type: MediaPlayback.HTTP_CLOUD_WIRED_60,
            source: MediaSource.m3u8
          }
        } else{
          //TODO embed
        }
  
        if(playback && playbacks.filter(f => f.source == playback.source).length == 0)
          playbacks.push(playback)
          
      
        })
        let media : Media = {
          posterUrl: contentPosters.filter(f => f.type == x.title)[0].posterUrl,
          mediaPlaybackId: Number(x.items[0].mediaPlaybackId),
          captionsUrl: null, //TODO,
          playbacks: playbacks,
          epg: MediaEpg[x.title.replace(" ", "_")]
        };

        medias.push(media)
        playbacks = []
    }
    
    )
 
    let m : Media[] = []

    medias.forEach(x => {
      if(x)
      {
        m.push(x)
      }
    })

    return m;
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
          media: null, //Set later,
          alternateMedia: null //Set later
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
