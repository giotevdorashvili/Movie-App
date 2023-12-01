import React, {useEffect, useMemo, useRef} from 'react';
import {StyleSheet, useWindowDimensions, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Text, FAB} from 'react-native-paper';
import {FlashList} from '@shopify/flash-list';

import useCategeryAllMovies from '../../hooks/services/useCategeryAllMovies';
import {ScreenProps} from '../../navigators/StackNavigator';
import useRenderItem from '../../hooks/flatLIst/useRenderItem';
import {PaperTheme} from '../../theme/theme';

const CategoryAllMovies: React.FC<ScreenProps<'CategoryAllMovies'>> = ({
  route,
  navigation,
}) => {
  const {keyName, title} = route.params;
  const {height} = useWindowDimensions();

  const flashListRef = useRef<FlashList<any>>(null);

  const opacityValue = useRef(new Animated.Value(0)).current;

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

  const dataResults = useMemo(
    () => data?.pages.flatMap(page => page.data.results),
    [data?.pages],
  );

  useEffect(() => {
    navigation.setParams({title});
  }, [navigation, title]);

  const handleIncreasePage = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: opacityValue}}}],
    {useNativeDriver: false},
  );

  const opacity = opacityValue.interpolate({
    inputRange: [height * 0.6, height * 0.8],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const handleFabPress = () => {
    flashListRef.current?.scrollToIndex({animated: true, index: 0});
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
        ref={flashListRef}
        data={dataResults}
        renderItem={renderItem}
        estimatedItemSize={20 * (data?.pages?.length || 1)}
        numColumns={3}
        onEndReached={handleIncreasePage}
        onEndReachedThreshold={0.1}
        onScroll={handleScroll}
        keyExtractor={(movie, index) => `${movie.id.toString()}-${index}`}
      />

      <FAB
        icon="arrow-up-thin"
        onPress={handleFabPress}
        style={{...styles.fab, opacity}}
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
  fab: {
    position: 'absolute',
    bottom: '20%',
    right: '10%',
    backgroundColor: PaperTheme.colors.orange,
  },
});

export default CategoryAllMovies;
