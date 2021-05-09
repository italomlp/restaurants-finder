import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import LoadingImage from '../../../assets/icons/loading_red.png';

const Loader: React.FC = () => {
  const spinningValue = useRef(new Animated.Value(0));

  useEffect(() => {
    const triggerAnimation = () => {
      spinningValue.current.setValue(0);
      Animated.timing(spinningValue.current, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start(() => triggerAnimation());
    };

    triggerAnimation();
  }, []);

  const rotationData = spinningValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.Image
      source={LoadingImage}
      style={[{ transform: [{ rotate: rotationData }] }]}
    />
  );
};

export default Loader;
