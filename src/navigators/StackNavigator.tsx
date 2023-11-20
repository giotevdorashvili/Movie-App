import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Home from '../screens/home/Home';
import MovieDetails from '../screens/movieDetails/MovieDetails';
import Search from '../screens/Search';
import {useThemeColors} from '../theme/theme';
import {SingleMovie} from '../hooks/services/types';

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {movie: SingleMovie};
  Search: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const {background} = useThemeColors();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: background,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
