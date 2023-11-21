import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';

import {ScreenProps} from '../../navigators/StackNavigator';
import {getPosterUrl} from '../../utils/serviceUtils/utils';
import useMovieDetails from '../../hooks/services/useMovieDetails';
import {MovieDetailTypes} from '../../hooks/services/types';

const MovieDetails: React.FC<ScreenProps<'MovieDetails'>> = ({
  navigation,
  route,
}) => {
  const {data, isLoading, isError} = useMovieDetails(route.params.id);

  const movieData: MovieDetailTypes = data?.data;

  if (isLoading) {
    return <ActivityIndicator style={styles.container} />;
  }

  if (isError) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: getPosterUrl(movieData.backdrop_path)}}
        style={styles.image}>
        <IconButton
          icon="chevron-left"
          iconColor="#FFF"
          containerColor="rgba(173, 166, 141, 0.4)"
          size={27}
          onPress={navigation.goBack}
        />

        <Text style={styles.preview}>Preview</Text>
      </ImageBackground>

      <View style={styles.movieDescrcriptionContainer}>
        <Text style={styles.title}>{movieData.title}</Text>

        <Text style={styles.year}>{movieData.release_date.slice(0, 4)}</Text>

        <View style={styles.ratingContainer}>
          <IconButton
            icon="thumb-up"
            iconColor="black"
            containerColor="#F23801"
            size={12}
          />
          <Text style={styles.rating}>{movieData.vote_average.toFixed(1)}</Text>
        </View>
        <Text style={styles.language}>{movieData.original_language}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    justifyContent: 'space-between',
    height: Dimensions.get('window').height / 3.5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  preview: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  movieDescrcriptionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 25,
  },
  language: {
    fontSize: 17,
    color: '#6BC46D',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 17,
    color: 'grey',
  },
  year: {
    fontSize: 17,
    color: 'grey',
  },
});

export default MovieDetails;
