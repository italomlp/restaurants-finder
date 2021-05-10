import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../components/atoms';
import { RestaurantThumb, Searchbar } from '../../components/molecules';

import HeaderAsset from '../../assets/images/header.png';

import {
  RadiusSpacing,
  ThumbContainer,
  ThumbsList,
  styles,
  ListSearchContainer,
  HeaderImage,
  HeaderContainer,
} from './styles';

const DATA = [...new Array(7)].map((_, i) => i);

const RestaurantsList: React.FC = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <ThumbsList
      data={DATA}
      numColumns={2}
      ListHeaderComponent={
        <HeaderContainer>
          <HeaderImage source={HeaderAsset} />
          <Text type="h2" style={styles.titleSpacing}>
            Descubra novos sabores
          </Text>

          <Text type="lead" style={styles.subtitleSpacing}>
            Aqui eu converso com você sobre nossa proposta
          </Text>

          <RadiusSpacing />
          <ListSearchContainer>
            <TouchableOpacity
              onPress={() => console.tron.log('go to search screen')}
            >
              <View pointerEvents="none">
                <Searchbar
                  placeholder="Encontre um restaurante"
                  containerProps={{ style: styles.searchbarSpacing }}
                />
              </View>
            </TouchableOpacity>

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
          lastRow={index >= DATA.length - 2}
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

export default RestaurantsList;
