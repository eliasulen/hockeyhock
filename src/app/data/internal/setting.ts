import { MediaSource } from '../internal/media'

export interface Setting {
    key: SettingType,
    value: any
}


export enum SettingType {
    source = "source"
}

export const Settings = {
    source : {
        m3u8: MediaSource.m3u8,
        mp4: MediaSource.mp4
    },
    routes: {
        gameDayHighlights: "game-day-highlights",
        playerHighlights: "player-highlights" 
    }
}

