import { AxiosResponse } from 'axios';

import { APIResponseRestaurant } from '../../interfaces/Restaurant';

export type RestaurantsShowResponse = { data: APIResponseRestaurant };

export const getData = (response: AxiosResponse<RestaurantsShowResponse>) => ({
  ...response.data.data,
  priceRange: response.data.data.price_range,
  paymentMethods: response.data.data.payment_methods,
  openingHours: response.data.data.opening_hours,
});
