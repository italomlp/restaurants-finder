import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';

const App: React.FC = () => (
  <NavigationContainer>
    <Text>Restaurants Finder</Text>
  </NavigationContainer>
);

export default App;
