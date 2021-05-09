import React from 'react';
import { ImageProps, TextInputProps, ViewProps } from 'react-native';

import SearchImage from '../../../assets/icons/search_red.png';

import { Container, SearchIcon, Input } from './styles';

type InputProps = Omit<TextInputProps, 'placeholderTextColor'>;

type SearchbarProps = InputProps &
  Required<Pick<InputProps, 'placeholder'>> & {
    containerProps?: ViewProps;
    iconProps?: Omit<ImageProps, 'source'>;
  };

const Searchbar: React.FC<SearchbarProps> = ({
  containerProps,
  iconProps,
  ...props
}) => (
  <Container {...containerProps}>
    <SearchIcon source={SearchImage} {...iconProps} />
    <Input {...props} />
  </Container>
);

export default Searchbar;
