import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = import('react-native-reanimated/mock');

  Reanimated.default.call = () => null;

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
