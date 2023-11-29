import React, {useCallback} from 'react';
import {ViewStyle} from 'react-native';

import PressableCover from '../../components/PressableCover';
import {MovieDetailTypes, SingleMovie} from '../services/types';

const useRenderItem = (cardStyle: ViewStyle) => {
  const renderItem = useCallback(
    ({item}: {item: SingleMovie | MovieDetailTypes}) => {
      return <PressableCover movieData={item} cardStyle={cardStyle} />;
    },
    [cardStyle],
  );

  return renderItem;
};

export default useRenderItem;
