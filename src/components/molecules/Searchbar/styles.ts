import styled from 'styled-components/native';

import { Row } from '../../atoms';
import { DARK, DARK_DOWN, LIGHT_MEDIUM } from '../../../constants/colors';

export const Container = styled(Row)`
  padding: 13px 20px;
  border-width: 1px;
  border-color: ${LIGHT_MEDIUM};
  border-radius: 8px;
`;

export const SearchIcon = styled.Image`
  margin-right: 11px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: DARK,
})`
  color: ${DARK_DOWN};
  font-size: 14px;
`;
