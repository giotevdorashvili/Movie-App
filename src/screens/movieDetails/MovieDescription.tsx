import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';

import {MovieDetailTypes} from '../../hooks/services/types';
import {PaperTheme} from '../../theme/theme';
import FavoritesButton from '../../components/FavoritesButton';
import useAsyncStorage from '../../hooks/asyncStorage/useAsyncStorage';

const MovieDescription = ({movieData}: {movieData: MovieDetailTypes}) => {
  const [ids, setIds] = useAsyncStorage('favorites');

  const [movieFavorited, setMovieFavorited] = useState<boolean>();

  const hours = Math.floor(movieData?.runtime / 60);
  const mins = movieData?.runtime % 60;

  const isMovieFavoreted = ids.some((id: number) => id === movieData.id);

  useEffect(() => {
    if (isMovieFavoreted) {
      setMovieFavorited(true);
    } else {
      setMovieFavorited(false);
    }
  }, [ids, movieData.id, isMovieFavoreted]);

  const onPress = async () => {
    try {
      let updatedIds;

      if (isMovieFavoreted) {
        updatedIds = ids.filter((id: number) => id !== movieData.id);
      } else {
        updatedIds = [...ids, movieData.id];
      }
      setIds(updatedIds);
    } catch (e) {
      console.log(e, '..............//////////');
    }
  };

  return (
    <>
      <View style={styles.movieDescrcriptionContainer}>
        <View style={styles.titleIconContainer}>
          <Text style={styles.title}>{movieData.title}</Text>

          <FavoritesButton onPress={onPress} movieFavorited={movieFavorited} />
        </View>
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
  titleIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '90%',
  },
  title: {
    fontSize: 25,
    maxWidth: '80%',
  },
  movieDescrcriptionDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 10,
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
