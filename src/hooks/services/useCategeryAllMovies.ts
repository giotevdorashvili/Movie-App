import {useInfiniteQuery} from '@tanstack/react-query';

import {axiosInstance} from '../../utils/serviceUtils/utils';
import {
  GenericMoviesList,
  UpcomingMoviesList,
  ListNameLiterals,
} from './types.d';

const useCategeryAllMovies = (listType: ListNameLiterals) => {
  return useInfiniteQuery({
    queryKey: ['all', listType],
    queryFn: async ({pageParam}: {pageParam: number}) => {
      return await axiosInstance.get<GenericMoviesList | UpcomingMoviesList>(
        `movie/${listType}`,
        {
          params: {
            page: String(pageParam),
          },
        },
      );
    },
    getNextPageParam: lastPage => {
      return lastPage?.data.page < lastPage?.data.total_pages
        ? lastPage.data.page + 1
        : null;
    },
    initialPageParam: 1,
  });
};

export default useCategeryAllMovies;
