import {useQuery} from '@tanstack/react-query';

import {
  axiosInstance,
  queryKeysMap,
  getAxiosMovieDetailsUrl,
} from '../../utils/serviceUtils/utils';

const useMovieDetails = (id: number) => {
  const key = queryKeysMap.details;
  const moviesListUrl = getAxiosMovieDetailsUrl(id);

  return useQuery({
    queryKey: [key],
    queryFn: async () => await axiosInstance.get(moviesListUrl),
  });
};

export default useMovieDetails;
