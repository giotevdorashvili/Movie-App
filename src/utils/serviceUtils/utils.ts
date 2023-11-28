import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
  },
  params: {
    api_key: '667038ddd2f7ddacc73fd59a56c8c22d',
    language: 'en-US',
  },
});

export const getPosterUrl = (posterPath: string) => {
  return `https://image.tmdb.org/t/p/original${posterPath}`;
};
