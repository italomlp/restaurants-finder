import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import debounce from 'lodash/debounce';

import { Row, Text } from '../../components/atoms';
import { LoadingIndicator, Searchbar } from '../../components/molecules';
import { RestaurantsThumbsList } from '../../components/organisms';

import BackIcon from '../../assets/icons/chevron_left_black.png';

import { useFetch } from '../../hooks/useFetch';
import Restaurant from '../../interfaces/Restaurant';

import { HeaderContainer, styles } from './styles';
import { getData, RestaurantsListSearchResponse } from './controller';

const RestaurantsSearch: React.FC = () => {
  const { goBack } = useNavigation();
  const searchRef = useRef<TextInput>(null);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const { data } = useFetch<
    Restaurant[],
    unknown,
    RestaurantsListSearchResponse
  >(`/restaurants?search=${searchQuery}`, getData);

  useLayoutEffect(() => {
    searchRef.current?.focus();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  const debounceFilter = useCallback(
    debounce((text) => {
      setSearchQuery(text);
    }, 1000),
    [],
  );

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
                {searchValue || '-'}
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
            ref={searchRef}
            containerProps={{ style: styles.searchbarSpacing }}
            placeholder="Encontre um restaurante"
            value={searchValue}
            onChangeText={(text) => {
              setSearchValue(text);
              setLoading(true);
              debounceFilter(text);
            }}
          />

          {loading && <LoadingIndicator />}
        </HeaderContainer>
      }
      data={data || []}
    />
  );
};

export default RestaurantsSearch;
