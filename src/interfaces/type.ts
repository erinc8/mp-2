export interface Thumbnail {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
}

export interface University {
    name: string;
    country: string;
    "state-province": string | null;
    web_pages: string[];
}



