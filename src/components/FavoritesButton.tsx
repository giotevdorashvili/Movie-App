import React from 'react';
import {StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {PaperTheme} from '../theme/theme';

const FavoritesButton = ({
  onPress,
  iconColor = PaperTheme.colors.orange,
}: {
  onPress: () => void;
  iconColor?: string;
}) => {
  return (
    <IconButton
      icon="heart"
      iconColor={iconColor}
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
