import {useQuery} from '@tanstack/react-query';

import {
  axiosInstance,
  queryKeysMap,
  axiosUrlsMap,
} from '../../utils/serviceUtils/utils';
import {GenericMoviesList} from './types';

const useFetchUpcoming = () => {
  return useQuery({
    queryKey: [queryKeysMap.popular],
    queryFn: async () =>
      await axiosInstance.get<GenericMoviesList>(axiosUrlsMap.popular),
  });
};

export default useFetchUpcoming;
