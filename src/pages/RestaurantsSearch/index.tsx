import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Row, Text } from '../../components/atoms';
import { Searchbar } from '../../components/molecules';
import { RestaurantsThumbsList } from '../../components/organisms';

import BackIcon from '../../assets/icons/chevron_left_black.png';

import { HeaderContainer, styles } from './styles';

const DATA = [...new Array(7)].map((_, i) => i);

const RestaurantsSearch: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <RestaurantsThumbsList
      headerComponent={
        <HeaderContainer>
          <Row separate style={styles.headerBarSpacing}>
            <TouchableOpacity onPress={goBack} hitSlop={styles.backHitSlop}>
              <Image source={BackIcon} />
            </TouchableOpacity>
            <View>
              <Text center type="paragraph" style={styles.resultsDescription}>
                Resultados para
              </Text>
              <Text center type="h5">
                Termo pesquisado
              </Text>
            </View>
            <View
              pointerEvents="none"
              style={styles.headerRightSpacingPlaceholder}
            >
              <Image source={BackIcon} />
            </View>
          </Row>
          <Searchbar
            containerProps={{ style: styles.searchbarSpacing }}
            placeholder="Encontre um restaurante"
          />
        </HeaderContainer>
      }
      data={DATA}
    />
  );
};

export default RestaurantsSearch;
