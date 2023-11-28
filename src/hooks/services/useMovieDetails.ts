import {useQuery} from '@tanstack/react-query';

import {axiosInstance} from '../../utils/serviceUtils/utils';

const useMovieDetails = (id: number) => {
  return useQuery({
    queryKey: ['details', id],
    queryFn: async () => await axiosInstance.get(`movie/${id}`),
  });
};

export default useMovieDetails;
