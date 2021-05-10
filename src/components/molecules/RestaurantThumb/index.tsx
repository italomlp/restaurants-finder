import React from 'react';

import {
  ImageSourcePropType,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { ImageBackgroundThumb, Container, Title } from './styles';

type RestaurantThumbProps = {
  source: ImageSourcePropType;
  title: string;
  imageStyle?: StyleProp<ViewStyle>;
  onPress: () => unknown;
};

const RestaurantThumb: React.FC<RestaurantThumbProps> = ({
  source,
  title,
  imageStyle,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <ImageBackgroundThumb source={source} style={imageStyle}>
      <Container>
        <Title>{title}</Title>
      </Container>
    </ImageBackgroundThumb>
  </TouchableOpacity>
);

export default RestaurantThumb;
