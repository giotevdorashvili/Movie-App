import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Home from '../screens/home/Home';
import MovieDetails from '../screens/movieDetails/MovieDetails';
import Search from '../screens/Search';

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {id: number};
  Search: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
