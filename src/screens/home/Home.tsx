import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ScreenProps} from '../../navigators/StackNavigator';
import MoviesList from './MoviesList';

const Home: React.FC<ScreenProps<'Home'>> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MoviesList listName="upcoming" />
        <MoviesList listName="popular" />
        <MoviesList listName="topRated" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 25,
  },
});

export default Home;
