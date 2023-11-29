import {useQuery} from '@tanstack/react-query';
import {axiosInstance} from '../../utils/serviceUtils/utils';

const useFavoriteMovies = (ids: number[]) => {
  return useQuery({
    queryKey: ['movies', ids],
    queryFn: async () => {
      const requests = ids.map(id => axiosInstance.get(`movie/${id}`));
      const responses = await Promise.allSettled(requests);

      return responses
        .filter(result => result.status === 'fulfilled')
        .map(result => {
          if (result.status === 'fulfilled') {
            return result.value.data;
          }
        });
    },
  });
};

export default useFavoriteMovies;
