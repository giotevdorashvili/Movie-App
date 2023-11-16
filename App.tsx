import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PaperProvider} from 'react-native-paper';
import {PaperTheme} from './src/theme/theme';

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
    <PaperProvider theme={PaperTheme}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </PaperProvider>
  );
}

export default App;
