

    // export interface 1136x6402 {
    //     aspectRatio: string;
    //     width: number;
    //     height: number;
    //     src: string;
    //     at2x: string;
    //     at3x: string;
    // }

    // export interface 1024x5762 {
    //     aspectRatio: string;
    //     width: number;
    //     height: number;
    //     src: string;
    //     at2x: string;
    //     at3x: string;
    // }

    // export interface 960x5402 {
    //     aspectRatio: string;
    //     width: number;
    //     height: number;
    //     src: string;
    //     at2x: string;
    //     at3x: string;
    // }

    // export interface 768x4322 {
    //     aspectRatio: string;
    //     width: number;
    //     height: number;
    //     src: string;
    //     at2x: string;
    //     at3x: string;
    // }

    // export interface 640x3602 {
    //     aspectRatio: string;
    //     width: number;
    //     height: number;
    //     src: string;
    //     at2x: string;
    //     at3x: string;
    // }

    // export interface 568x3202 {
    //     aspectRatio: string;
    //     width: number;
    //     height: number;
    //     src: string;
    //     at2x: string;
    //     at3x: string;
    // }

    // export interface 372x2102 {
    //     aspectRatio: string;
    //     width: number;
    //     height: number;
    //     src: string;
    //     at2x: string;
    //     at3x: string;
    // }

    // export interface 320x1802 {
    //     aspectRatio: string;
    //     width: number;
    //     height: number;
    //     src: string;
    //     at2x: string;
    //     at3x: string;
    // }

    // export interface 248x1402 {
    //     aspectRatio: string;
    //     width: number;
    //     height: number;
    //     src: string;
    //     at2x: string;
    //     at3x: string;
    // }

    // export interface 124x702 {
    //     aspectRatio: string;
    //     width: number;
    //     height: number;
    //     src: string;
    //     at2x: string;
    //     at3x: string;
    // }

    // export interface Cuts {
    //     1136x640: 1136x6402;
    //     1024x576: 1024x5762;
    //     960x540: 960x5402;
    //     768x432: 768x4322;
    //     640x360: 640x3602;
    //     568x320: 568x3202;
    //     372x210: 372x2102;
    //     320x180: 320x1802;
    //     248x140: 248x1402;
    //     124x70: 124x702;
    // }

    export interface Image {
        title: string;
        altText: string;
        // cuts: Cuts;
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
    }



