import React from 'react';
import {IconButton} from 'react-native-paper';
import {PaperTheme} from '../theme/theme';
import {useNavigation} from '@react-navigation/native';

const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <IconButton
      icon="chevron-left"
      iconColor={PaperTheme.colors.onBackground}
      containerColor={PaperTheme.colors.greyOpacity}
      size={18}
      onPress={navigation.goBack}
    />
  );
};

export default GoBackButton;
