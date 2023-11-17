import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-paper';

import useMovieList from '../../hooks/services/useMovieList';
import PressableCover from '../../components/PressableCover';
import {ListNameLiterals} from '../../hooks/services/types';

const MoviesList = ({listName}: {listName: ListNameLiterals}) => {
  const {data, isLoading, isError} = useMovieList(listName);

  const title = listName[0].toUpperCase() + listName.slice(1);

  const handleSeeAllPress = () => {};

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 25,
    gap: 10,
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
});

export default MoviesList;
