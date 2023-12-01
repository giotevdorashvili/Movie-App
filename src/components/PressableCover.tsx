import React from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card} from 'react-native-paper';
import {LinearGradient} from 'react-native-linear-gradient';

import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  FadeInRight,
} from 'react-native-reanimated';

import {getPosterUrl} from '../utils/serviceUtils/utils';
import {SingleMovie, MovieDetailTypes} from '../hooks/services/types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PressableCover = ({
  movieData,
  cardStyle,
}: {
  movieData: SingleMovie | MovieDetailTypes;
  cardStyle: ViewStyle;
}) => {
  const navigation = useNavigation();

  const scale = useSharedValue(1);

  const handlePressIn = () => {
    scale.value = withSpring(0.9);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const handleMoviePress = () => {
    navigation.navigate('MovieDetails', {id: movieData.id});
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return (
    <AnimatedPressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handleMoviePress}
      entering={FadeInRight.duration(1000).delay(500)}
      style={animatedStyle}>
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
    </AnimatedPressable>
  );
};

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
