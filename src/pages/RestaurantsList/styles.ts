import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { WHITE } from '../../constants/colors';
import { SCREEN_WIDTH } from '../../constants/screen';

export const HeaderImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${SCREEN_WIDTH}px;
  position: absolute;
`;

export const RadiusSpacing = styled.View`
  background-color: ${WHITE};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  height: 32px;
`;

export const ListSearchContainer = styled.View`
  background-color: ${WHITE};
  flex: 1;
  padding: 0 33px;
`;

export const styles = StyleSheet.create({
  titleSpacing: { marginTop: 40, marginBottom: 20, marginHorizontal: 33 },
  subtitleSpacing: { marginBottom: 60, marginHorizontal: 33 },
  searchbarSpacing: { marginBottom: 30 },
  restaurantsTitleSpacing: { marginBottom: 15 },
  thumbImageItem: { width: '100%' },
  loadingContainer: { justifyContent: 'center', marginVertical: 20 },
  loadingTextSpacing: { marginRight: 5 },
});
