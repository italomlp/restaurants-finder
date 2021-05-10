import React from 'react';
import { FlatListProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { Text } from '../../atoms';
import { RestaurantThumb } from '../../molecules';

import {
  ThumbContainer,
  ThumbsList,
  styles,
  ListSearchContainer,
  HeaderContainer,
} from './styles';
import Restaurant from '../../../interfaces/Restaurant';

type RestaurantsThumbsListProps = Partial<FlatListProps<Restaurant>> & {
  headerComponent: React.ReactElement;
  data: Restaurant[];
};

const RestaurantsThumbsList: React.FC<RestaurantsThumbsListProps> = ({
  headerComponent,
  data,
  ...props
}) => {
  const { bottom } = useSafeAreaInsets();
  const { navigate } = useNavigation();

  return (
    <ThumbsList
      {...props}
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
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <ThumbContainer
          firstInRow={!(index % 2)}
          lastRow={index >= data.length - 2}
        >
          <RestaurantThumb
            onPress={() => navigate('RestaurantDetails', { id: item.id })}
            imageStyle={styles.thumbImageItem}
            source={{ uri: item.image }}
            title={item.name}
          />
        </ThumbContainer>
      )}
    />
  );
};

export default RestaurantsThumbsList;
