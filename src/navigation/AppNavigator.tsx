import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import RestaurantsList from '../pages/RestaurantsList';
import RestaurantsSearch from '../pages/RestaurantsSearch';
import RestaurantDetails from '../pages/RestaurantDetails';

const AppStack = createStackNavigator();

const DEFAULT_OPTIONS: StackNavigationOptions = { gestureEnabled: false };

const AppNavigator: React.FC = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen
      name="RestaurantsList"
      component={RestaurantsList}
      options={DEFAULT_OPTIONS}
    />
    <AppStack.Screen
      name="RestaurantsSearch"
      component={RestaurantsSearch}
      options={DEFAULT_OPTIONS}
    />
    <AppStack.Screen
      name="RestaurantDetails"
      component={RestaurantDetails}
      options={DEFAULT_OPTIONS}
    />
  </AppStack.Navigator>
);

export default AppNavigator;
