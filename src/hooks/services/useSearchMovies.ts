import {useInfiniteQuery} from '@tanstack/react-query';

import {axiosInstance} from '../../utils/serviceUtils/utils';
import {GenericMoviesList} from './types.d';

const useSearchMovies = (query: string) => {
  return useInfiniteQuery({
    queryKey: ['all', query],
    queryFn: async ({pageParam}: {pageParam: number}) => {
      return await axiosInstance.get<GenericMoviesList>('search/movie', {
        params: {
          page: String(pageParam),
          query,
        },
      });
    },
    getNextPageParam: lastPage => {
      return lastPage?.data.page < lastPage?.data.total_pages
        ? lastPage.data.page + 1
        : null;
    },
    initialPageParam: 1,
  });
};

export default useSearchMovies;
