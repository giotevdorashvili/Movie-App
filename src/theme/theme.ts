import {MD3DarkTheme as DefaultTheme} from 'react-native-paper';
import {DarkTheme} from '@react-navigation/native';

export const PaperTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#0A0B0B',
    green: '#6BC46D',
    orange: '#F23801',
    grey: 'grey',
    greyOpacity: 'rgba(173, 166, 141, 0.4)',
  },
};

export const getNavigationTheme = (background: string) => {
  return {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background,
    },
  };
};
