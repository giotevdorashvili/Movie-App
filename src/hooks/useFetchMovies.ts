import {useState, useEffect} from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=667038ddd2f7ddacc73fd59a56c8c22d',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
  },
};

const useFetchMovies = () => {
  const [response, setResponse] = useState<ResponseTypes>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const res = await axios.request<ResponseTypes>(options);

        if (!res.data) {
          throw new Error('fetching upcoming movies failed.');
        }

        setResponse(res.data);
      } catch (err) {
        console.error(err, '---------error in fetch hook----------');
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {response, isLoading, hasError};
};

export default useFetchMovies;

interface MovieTypes {
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

interface ResponseTypes {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieTypes[];
  total_pages: number;
  total_results: number;
}
