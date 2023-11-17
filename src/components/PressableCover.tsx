import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card} from 'react-native-paper';
import {LinearGradient} from 'react-native-linear-gradient';

const PressableCover = ({posterPath}: {posterPath: string}) => {
  const navigation = useNavigation();

  const handleMoviePress = () => {
    navigation.navigate('MovieDetails', {});
  };

  return (
    <Pressable onPress={handleMoviePress}>
      <Card style={styles.container}>
        <LinearGradient colors={['grey', 'black']} style={styles.gradient}>
          <Card.Cover
            source={{
              uri: `https://image.tmdb.org/t/p/original${posterPath}`,
            }}
          />
        </LinearGradient>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 130,
    marginRight: 10,
  },
  gradient: {
    padding: 1,
    borderRadius: 15,
    borderBottomColor: 'black',
  },
});

export default PressableCover;
