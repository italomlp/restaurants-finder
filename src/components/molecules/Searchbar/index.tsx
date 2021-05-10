import React from 'react';
import { ImageProps, TextInput, TextInputProps, ViewProps } from 'react-native';

import SearchImage from '../../../assets/icons/search_red.png';

import { Container, SearchIcon, Input } from './styles';

type InputProps = Omit<TextInputProps, 'placeholderTextColor'>;

type SearchbarProps = InputProps &
  Required<Pick<InputProps, 'placeholder'>> & {
    containerProps?: ViewProps;
    iconProps?: Omit<ImageProps, 'source'>;
  };

const Searchbar = React.forwardRef<TextInput, SearchbarProps>(
  ({ containerProps, iconProps, ...props }, ref) => (
    <Container {...containerProps}>
      <SearchIcon source={SearchImage} {...iconProps} />
      <Input ref={ref} {...props} />
    </Container>
  ),
);

export default Searchbar;
