import React, {useCallback} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlashList} from '@shopify/flash-list';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ScreenProps} from '../../navigators/StackNavigator';
import useAsyncStorage from '../../hooks/asyncStorage/useAsyncStorage';
import GoBackButton from '../../components/GoBackButton';
import useRenderItem from '../../hooks/flatLIst/useRenderItem';
import useFavoriteMovies from '../../hooks/services/useFavoriteMovies';

const Favorites: React.FC<ScreenProps<'Favorites'>> = () => {
  const [ids, setIds] = useAsyncStorage('favorites');
  const {data, isLoading, isError, error} = useFavoriteMovies(ids);

  const renderItem = useRenderItem(styles.cardStyle);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const latestIds = await AsyncStorage.getItem('favorites');

        setIds(latestIds ? JSON.parse(latestIds) : []);
      })();
    }, [setIds]),
  );

  if (isLoading) {
    return <ActivityIndicator style={styles.activityIndicator} />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  if (!data?.length) {
    return (
      <SafeAreaView style={styles.container}>
        <GoBackButton />

        <Text style={styles.favorite}>No Favorites found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={data?.length}
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
    paddingTop: -20,
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
  activityIndicator: {
    height: Dimensions.get('window').height / 4,
  },
});

export default Favorites;
