export interface Meta {
    hits: number;
    time: number;
    page_size: number;
    offset: number;
}

export interface Value {
    count: number;
    value: string;
}

export interface Facet {
    field: string;
    values: Value[];
}

// export interface 640x3602 {
//     src: string;
//     height: number;
//     width: number;
//     at2x: string;
//     aspectRatio: string;
//     at3x: string;
// }

// export interface 568x3202 {
//     src: string;
//     height: number;
//     width: number;
//     at2x: string;
//     aspectRatio: string;
//     at3x: string;
// }

// export interface 1136x6402 {
//     src: string;
//     height: number;
//     width: number;
//     at2x: string;
//     aspectRatio: string;
//     at3x: string;
// }

// export interface 248x1402 {
//     src: string;
//     height: number;
//     width: number;
//     at2x: string;
//     aspectRatio: string;
//     at3x: string;
// }

// export interface 768x4322 {
//     src: string;
//     height: number;
//     width: number;
//     at2x: string;
//     aspectRatio: string;
//     at3x: string;
// }

// export interface 1024x5762 {
//     src: string;
//     height: number;
//     width: number;
//     at2x: string;
//     aspectRatio: string;
//     at3x: string;
// }

// export interface 320x1802 {
//     src: string;
//     height: number;
//     width: number;
//     at2x: string;
//     aspectRatio: string;
//     at3x: string;
// }

// export interface 960x5402 {
//     src: string;
//     height: number;
//     width: number;
//     at2x: string;
//     aspectRatio: string;
//     at3x: string;
// }

// export interface 372x2102 {
//     src: string;
//     height: number;
//     width: number;
//     at2x: string;
//     aspectRatio: string;
//     at3x: string;
// }

// export interface 124x702 {
//     src: string;
//     height: number;
//     width: number;
//     at2x: string;
//     aspectRatio: string;
//     at3x: string;
// }

// export interface Cuts {
//     640x360: 640x3602;
//     568x320: 568x3202;
//     1136x640: 1136x6402;
//     248x140: 248x1402;
//     768x432: 768x4322;
//     1024x576: 1024x5762;
//     320x180: 320x1802;
//     960x540: 960x5402;
//     372x210: 372x2102;
//     124x70: 124x702;
// }

export interface Image {
    // cuts: Cuts;
    altText: string;
    title: string;
}

export interface Contributor {
}

export interface Partner {
}

export interface Ru {
    headline: string;
    url: string;
    bigBlurb: string;
    blurb: string;
    slug: string;
}

export interface De {
    headline: string;
    url: string;
    bigBlurb: string;
    blurb: string;
    slug: string;
}

export interface Sv {
    headline: string;
    url: string;
    bigBlurb: string;
    blurb: string;
    slug: string;
}

export interface Sk {
    headline: string;
    url: string;
    bigBlurb: string;
    blurb: string;
    slug: string;
}

export interface Cs {
    headline: string;
    url: string;
    bigBlurb: string;
    blurb: string;
    slug: string;
}

export interface Fi {
    headline: string;
    url: string;
    bigBlurb: string;
    blurb: string;
    slug: string;
}

export interface Es {
    headline: string;
    url: string;
    bigBlurb: string;
    blurb: string;
    slug: string;
}

export interface Fr {
    headline: string;
    url: string;
    bigBlurb: string;
    blurb: string;
    slug: string;
}

export interface AltLanguages {
    ru: Ru;
    de: De;
    sv: Sv;
    sk: Sk;
    cs: Cs;
    fi: Fi;
    es: Es;
    fr: Fr;
}

export interface Tag {
    displayName: any;
    type: string;
    value: any;
}

export interface KeywordsDisplay {
    displayName: string;
    type: string;
    value: string;
}

export interface Doc {
    subhead?: any;
    last_updated: Date;
    image: Image;
    contributor: Contributor;
    titles: string[];
    duration: string;
    partner: Partner;
    bigBlurb: string;
    asset_id: string;
    byline?: any;
    title: string;
    tagline?: any;
    partnerBroadcastId?: any;
    distributionContextId?: any;
    type: string;
    blurb: string;
    lang: string;
    altLanguages: AltLanguages;
    authFlow: boolean;
    tags: Tag[];
    display_timestamp: Date;
    first_published: Date;
    sort_timestamp: Date;
    seoTitle: string;
    langs: string[];
    bylines: any[];
    slug: string;
    seoKeywords?: any;
    mediaPlaybackURL?: any;
    commenting?: any;
    keywordsDisplay: KeywordsDisplay[];
    url: string;
    broadcastId?: any;
    presentationContextId?: any;
    flags: string[];
    seoDescription?: any;
}

export interface Highlight {
    meta: Meta;
    facets: Facet[];
    docs: Doc[];
}