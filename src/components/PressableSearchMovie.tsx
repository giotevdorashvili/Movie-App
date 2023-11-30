import React from 'react';
import {Pressable} from 'react-native';
import {List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {SingleMovie} from '../hooks/services/types';
import {renderAvatar} from '../utils/helpers';

const PressableSearchMovie = ({item}: {item: SingleMovie}) => {
  const navigation = useNavigation();

  const handleMoviePress = () => {
    const {id} = item;
    navigation.navigate('MovieDetails', {id});
  };

  return (
    <Pressable onPress={handleMoviePress}>
      <List.Item
        title={item.title}
        left={() => renderAvatar(item?.poster_path)}
      />
    </Pressable>
  );
};

export default PressableSearchMovie;
