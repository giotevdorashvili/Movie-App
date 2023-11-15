import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ScreenProps} from '../navigators/StackNavigator';
import useFetchMovies from '../hooks/useFetchMovies';

const Home: React.FC<ScreenProps<'Home'>> = () => {
  const {response, isLoading, hasError} = useFetchMovies();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (hasError) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={response?.results}
        renderItem={({item}) => <Text> {item.title}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
