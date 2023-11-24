import React from 'react';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';

import {IconButton, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {getPosterUrl} from '../../utils/serviceUtils/utils';
import {PaperTheme} from '../../theme/theme';

const BackgroundImage = ({path}: {path: string}) => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={{uri: getPosterUrl(path)}} style={styles.image}>
      <IconButton
        icon="chevron-left"
        iconColor={PaperTheme.colors.onBackground}
        containerColor={PaperTheme.colors.greyOpacity}
        size={27}
        onPress={navigation.goBack}
      />

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
