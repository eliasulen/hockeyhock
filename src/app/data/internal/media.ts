export enum MediaPlayback
{
    FLASH_1800K_960X540 = "FLASH_1800K_960X540",
    FLASH_1800K_896x504 = "FLASH_1800K_896x504",
    HTTP_CLOUD_WIRED_60 = "HTTP_CLOUD_WIRED_60",
    embed = "Embed"
}

export enum MediaEpg
{
    Extended_Highlights = "Extended Highlights"
}

export enum MediaKeywordsAll
{
    closed_captions_location_vtt = "closed_captions_location_vtt"
}

export interface Media {
    playbacks: Playback[]
    mediaPlaybackId: number,
    posterUrl: string,
    captionsUrl: string
}

export interface Playback
{
    url: string
    type: MediaPlayback
}
