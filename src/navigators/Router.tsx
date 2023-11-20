import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './StackNavigator';
import {PaperTheme} from '../theme/theme';
import {getNavigationTheme} from '../theme/theme';

const Router = () => {
  return (
    <NavigationContainer
      theme={getNavigationTheme(PaperTheme.colors.background)}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Router;
