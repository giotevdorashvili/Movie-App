import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ScreenProps} from '../stackNavigator/StackNavigator';

const Search: React.FC<ScreenProps<'Search'>> = () => {
  return (
    <SafeAreaView>
      <Text>Search</Text>
    </SafeAreaView>
  );
};

export default Search;
