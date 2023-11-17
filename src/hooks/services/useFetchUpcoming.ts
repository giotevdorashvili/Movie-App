import {useQuery} from '@tanstack/react-query';

import {
  axiosInstance,
  queryKeysMap,
  axiosUrlsMap,
} from '../../utils/serviceUtils/utils';
import {UpcomingMoviesList} from './types';

const useFetchUpcoming = () => {
  return useQuery({
    queryKey: [queryKeysMap.upcoming],
    queryFn: async () =>
      await axiosInstance.get<UpcomingMoviesList>(axiosUrlsMap.upcoming),
  });
};

export default useFetchUpcoming;
