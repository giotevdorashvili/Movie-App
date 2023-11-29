import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Text} from 'react-native-paper';
import {FlashList} from '@shopify/flash-list';

import useCategeryAllMovies from '../../hooks/services/useCategeryAllMovies';
import {ScreenProps} from '../../navigators/StackNavigator';
import useRenderItem from '../../hooks/flatLIst/useRenderItem';

const CategoryAllMovies: React.FC<ScreenProps<'CategoryAllMovies'>> = ({
  route,
  navigation,
}) => {
  const {keyName, title} = route.params;

  const {
    data,
    error,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useCategeryAllMovies(keyName);

  const renderItem = useRenderItem(styles.cardStyle);

  const dataResults = data?.pages.flatMap(page => page.data.results);

  useEffect(() => {
    navigation.setParams({title});
  }, [navigation, title]);

  const handleIncreasePage = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return <ActivityIndicator style={styles.container} />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={dataResults}
        renderItem={renderItem}
        estimatedItemSize={20 * (data?.pages?.length || 1)}
        numColumns={3}
        onEndReached={handleIncreasePage}
        onEndReachedThreshold={0.1}
        keyExtractor={(movie, index) => `${movie.id.toString()}-${index}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: -20,
  },
  title: {
    fontSize: 20,
    marginLeft: 30,
    fontWeight: '600',
  },
  cardStyle: {
    alignSelf: 'center',
    width: 120,
    height: 180,
    marginBottom: 10,
    marginHorizontal: 3,
  },
});

export default CategoryAllMovies;
