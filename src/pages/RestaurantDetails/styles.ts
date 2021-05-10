import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { DARK_UP, LIGHT, WHITE } from '../../constants/colors';
import { Text } from '../../components/atoms';

export const CoverImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  aspect-ratio: 1;
  position: absolute;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
})``;

export const HeaderContainer = styled.View`
  padding: 40px 30px 0;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
`;

export const LogoImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const CurvedContainer = styled.View`
  background-color: ${WHITE};
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  height: 32px;
  margin-top: -30px;
  z-index: 0;
`;

export const Container = styled.View`
  background-color: ${WHITE};
  height: 100%;
  padding: 15px 30px 0;
`;

export const Section = styled.View`
  margin-bottom: 30px;
`;
export const SectionTitle = styled(Text).attrs({
  type: 'h5',
})`
  margin-bottom: 3px;
`;
export const SectionDescription = styled(Text).attrs({
  type: 'small',
})`
  color: ${DARK_UP};
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${LIGHT};
  margin-bottom: 30px;
`;

export const styles = StyleSheet.create({
  backHitSlop: { top: 10, right: 10, bottom: 10, left: 10 },
  headerRightPlaceholder: { opacity: 0 },
  titleSpacing: { marginBottom: 30 },
  backButtonContainer: { alignSelf: 'flex-start' },
});
