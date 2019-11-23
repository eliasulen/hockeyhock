export interface ContentResponse {
    media: Media;
    posters: ContentPoster[]
}


export interface ContentPoster{
    gameId: number,
    posterUrl: string,
    type: string
}

export interface Media {
    epg: Epg[];
    milestones: Milestones;
}

export interface Epg {
    title: string;
    platform: string;
    items: EpgItem[];
    topicList: string;
}

export interface Milestones {
    title: string;
    streamStart: Date;
    items: MilestoneItem[];
}

export interface MilestoneItem {
    title: string;
    description: string;
    type: string;
    timeAbsolute: Date;
    timeOffset: string;
    period: string;
    statsEventId: string;
    teamId: string;
    playerId: string;
    periodTime: string;
    ordinalNum: string;
    highlight: Highlight;
}

export interface Highlight {
    type: string;
    id: string;
    date?: Date;
    title: string;
    blurb: string;
    description: string;
    duration: string;
    authFlow?: boolean;
    mediaPlaybackId: string;
    mediaState: string;
    keywords: HighlightKeyword[];
    image: HighlightImage;
    playbacks: HighlightPlayback[];
}

export interface HighlightKeyword {
    type: string;
    value: string;
    displayName: string;
}

export interface HighlightCuts {
    // 1136x640: 1136x6409;
    // 1024x576: 1024x5769;
    // 960x540: 960x5409;
    // 768x432: 768x4329;
    // 640x360: 640x3609;
    // 568x320: 568x3209;
    // 372x210: 372x2109;
    // 320x180: 320x1809;
    // 248x140: 248x1409;
    // 124x70: 124x709;
}

export interface HighlightImage {
    title: string;
    altText: string;
    cuts: HighlightCuts;
}

export interface HighlightPlayback {
    name: string;
    width: string;
    height: string;
    url: string;
}


export interface EpgItem {
    guid: string;
    mediaState: string;
    mediaPlaybackId: string;
    mediaFeedType: string;
    callLetters: string;
    eventId: string;
    language: string;
    freeGame: boolean;
    feedName: string;
    gamePlus: boolean;
    type: string;
    id: string;
    date?: Date;
    title: string;
    blurb: string;
    description: string;
    duration: string;
    authFlow?: boolean;
    keywords: Keyword[];
    image: EpgImage;
    playbacks: EpgPlayback[];
}

export interface EpgImage {
    title: string;
    altText: string;
    cuts: EpgCuts;
}

export interface Keyword {
    type: string;
    value: string;
    displayName: string;
}

export interface EpgPlayback {
    name: string;
    width: string;
    height: string;
    url: string;
}

export interface EpgCuts {
    // 1136x640: 1136x6408;
    // 1024x576: 1024x5768;
    // 960x540: 960x5408;
    // 768x432: 768x4328;
    // 640x360: 640x3608;
    // 568x320: 568x3208;
    // 372x210: 372x2108;
    // 320x180: 320x1808;
    // 248x140: 248x1408;
    // 124x70: 124x708;
}