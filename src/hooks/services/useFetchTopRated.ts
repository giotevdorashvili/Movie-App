import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

import {getOptions} from '../utils';
import {GenericMoviesList} from '../types';

const useFetchUpcoming = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['top_rated'],
    queryFn: async () =>
      await axios.request<GenericMoviesList>(getOptions('top_rated')),
  });

  return {data: data?.data, isLoading, isError};
};

export default useFetchUpcoming;
