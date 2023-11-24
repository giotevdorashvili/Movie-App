import axios from 'axios';
import {ListNameLiterals} from '../../hooks/services/types';

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
  },
  params: {
    api_key: '667038ddd2f7ddacc73fd59a56c8c22d',
  },
});

export const getAxiosInstance = (pageParam: number) => {
  return axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      accept: 'application/json',
    },
    params: {
      api_key: '667038ddd2f7ddacc73fd59a56c8c22d',
      language: 'en-US',
      page: String(pageParam),
    },
  });
};

export const queryKeysMap: Record<string, ListNameLiterals> = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const axiosUrlsMap: Record<string, string> = {
  upcoming: 'movie/upcoming',
  popular: 'movie/popular',
  top_rated: 'movie/top_rated',
};

export const getAxiosMovieDetailsUrl = (id: number) => {
  return `movie/${id}`;
};

export const getPosterUrl = (posterPath: string) => {
  return `https://image.tmdb.org/t/p/original${posterPath}`;
};
