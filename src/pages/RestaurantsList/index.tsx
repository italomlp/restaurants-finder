import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../../components/atoms';
import { LoadingIndicator, Searchbar } from '../../components/molecules';
import { RestaurantsThumbsList } from '../../components/organisms';

import HeaderAsset from '../../assets/images/header.png';

import {
  RadiusSpacing,
  styles,
  ListSearchContainer,
  HeaderImage,
} from './styles';
import { useInfinityFetch } from '../../hooks/useInfinityFetch';
import Restaurant from '../../interfaces/Restaurant';

import { getData, getKey, RestaurantsListResponse } from './controller';

const RestaurantsList: React.FC = () => {
  const { navigate } = useNavigation();
  const { data, size, setSize, isReachEnd } = useInfinityFetch<
    Restaurant[],
    unknown,
    RestaurantsListResponse
  >(getKey, getData);

  const normalizedData = useMemo(
    () => data?.reduce<Restaurant[]>((acc, cur) => [...acc, ...cur], []) ?? [],
    [data],
  );

  return (
    <RestaurantsThumbsList
      data={normalizedData}
      headerComponent={
        <>
          <HeaderImage source={HeaderAsset} />
          <Text type="h2" style={styles.titleSpacing}>
            Descubra novos sabores
          </Text>

          <Text type="lead" style={styles.subtitleSpacing}>
            Aqui eu converso com você sobre nossa proposta
          </Text>

          <RadiusSpacing />
          <ListSearchContainer>
            <TouchableOpacity onPress={() => navigate('RestaurantsSearch')}>
              <View pointerEvents="none">
                <Searchbar
                  placeholder="Encontre um restaurante"
                  containerProps={{ style: styles.searchbarSpacing }}
                />
              </View>
            </TouchableOpacity>
          </ListSearchContainer>
        </>
      }
      onEndReachedThreshold={0.05}
      onEndReached={() => {
        if (!isReachEnd) {
          setSize(size + 1);
        }
      }}
      ListFooterComponent={
        !isReachEnd ? <LoadingIndicator marginTop /> : undefined
      }
    />
  );
};

export default RestaurantsList;
