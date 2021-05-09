import React from 'react';
import { SafeAreaView } from 'react-native';

import { Loader, Text } from '../../components/atoms';
import { Searchbar } from '../../components/molecules';

const RestaurantsList: React.FC = () => (
  <SafeAreaView style={{ flex: 1, margin: 20 }}>
    <Text>Restaurants list</Text>
    <Loader />
    <Searchbar placeholder="Placeholder" />
  </SafeAreaView>
);

export default RestaurantsList;
