import React from 'react';
import {FlatList, View, StyleSheet, useWindowDimensions} from 'react-native';
import {Text, Button, ActivityIndicator} from 'react-native-paper';

import useMovieList from '../../hooks/services/useMovieList';
import PressableCover from '../../components/PressableCover';
import {MovieLists} from './types';

const MoviesList = ({listName, title}: MovieLists) => {
  const {data, isLoading, isError} = useMovieList(listName);

  const {height} = useWindowDimensions();

  const styles = getStyles(height / 4);

  const handleSeeAllPress = () => {};

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

      <FlatList
        horizontal
        data={data?.data?.results}
        renderItem={({item}) => <PressableCover movie={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const getStyles = (height: number) => {
  return StyleSheet.create({
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
      height,
    },
  });
};

export default MoviesList;
