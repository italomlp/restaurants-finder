import styled from 'styled-components/native';
import { FlatList, FlatListProps, StyleSheet } from 'react-native';

import { WHITE } from '../../../constants/colors';

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
`;

type ThumbContainerProps = {
  firstInRow: boolean;
  lastRow: boolean;
};

export const ThumbContainer = styled.View<ThumbContainerProps>`
  width: 50%;
  padding-left: ${(props) => (props.firstInRow ? 33 : 10)}px;
  padding-right: ${(props) => (!props.firstInRow ? 33 : 10)}px;
  margin-bottom: ${(props) => (!props.lastRow ? 20 : 0)}px;
`;

type ThumbsListProps = FlatListProps<unknown> & {
  bottomInset: number;
};

export const ThumbsList = (styled(FlatList).attrs((props) => ({
  contentContainerStyle: [
    {
      flexGrow: 1,
      backgroundColor: WHITE,
    },
    props.contentContainerStyle,
  ],
}))<ThumbsListProps>`
  flex: 1;
` as unknown) as typeof FlatList;

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
});
