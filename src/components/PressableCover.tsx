import React, {memo} from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card} from 'react-native-paper';
import {LinearGradient} from 'react-native-linear-gradient';

import {getPosterUrl} from '../utils/serviceUtils/utils';
import {SingleMovie} from '../hooks/services/types';

const PressableCover = memo(
  ({movieData, cardStyle}: {movieData: SingleMovie; cardStyle: ViewStyle}) => {
    const navigation = useNavigation();

    const handleMoviePress = () => {
      const {id} = movieData;
      navigation.navigate('MovieDetails', {id});
    };

    return (
      <Pressable onPress={handleMoviePress}>
        <LinearGradient
          colors={['grey', 'black']}
          style={[styles.gradient, cardStyle]}>
          <Card.Cover
            style={styles.cardCover}
            source={{
              uri: getPosterUrl(movieData?.poster_path),
            }}
          />
        </LinearGradient>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  gradient: {
    padding: 1,
    borderRadius: 15,
  },
  cardCover: {
    width: '100%',
    height: '100%',
  },
});

export default PressableCover;
