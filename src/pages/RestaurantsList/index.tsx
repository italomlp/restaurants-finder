import React from 'react';
import { SafeAreaView } from 'react-native';

import { Loader, Text } from '../../components/atoms';
import { RestaurantThumb, Searchbar } from '../../components/molecules';

const RestaurantsList: React.FC = () => (
  <SafeAreaView style={{ flex: 1, margin: 20 }}>
    <Text>Restaurants list</Text>
    <Loader />
    <Searchbar placeholder="Placeholder" />
    <RestaurantThumb
      source={{ uri: 'https://loremflickr.com/500/500/logo' }}
      title="Thumb title"
    />
  </SafeAreaView>
);

export default RestaurantsList;
