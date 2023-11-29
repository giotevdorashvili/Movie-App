import {useQuery} from '@tanstack/react-query';

import {axiosInstance} from '../../utils/serviceUtils/utils';
import {ListNameLiterals} from './types.d';

const useMovieList = (listType: ListNameLiterals) => {
  return useQuery({
    queryKey: [listType],
    queryFn: async () => await axiosInstance.get(`movie/${listType}`),
  });
};

export default useMovieList;
