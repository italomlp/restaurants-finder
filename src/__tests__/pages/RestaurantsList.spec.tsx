import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import RestaurantsList from '../../pages/RestaurantsList';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn().mockReturnValue({
    bottom: 0,
  }),
}));

describe('RestaurantsList page', () => {
  it('should be able to render', () => {
    const { getByText } = render(<RestaurantsList />);

    expect(getByText('Descubra novos sabores')).toBeTruthy();
  });

  it('should has search button', () => {
    const { getByPlaceholder } = render(<RestaurantsList />);

    const input = getByPlaceholder('Encontre um restaurante');

    expect(input).toBeTruthy();
  });

  it('should navigate on press search button', () => {
    const { getByPlaceholder } = render(<RestaurantsList />);

    const input = getByPlaceholder('Encontre um restaurante');

    fireEvent(input, 'onPress');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });

  it('should has restaurants thumbs list', () => {
    const { getByText } = render(<RestaurantsList />);

    expect(getByText('Restaurantes')).toBeTruthy();
  });
});
