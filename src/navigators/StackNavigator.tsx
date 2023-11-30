import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {ListNameLiterals} from '../hooks/services/types';
import Home from '../screens/home/Home';
import MovieDetails from '../screens/movieDetails/MovieDetails';
import CategoryAllMovies from '../screens/categoryAllMovies/CategoryAllMovies';
import Favorites from '../screens/favorites/Favorites';
import Search from '../screens/search/Search';
import {PaperTheme} from '../theme/theme';
import {renderFavoritesButton, renderGoBackButton} from '../utils/helpers';

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {id: number};
  CategoryAllMovies: {keyName: ListNameLiterals; title: string};
  Favorites: {};
  Search: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: PaperTheme.colors.background,
        },
        headerTitleStyle: {
          fontSize: 20,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerRight: () => renderFavoritesButton(navigation),
          title: '',
        })}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CategoryAllMovies"
        component={CategoryAllMovies}
        options={({route}) => ({
          headerLeft: renderGoBackButton,
          title: `All ${route.params.title} Movies`,
        })}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerLeft: renderGoBackButton,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: '',
          headerLeft: renderGoBackButton,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
