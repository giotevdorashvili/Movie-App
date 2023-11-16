import React from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import useFetchUpcoming from '../hooks/services/useFetchUpcoming';
import {ScreenProps} from '../navigators/StackNavigator';

const Home: React.FC<ScreenProps<'Home'>> = () => {
  const {data, isLoading, isError} = useFetchUpcoming();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.results}
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
