import React from 'react';
import { render } from 'react-native-testing-library';

import { Text } from 'react-native';
import { RestaurantsThumbsList } from '../../components/organisms';

const DATA = [
  {
    id: '1',
    name: 'Restaurant 1',
    image: 'https://loremflickr.com/640/480/cuisine',
    logo: 'https://loremflickr.com/500/500/logo',
    description:
      'Restaurant 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    telephone: '551143829385',
    priceRange: 'De R$ 40,00 a R$ 70,00 por pessoa.',
    paymentMethods: 'Dinheiro, cartão de crédito e débito.',
    website: 'http://www.restaurant1.com.br',
    openingHours: 'De terça à domingo, das 17:00 ãs 23:00.',
  },
  {
    id: '2',
    name: 'Restaurant 2',
    image: 'https://loremflickr.com/640/480/cuisine',
    logo: 'https://loremflickr.com/500/500/logo',
    description:
      'Restaurant 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    telephone: '551143829385',
    priceRange: 'De R$ 40,00 a R$ 70,00 por pessoa.',
    paymentMethods: 'Dinheiro, cartão de crédito e débito.',
    website: 'http://www.restaurant2.com.br',
    openingHours: 'De terça à domingo, das 17:00 ãs 23:00.',
  },
  {
    id: '3',
    name: 'Restaurant 3',
    image: 'https://loremflickr.com/640/480/cuisine',
    logo: 'https://loremflickr.com/500/500/logo',
    description:
      'Restaurant 3 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    telephone: '551143829385',
    priceRange: 'De R$ 40,00 a R$ 70,00 por pessoa.',
    paymentMethods: 'Dinheiro, cartão de crédito e débito.',
    website: 'http://www.restaurant3.com.br',
    openingHours: 'De terça à domingo, das 17:00 ãs 23:00.',
  },
  {
    id: '4',
    name: 'Restaurant 4',
    image: 'https://loremflickr.com/640/480/cuisine',
    logo: 'https://loremflickr.com/500/500/logo',
    description:
      'Restaurant 4 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    telephone: '551143829385',
    priceRange: 'De R$ 40,00 a R$ 70,00 por pessoa.',
    paymentMethods: 'Dinheiro, cartão de crédito e débito.',
    website: 'http://www.restaurant4.com.br',
    openingHours: 'De terça à domingo, das 17:00 ãs 23:00.',
  },
  {
    id: '5',
    name: 'Restaurant 5',
    image: 'https://loremflickr.com/640/480/cuisine',
    logo: 'https://loremflickr.com/500/500/logo',
    description:
      'Restaurant 5 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    telephone: '551143829385',
    priceRange: 'De R$ 40,00 a R$ 70,00 por pessoa.',
    paymentMethods: 'Dinheiro, cartão de crédito e débito.',
    website: 'http://www.restaurant5.com.br',
    openingHours: 'De terça à domingo, das 17:00 ãs 23:00.',
  },
  {
    id: '6',
    name: 'Restaurant 6',
    image: 'https://loremflickr.com/640/480/cuisine',
    logo: 'https://loremflickr.com/500/500/logo',
    description:
      'Restaurant 6 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    telephone: '551143829385',
    priceRange: 'De R$ 40,00 a R$ 70,00 por pessoa.',
    paymentMethods: 'Dinheiro, cartão de crédito e débito.',
    website: 'http://www.restaurant6.com.br',
    openingHours: 'De terça à domingo, das 17:00 ãs 23:00.',
  },
  {
    id: '7',
    name: 'Restaurant 7',
    image: 'https://loremflickr.com/640/480/cuisine',
    logo: 'https://loremflickr.com/500/500/logo',
    description:
      'Restaurant 7 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    telephone: '551143829385',
    priceRange: 'De R$ 40,00 a R$ 70,00 por pessoa.',
    paymentMethods: 'Dinheiro, cartão de crédito e débito.',
    website: 'http://www.restaurant7.com.br',
    openingHours: 'De terça à domingo, das 17:00 ãs 23:00.',
  },
  {
    id: '8',
    name: 'Restaurant 8',
    image: 'https://loremflickr.com/640/480/cuisine',
    logo: 'https://loremflickr.com/500/500/logo',
    description:
      'Restaurant 8 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    telephone: '551143829385',
    priceRange: 'De R$ 40,00 a R$ 70,00 por pessoa.',
    paymentMethods: 'Dinheiro, cartão de crédito e débito.',
    website: 'http://www.restaurant8.com.br',
    openingHours: 'De terça à domingo, das 17:00 ãs 23:00.',
  },
  {
    id: '9',
    name: 'Restaurant 9',
    image: 'https://loremflickr.com/640/480/cuisine',
    logo: 'https://loremflickr.com/500/500/logo',
    description:
      'Restaurant 9 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    telephone: '551143829385',
    priceRange: 'De R$ 40,00 a R$ 70,00 por pessoa.',
    paymentMethods: 'Dinheiro, cartão de crédito e débito.',
    website: 'http://www.restaurant9.com.br',
    openingHours: 'De terça à domingo, das 17:00 ãs 23:00.',
  },
  {
    id: '10',
    name: 'Restaurant 10',
    image: 'https://loremflickr.com/640/480/cuisine',
    logo: 'https://loremflickr.com/500/500/logo',
    description:
      'Restaurant 10 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    telephone: '551143829385',
    priceRange: 'De R$ 40,00 a R$ 70,00 por pessoa.',
    paymentMethods: 'Dinheiro, cartão de crédito e débito.',
    website: 'http://www.restaurant10.com.br',
    openingHours: 'De terça à domingo, das 17:00 ãs 23:00.',
  },
];

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn().mockReturnValue({
    navigate: jest.fn(),
  }),
}));

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn().mockReturnValue({
    bottom: 0,
  }),
}));

describe('RestaurantsThumbsList component', () => {
  it('should be able to render', () => {
    const { getByText } = render(
      <RestaurantsThumbsList data={DATA} headerComponent={<></>} />,
    );

    expect(getByText('Restaurantes')).toBeTruthy();
  });

  it('should be able to render header', () => {
    const { getByText } = render(
      <RestaurantsThumbsList
        data={DATA}
        headerComponent={<Text>Show this</Text>}
      />,
    );

    expect(getByText('Show this')).toBeTruthy();
  });

  it('should be able to render data', () => {
    const { getByText } = render(
      <RestaurantsThumbsList data={DATA} headerComponent={<></>} />,
    );

    const first = DATA[0];
    const middle = DATA[4];
    const last = DATA[9];

    expect(getByText(first.name)).toBeTruthy();
    expect(getByText(middle.name)).toBeTruthy();
    expect(getByText(last.name)).toBeTruthy();
  });
});
