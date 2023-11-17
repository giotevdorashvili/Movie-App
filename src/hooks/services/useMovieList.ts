import {useQuery} from '@tanstack/react-query';
import {
  axiosInstance,
  axiosUrlsMap,
  queryKeysMap,
} from '../../utils/serviceUtils/utils';

const useMovieList = (listType: string) => {
  return useQuery({
    queryKey: [queryKeysMap, listType],
    queryFn: async () => await axiosInstance.get(axiosUrlsMap[listType]),
  });
};

export default useMovieList;
