import React from 'react';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';

import {getPosterUrl} from '../../utils/serviceUtils/utils';
import GoBackButton from '../../components/GoBackButton';

const BackgroundImage = ({path}: {path: string}) => {
  return (
    <ImageBackground source={{uri: getPosterUrl(path)}} style={styles.image}>
      <GoBackButton />

      <Text style={styles.preview}>Preview</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: 'space-between',
    height: Dimensions.get('window').height / 3.5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  preview: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default BackgroundImage;
