import React from 'react';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {PaperTheme} from '../theme/theme';

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
