import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';

import {MovieDetailTypes} from '../../hooks/services/types';
import {PaperTheme} from '../../theme/theme';

const MovieDescription = ({movieData}: {movieData: MovieDetailTypes}) => {
  const hours = Math.floor(movieData?.runtime / 60);
  const mins = movieData?.runtime % 60;

  return (
    <>
      <View style={styles.movieDescrcriptionContainer}>
        <Text style={styles.title}>{movieData.title}</Text>
        <View style={styles.movieDescrcriptionDetails}>
          <View style={styles.ratingContainer}>
            <IconButton
              icon="thumb-up"
              iconColor={PaperTheme.colors.background}
              containerColor={PaperTheme.colors.orange}
              size={12}
            />
            <Text style={styles.generic}>
              {movieData?.vote_average?.toFixed(1)}
            </Text>
          </View>
          <Text style={styles.generic}>{movieData.genres[0].name}</Text>
          <Text style={styles.generic}>
            {hours}h {mins}min
          </Text>
          <Text style={styles.generic}>{movieData.original_language}</Text>
          <Text style={styles.year}>{movieData.release_date.slice(0, 4)}</Text>
        </View>
      </View>

      <View style={styles.movieDescrcriptionContainer}>
        <Text style={styles.title}>Prolog</Text>
        <Text style={styles.prologText}>{movieData.overview}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  movieDescrcriptionContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    gap: 10,
  },
  movieDescrcriptionDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 25,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    fontSize: 17,
    color: PaperTheme.colors.green,
  },
  generic: {
    fontSize: 17,
    color: PaperTheme.colors.grey,
  },
  prologText: {
    color: PaperTheme.colors.grey,
  },
});

export default MovieDescription;
