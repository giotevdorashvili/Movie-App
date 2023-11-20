import {useQuery} from '@tanstack/react-query';

import {
  axiosInstance,
  axiosUrlsMap,
  queryKeysMap,
} from '../../utils/serviceUtils/utils';
import {ListNameLiterals} from './types.d';

const useMovieList = (listType: ListNameLiterals) => {
  const key = queryKeysMap[listType];
  const moviesListUrl = axiosUrlsMap[listType];

  return useQuery({
    queryKey: [key],
    queryFn: async () => await axiosInstance.get(moviesListUrl),
  });
};

export default useMovieList;
