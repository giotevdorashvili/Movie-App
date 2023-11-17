import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ScreenProps} from '../../navigators/StackNavigator';
import MoviesList from './MoviesList';

const Home: React.FC<ScreenProps<'Home'>> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MoviesList listName="upcoming" />
      {/* <MoviesList listName="popular" />
      <MoviesList listName="topRated" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 25,
    gap: 10,
  },
});

export default Home;
