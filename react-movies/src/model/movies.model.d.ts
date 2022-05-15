export interface movieDTO {
 
    id: number;
    title: string;
    category: string;
    poster: string;
}


export interface landingPageDTO {
    inTheaters? : movieDTO[];
    upcomingReleases?: moviesDTO[];
}