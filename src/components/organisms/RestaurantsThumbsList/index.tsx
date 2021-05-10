import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '../../atoms';
import { RestaurantThumb } from '../../molecules';

import {
  ThumbContainer,
  ThumbsList,
  styles,
  ListSearchContainer,
  HeaderContainer,
} from './styles';

type RestaurantsThumbsListProps = {
  headerComponent: React.ReactElement;
  data: any[]; // TODO: do this typing
};

const RestaurantsThumbsList: React.FC<RestaurantsThumbsListProps> = ({
  headerComponent,
  data,
}) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <ThumbsList
      data={data}
      numColumns={2}
      ListHeaderComponent={
        <HeaderContainer>
          {headerComponent}

          <ListSearchContainer>
            <Text type="h5" style={styles.restaurantsTitleSpacing}>
              Restaurantes
            </Text>
          </ListSearchContainer>
        </HeaderContainer>
      }
      contentContainerStyle={{ paddingBottom: 20 + bottom }}
      bounces={false}
      keyExtractor={(item) => String(item)}
      renderItem={({ item, index }) => (
        <ThumbContainer
          firstInRow={!(index % 2)}
          lastRow={index >= data.length - 2}
        >
          <RestaurantThumb
            onPress={() => console.tron.log('thumb pressed')}
            imageStyle={styles.thumbImageItem}
            source={{ uri: 'https://loremflickr.com/500/500/logo' }}
            title={`Title ${item + 1}`}
          />
        </ThumbContainer>
      )}
    />
  );
};

export default RestaurantsThumbsList;
