import { MediaSource, MediaEpg } from '../internal/media'

export interface Setting {
    key: SettingType,
    value: any
}


export enum SettingType {
    source = "source",
    epg = "epg"
}

export const Settings = {
    source : {
        m3u8: MediaSource.m3u8,
        mp4: MediaSource.mp4
    },
    routes: {
        gameDayHighlights: "game-day-highlights",
        playerHighlights: "player-highlights" 
    },
    epgs : {
        extended_highlights: MediaEpg.Extended_Highlights,
        standard: MediaEpg.Recap
    }
}

