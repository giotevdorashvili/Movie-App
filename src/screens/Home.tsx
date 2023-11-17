import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import useFetchUpcoming from '../hooks/services/useFetchUpcoming';
import {ScreenProps} from '../navigators/StackNavigator';
import PressableCover from '../components/PressableCover';

const Home: React.FC<ScreenProps<'Home'>> = () => {
  const {data, isLoading, isError} = useFetchUpcoming();

  const handleSeeAllPress = () => {};

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionDescriptionContainer}>
        <Text style={styles.title}>Upcoming</Text>
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
        renderItem={({item}) => (
          <PressableCover posterPath={item.poster_path} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 25,
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

export default Home;
