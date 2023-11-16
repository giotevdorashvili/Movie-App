import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Router from './src/navigators/Router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
