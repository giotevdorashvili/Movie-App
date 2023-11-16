import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

import {getOptions} from '../utils';
import {UpcomingMoviesList} from '../types';

const useFetchUpcoming = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['upcoming'],
    queryFn: async () =>
      await axios.request<UpcomingMoviesList>(getOptions('upcoming')),
  });

  return {data: data?.data, isLoading, isError};
};

export default useFetchUpcoming;
