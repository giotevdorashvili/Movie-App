import React from 'react';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';

import {ScreenProps} from '../../navigators/StackNavigator';
import {getPosterUrl} from '../../utils/serviceUtils/utils';

const MovieDetails: React.FC<ScreenProps<'MovieDetails'>> = ({
  navigation,
  route,
}) => {
  const {movie} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: getPosterUrl(movie.backdrop_path)}}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 3.5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  preview: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
});

export default MovieDetails;
