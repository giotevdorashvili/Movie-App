import {MD3DarkTheme as DefaultTheme, useTheme} from 'react-native-paper';
import {DarkTheme} from '@react-navigation/native';

export const PaperTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#0A0B0B',
  },
};

export const useThemeColors = () => {
  const {
    colors: {background},
  } = useTheme();

  return {background};
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
