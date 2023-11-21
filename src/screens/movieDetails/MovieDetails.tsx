import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';

import {MovieDetailTypes} from '../../hooks/services/types';
import {ScreenProps} from '../../navigators/StackNavigator';
import useMovieDetails from '../../hooks/services/useMovieDetails';
import BackgroundImage from './backgroundImage';
import MovieDescription from './MovieDescription';

const MovieDetails: React.FC<ScreenProps<'MovieDetails'>> = ({route}) => {
  const {data, isLoading, isError} = useMovieDetails(route.params.id);

  const movieData: MovieDetailTypes = data?.data;

  const path = movieData?.backdrop_path;

  if (isLoading) {
    return <ActivityIndicator style={styles.container} />;
  }

  if (isError) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundImage path={path} />
      <MovieDescription movieData={movieData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieDetails;
