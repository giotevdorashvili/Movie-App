import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Home from '../screens/home/Home';
import MovieDetails from '../screens/movieDetails/MovieDetails';
import Search from '../screens/Search';
import CategoryAllMovies from '../screens/categoryAllMovies/CategoryAllMovies';
import {ListNameLiterals} from '../hooks/services/types';

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {id: number};
  CategoryAllMovies: {keyName: ListNameLiterals; title: string};
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
      <Stack.Screen name="CategoryAllMovies" component={CategoryAllMovies} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
