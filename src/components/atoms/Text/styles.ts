import styled from 'styled-components/native';
import { DARK_DOWN } from '../../../constants/colors';
import { POPPINS, POPPINS_BOLD } from '../../../constants/fonts';

export type StyledTextProps = {
  bold?: boolean;
  center?: boolean;
  right?: boolean;
};

export const StyledText = styled.Text<StyledTextProps>`
  font-family: ${(props) => (props.bold ? POPPINS_BOLD : POPPINS)};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${DARK_DOWN};
  text-align: ${(props) => {
    if (props.center) {
      return 'center';
    }
    if (props.right) {
      return 'right';
    }
    return 'left';
  }};
`;
