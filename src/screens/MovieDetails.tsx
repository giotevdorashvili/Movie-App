import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ScreenProps} from '../navigators/StackNavigator';

const MovieDetails: React.FC<ScreenProps<'MovieDetails'>> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MovieDetails</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieDetails;