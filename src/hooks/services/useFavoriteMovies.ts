import {useQuery} from '@tanstack/react-query';
import {axiosInstance} from '../../utils/serviceUtils/utils';

const useFavoriteMovies = (ids: number[]) => {
  return useQuery({
    queryKey: ['movies', ids],
    queryFn: async () => {
      const requests = ids.map(id => axiosInstance.get(`movie/${id}`));
      const responses = await Promise.all(requests);

      return responses.map(response => response.data);
    },
  });
};

export default useFavoriteMovies;
