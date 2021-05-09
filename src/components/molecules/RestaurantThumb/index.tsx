import React from 'react';

import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { ImageBackgroundThumb, Container, Title } from './styles';

type RestaurantThumbProps = {
  source: ImageSourcePropType;
  title: string;
  imageStyle?: StyleProp<ViewStyle>;
};

const RestaurantThumb: React.FC<RestaurantThumbProps> = ({
  source,
  title,
  imageStyle,
}) => (
  <ImageBackgroundThumb source={source} style={imageStyle}>
    <Container>
      <Title>{title}</Title>
    </Container>
  </ImageBackgroundThumb>
);

export default RestaurantThumb;
