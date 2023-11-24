import React, {memo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card} from 'react-native-paper';
import {LinearGradient} from 'react-native-linear-gradient';

import {getPosterUrl} from '../utils/serviceUtils/utils';
import {SingleMovie} from '../hooks/services/types';

const PressableCover = memo(({movieData}: {movieData: SingleMovie}) => {
  const navigation = useNavigation();

  const handleMoviePress = () => {
    const {id} = movieData;
    navigation.navigate('MovieDetails', {id});
  };

  return (
    <Pressable onPress={handleMoviePress}>
      <Card style={styles.container}>
        <LinearGradient colors={['grey', 'black']} style={styles.gradient}>
          <Card.Cover
            source={{
              uri: getPosterUrl(movieData?.poster_path),
            }}
          />
        </LinearGradient>
      </Card>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 130,
    marginRight: 10,
  },
  gradient: {
    padding: 1,
    borderRadius: 15,
    borderBottomColor: 'black',
  },
});

export default PressableCover;
