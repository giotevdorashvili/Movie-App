import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, Button, ActivityIndicator} from 'react-native-paper';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';

import {MovieLists} from './types';
import useMovieList from '../../hooks/services/useMovieList';
import useRenderItem from '../../hooks/flatLIst/useRenderItem';

const MoviesList = ({listName, title}: MovieLists) => {
  const {data, isLoading, isError} = useMovieList(listName);

  const navigation = useNavigation();

  const renderItem = useRenderItem(styles.cardStyle);

  const handleSeeAllPress = () => {
    navigation.navigate('CategoryAllMovies', {
      keyName: listName,
      title,
    });
  };

  if (isLoading) {
    return <ActivityIndicator style={styles.activityIndicator} />;
  }

  if (isError) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionDescriptionContainer}>
        <Text style={styles.title}>{title}</Text>

        <Button
          onPress={handleSeeAllPress}
          labelStyle={styles.seeAll}
          textColor="grey">
          See all
        </Button>
      </View>

      <FlashList
        horizontal
        data={data?.data?.results}
        renderItem={renderItem}
        estimatedItemSize={20}
        keyExtractor={movie => movie.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  sectionDescriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
  seeAll: {
    fontSize: 16,
  },
  activityIndicator: {
    height: Dimensions.get('window').height / 4,
  },
  cardStyle: {
    width: 130,
    height: 200,
    marginRight: 10,
  },
});

export default MoviesList;
