import React from 'react';
import {StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {PaperTheme} from '../theme/theme';

const FavoritesButton = ({
  onPress,
  movieFavorited = true,
}: {
  onPress: () => void;
  movieFavorited?: boolean;
}) => {
  return (
    <IconButton
      icon="heart"
      iconColor={
        movieFavorited ? PaperTheme.colors.tomato : PaperTheme.colors.outline
      }
      size={25}
      onPress={onPress}
      style={styles.iconButton}
    />
  );
};

const styles = StyleSheet.create({
  iconButton: {
    alignSelf: 'flex-end',
  },
});

export default FavoritesButton;
