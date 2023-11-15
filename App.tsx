import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './src/stackNavigator/StackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StackNavigator />
      </View>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
