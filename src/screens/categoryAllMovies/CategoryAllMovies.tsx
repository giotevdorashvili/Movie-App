import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, IconButton, Text} from 'react-native-paper';
import {FlashList} from '@shopify/flash-list';

import PressableCover from '../../components/PressableCover';
import {SingleMovie} from '../../hooks/services/types';
import useCategeryAllMovies from '../../hooks/services/useCategeryAllMovies';
import {ScreenProps} from '../../navigators/StackNavigator';
import {PaperTheme} from '../../theme/theme';

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
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useCategeryAllMovies(keyName);

  const renderItem = useCallback(({item}: {item: SingleMovie}) => {
    return <PressableCover movieData={item} cardStyle={styles.cardStyle} />;
  }, []);

  const handleIncreasePage = () => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  };

  const dataResults = data?.pages.map(page => page.data.results).flat();

  if (isLoading) {
    return <ActivityIndicator style={styles.container} />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleButtonContainer}>
        <IconButton
          icon="chevron-left"
          iconColor={PaperTheme.colors.onBackground}
          containerColor={PaperTheme.colors.greyOpacity}
          size={24}
          onPress={navigation.goBack}
        />
        <Text style={styles.title}>All {title} Movies</Text>
      </View>

      <FlashList
        data={dataResults}
        renderItem={renderItem}
        estimatedItemSize={20 * (data?.pages?.length || 1)}
        numColumns={3}
        onEndReached={handleIncreasePage}
        onEndReachedThreshold={0.1}
        keyExtractor={movie => movie.id.toString()}
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
