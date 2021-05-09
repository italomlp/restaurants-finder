import styled from 'styled-components/native';
import { Text } from '../../atoms';
import { WHITE } from '../../../constants/colors';

export const ImageBackgroundThumb = styled.ImageBackground`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 148px;
  height: 160px;
`;

export const Container = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  justify-content: flex-end;
`;

export const Title = styled(Text).attrs({
  bold: true,
})`
  color: ${WHITE};
  font-size: 12px;
  line-height: 18px;
`;
