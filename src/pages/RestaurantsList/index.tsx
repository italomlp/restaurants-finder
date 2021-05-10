import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../../components/atoms';
import { Searchbar } from '../../components/molecules';
import { RestaurantsThumbsList } from '../../components/organisms';

import HeaderAsset from '../../assets/images/header.png';

import {
  RadiusSpacing,
  styles,
  ListSearchContainer,
  HeaderImage,
} from './styles';

const DATA = [...new Array(7)].map((_, i) => i);

const RestaurantsList: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <RestaurantsThumbsList
      data={DATA}
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
    />
  );
};

export default RestaurantsList;
