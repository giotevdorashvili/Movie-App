import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ScreenProps} from '../../navigators/StackNavigator';
import MoviesList from './MoviesList';
import FavoritesButton from '../../components/FavoritesButton';

const Home: React.FC<ScreenProps<'Home'>> = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Favorites', {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FavoritesButton onPress={onPress} />
        <MoviesList listName="upcoming" title="Upcoming" />
        <MoviesList listName="popular" title="Popular" />
        <MoviesList listName="top_rated" title="Top Rated" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 25,
  },
});

export default Home;
