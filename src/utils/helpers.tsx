import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationProp} from '@react-navigation/native';

import {Avatar, Divider} from 'react-native-paper';
import {getPosterUrl} from './serviceUtils/utils';
import SearchButton from '../components/SearchButton';
import FavoritesButton from '../components/FavoritesButton';
import GoBackButton from '../components/GoBackButton';

export const renderDivider = () => {
  return <Divider bold={true} />;
};

export const renderAvatar = (path: string) => {
  return (
    <LinearGradient colors={['grey', 'black']} style={styles.gradient}>
      <Avatar.Image size={35} source={{uri: getPosterUrl(path)}} />
    </LinearGradient>
  );
};

export const renderFavoritesButton = (navigation: NavigationProp<any>) => {
  return (
    <>
      <SearchButton onPress={() => navigation.navigate('Search', {})} />
      <FavoritesButton onPress={() => navigation.navigate('Favorites', {})} />
    </>
  );
};

export const renderGoBackButton = () => {
  return <GoBackButton />;
};

const styles = StyleSheet.create({
  gradient: {
    padding: 2,
    borderRadius: 100,
  },
});
