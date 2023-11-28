import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlashList} from '@shopify/flash-list';

import {ScreenProps} from '../../navigators/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MovieDetailTypes} from '../../hooks/services/types';
import PressableCover from '../../components/PressableCover';
import useAsyncStorage from '../../hooks/syncStorage/useAsyncStorage';
import GoBackButton from '../../components/GoBackButton';

const Favorites: React.FC<ScreenProps<'Favorites'>> = () => {
  const [favorites, setFavorites] = useAsyncStorage('favorites');

  const renderItem = ({item}: {item: MovieDetailTypes}) => {
    return <PressableCover movieData={item} cardStyle={styles.cardStyle} />;
  };

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const latestFavorites = await AsyncStorage.getItem('favorites');

        setFavorites(latestFavorites ? JSON.parse(latestFavorites) : []);
      })();
    }, [setFavorites]),
  );

  if (!favorites.length) {
    return (
      <SafeAreaView style={styles.container}>
        <GoBackButton />

        <Text style={styles.favorite}>No Favorites found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleButtonContainer}>
        <GoBackButton />
        <Text style={styles.title}>Favorites</Text>
      </View>

      <FlashList
        data={favorites}
        renderItem={renderItem}
        estimatedItemSize={favorites.length}
        numColumns={3}
        keyExtractor={(movie, index) => `${movie.id.toString()}-${index}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  titleButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    marginLeft: 80,
    fontWeight: '600',
  },
  cardStyle: {
    alignSelf: 'center',
    width: 120,
    height: 180,
    marginBottom: 10,
    marginHorizontal: 3,
  },
  favorite: {
    flex: 1,
    fontSize: 25,
    fontWeight: '600',
    alignSelf: 'center',
    top: '30%',
  },
});

export default Favorites;
