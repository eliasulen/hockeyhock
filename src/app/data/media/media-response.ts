

    export interface _1136x6402 {
        aspectRatio: string;
        width: number;
        height: number;
        src: string;
        at2x: string;
        at3x: string;
    }

    export interface _1024x5762 {
        aspectRatio: string;
        width: number;
        height: number;
        src: string;
        at2x: string;
        at3x: string;
    }

    export interface _960x5402 {
        aspectRatio: string;
        width: number;
        height: number;
        src: string;
        at2x: string;
        at3x: string;
    }

    export interface _768x4322 {
        aspectRatio: string;
        width: number;
        height: number;
        src: string;
        at2x: string;
        at3x: string;
    }

    export interface _640x3602 {
        aspectRatio: string;
        width: number;
        height: number;
        src: string;
        at2x: string;
        at3x: string;
    }

    export interface _568x3202 {
        aspectRatio: string;
        width: number;
        height: number;
        src: string;
        at2x: string;
        at3x: string;
    }

    export interface _372x2102 {
        aspectRatio: string;
        width: number;
        height: number;
        src: string;
        at2x: string;
        at3x: string;
    }

    export interface _320x1802 {
        aspectRatio: string;
        width: number;
        height: number;
        src: string;
        at2x: string;
        at3x: string;
    }

    export interface _248x1402 {
        aspectRatio: string;
        width: number;
        height: number;
        src: string;
        at2x: string;
        at3x: string;
    }

    export interface _124x702 {
        aspectRatio: string;
        width: number;
        height: number;
        src: string;
        at2x: string;
        at3x: string;
    }

    export interface Cuts {
        _1136x640: _1136x6402;
        _1024x576: _1024x5762;
        _960x540: _960x5402;
        _768x432: _768x4322;
        _640x360: _640x3602;
        _568x320: _568x3202;
        _372x210: _372x2102;
        _320x180: _320x1802;
        _248x140: _248x1402;
        _124x70: _124x702;
    }

    export interface Image {
        title: string;
        altText: string;
        cuts: Cuts;
    }

    export interface KeywordsDisplay {
        type: string;
        value: string;
        displayName: string;
    }

    export interface KeywordsAll {
        type: string;
        value: any;
        displayName: any;
    }

    export interface Playback {
        name: string;
        width: string;
        height: string;
        url: string;
    }

    export interface MediaResponse {
        type: string;
        state: string;
        date: Date;
        id: string;
        mediaPlaybackId: string;
        title: string;
        description: string;
        headline: string;
        internalNotes: string;
        blurb: string;
        bigBlurb: string;
        seoTitle: string;
        slug: string;
        authFlow: boolean;
        duration: string;
        language: string;
        mediaState: string;
        image: Image;
        url: string;
        keywordsDisplay: KeywordsDisplay[];
        keywordsAll: KeywordsAll[];
        playbacks: Playback[];
        posterUrl: string
    }



