import Restaurant, { APIResponseRestaurant } from '../../interfaces/Restaurant';

import { GetDataFromFetchResponseFunctionType } from '../../hooks/useFetch';

export type RestaurantsListSearchResponse = {
  data: APIResponseRestaurant[];
};

export const getData: GetDataFromFetchResponseFunctionType<
  RestaurantsListSearchResponse,
  Restaurant[]
> = (response) =>
  response.data.data.map((restaurant) => ({
    ...restaurant,
    priceRange: restaurant.price_range,
    paymentMethods: restaurant.payment_methods,
    openingHours: restaurant.opening_hours,
  }));
