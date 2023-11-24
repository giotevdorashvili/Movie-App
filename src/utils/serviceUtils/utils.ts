import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
  },
  params: {
    api_key: '667038ddd2f7ddacc73fd59a56c8c22d',
  },
});

export const queryKeysMap: Record<string, string> = {
  upcoming: 'upcoming',
  popular: 'popular',
  topRated: 'top_rated',
  details: 'details',
};

export const axiosUrlsMap: Record<string, string> = {
  upcoming: 'movie/upcoming',
  popular: 'movie/popular',
  topRated: 'movie/top_rated',
};

export const getAxiosMovieDetailsUrl = (id: number) => {
  return `movie/${id}`;
};

export const axiosMovieDetailsMap: Record<string, string> = {
  upcoming: 'movie/upcoming',
  popular: 'movie/popular',
  topRated: 'movie/top_rated',
};

export const getPosterUrl = (posterPath: string) => {
  return `https://image.tmdb.org/t/p/original${posterPath}`;
};
