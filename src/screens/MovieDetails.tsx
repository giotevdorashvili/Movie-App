import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ScreenProps} from '../stackNavigator/StackNavigator';

const MovieDetails: React.FC<ScreenProps<'MovieDetails'>> = () => {
  return (
    <SafeAreaView>
      <Text>MovieDetails</Text>
    </SafeAreaView>
  );
};

export default MovieDetails;
