import { Media } from '../internal/media'

export interface GameDayHighlight {
    games: Game[],
    dates: string[],
}

export enum GameStatus
{
    Final = "Final"
}

export enum GameType
{
    R = "R"
}

export interface Game {
    gamePk: number;
    gameStatus: GameStatus,
    gameDate: Date,
    homeTeam: Team,
    awayTeam: Team,
    gameType: GameType,
    venue: Venue
    media: Media,
    alternateMedia: Media
}

export interface Team {
    id: number;
    name: string;
}

export interface Venue{
    name: string;
}