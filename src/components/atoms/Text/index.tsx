import React, { useMemo } from 'react';
import { TextProps as RNTextProps } from 'react-native';

import { TEXT_TYPES_OPTIONS } from './types';

import { StyledText, StyledTextProps } from './styles';

type TextProps = StyledTextProps & {
  type?: keyof typeof TEXT_TYPES_OPTIONS;
} & RNTextProps;

const Text: React.FC<TextProps> = ({ type, style, bold, ...props }) => {
  const combinedStyle = useMemo(
    () => [type && TEXT_TYPES_OPTIONS[type], style],
    [type, style],
  );

  return (
    <StyledText
      {...props}
      bold={bold || (type && type.startsWith('h'))}
      style={combinedStyle}
    />
  );
};

export default Text;
