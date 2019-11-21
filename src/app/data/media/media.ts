export enum MediaPlayback
{
    mp4 = "FLASH_1800K_896x504",
    m3u8 = "HTTP_CLOUD_WIRED_60",
    embed = "Embed"
}

export enum MediaKeywordsAll
{
    captions = "closed_captions_location_vtt"
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
