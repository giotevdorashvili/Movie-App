import React, {useCallback} from 'react';

import PressableSearchMovie from '../../components/PressableSearchMovie';
import {SingleMovie} from '../services/types';

const useSearchRenderItem = () => {
  const renderItem = useCallback(({item}: {item: SingleMovie}) => {
    return <PressableSearchMovie item={item} />;
  }, []);

  return renderItem;
};

export default useSearchRenderItem;
