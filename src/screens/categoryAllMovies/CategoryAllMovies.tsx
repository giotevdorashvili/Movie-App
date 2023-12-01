import React, {useEffect, useMemo, useState, useRef} from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Text, AnimatedFAB} from 'react-native-paper';
import {FlashList} from '@shopify/flash-list';

import useCategeryAllMovies from '../../hooks/services/useCategeryAllMovies';
import {ScreenProps} from '../../navigators/StackNavigator';
import useRenderItem from '../../hooks/flatLIst/useRenderItem';
import {PaperTheme} from '../../theme/theme';

type OnScrollEventHandler = (
  event: NativeSyntheticEvent<NativeScrollEvent>,
) => void;

const CategoryAllMovies: React.FC<ScreenProps<'CategoryAllMovies'>> = ({
  route,
  navigation,
}) => {
  const {keyName, title} = route.params;
  const {height} = useWindowDimensions();
  const [visible, setVisible] = useState(false);
  const flashListRef = useRef<FlashList<any>>(null);

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

  const handleScroll: OnScrollEventHandler = event => {
    if (event.nativeEvent.contentOffset.y > height * 0.8) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

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

      <AnimatedFAB
        icon="arrow-up-thin"
        label={'Label'}
        extended={false}
        onPress={handleFabPress}
        visible={visible}
        animateFrom={'right'}
        iconMode={'static'}
        style={[styles.fab]}
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
