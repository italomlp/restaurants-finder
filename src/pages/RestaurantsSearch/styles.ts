import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { LIGHT_DOWN } from '../../constants/colors';

export const HeaderContainer = styled.View`
  padding: 40px 30px 0;
`;

export const styles = StyleSheet.create({
  headerBarSpacing: { marginBottom: 30 },
  resultsDescription: { color: LIGHT_DOWN },
  headerRightSpacingPlaceholder: { opacity: 0 },
  backHitSlop: { top: 10, right: 10, bottom: 10, left: 10 },
  searchbarSpacing: { marginBottom: 30 },
});
