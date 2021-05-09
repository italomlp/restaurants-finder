import React from 'react';
import { SafeAreaView } from 'react-native';

import { Loader, Text } from '../../components/atoms';

const RestaurantsList: React.FC = () => (
  <SafeAreaView>
    <Text>Restaurants list</Text>
    <Loader />
  </SafeAreaView>
);

export default RestaurantsList;
