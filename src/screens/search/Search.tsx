import React, {useMemo, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, ActivityIndicator} from 'react-native-paper';
import {useDebounce} from 'use-debounce';
import {FlashList} from '@shopify/flash-list';

import {ScreenProps} from '../../navigators/StackNavigator';
import useSearchMovies from '../../hooks/services/useSearchMovies';
import SearchInput from './SearchInput';
import useSearchRenderItem from '../../hooks/flatLIst/useSearchRenderItem';
import {renderDivider} from '../../utils/helpers';

const Search: React.FC<ScreenProps<'Search'>> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [query] = useDebounce(searchQuery, 1000);

  const renderItem = useSearchRenderItem();

  const {
    data,
    error,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearchMovies(query);

  const dataResults = useMemo(
    () => data?.pages.flatMap(page => page.data.results),
    [data?.pages],
  );

  const handleIncreasePage = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return <ActivityIndicator style={styles.activityIndicator} />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {!dataResults?.length ? (
        <Text style={styles.notFound}>No Match</Text>
      ) : (
        <FlashList
          data={dataResults}
          renderItem={renderItem}
          estimatedItemSize={20 * (data?.pages?.length || 1)}
          onEndReached={handleIncreasePage}
          onEndReachedThreshold={0.1}
          keyExtractor={(movie, index) => `${movie.id.toString()}-${index}`}
          ItemSeparatorComponent={renderDivider}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    gap: 20,
    marginTop: -40,
    marginHorizontal: 10,
  },
  notFound: {
    flex: 1,
    fontSize: 25,
    fontWeight: '600',
    alignSelf: 'center',
    top: '10%',
  },
  activityIndicator: {
    height: Dimensions.get('window').height / 4,
  },
});

export default Search;
