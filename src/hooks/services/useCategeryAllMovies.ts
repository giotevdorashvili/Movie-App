import {useInfiniteQuery} from '@tanstack/react-query';

import {axiosUrlsMap, getAxiosInstance} from '../../utils/serviceUtils/utils';
import {
  GenericMoviesList,
  UpcomingMoviesList,
  ListNameLiterals,
} from './types.d';

const useCategeryAllMovies = (listType: ListNameLiterals) => {
  const key = listType;
  const moviesListUrl = axiosUrlsMap[listType];
  return useInfiniteQuery({
    queryKey: ['all', key],
    queryFn: async ({pageParam}: {pageParam: number}) => {
      return await getAxiosInstance(pageParam).get<
        GenericMoviesList | UpcomingMoviesList
      >(moviesListUrl);
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
