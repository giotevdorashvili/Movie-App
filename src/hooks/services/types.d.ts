export interface SingleMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GenericMoviesList {
  page: number;
  results: SingleMovie[];
  total_pages: number;
  total_results: number;
}

export interface UpcomingMoviesList extends GenericMoviesList {
  dates: {
    maximum: string;
    minimum: string;
  };
}

export type ListNameLiterals = 'upcoming' | 'popular' | 'topRated';
