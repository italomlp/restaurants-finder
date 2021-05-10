import Restaurant, { APIResponseRestaurant } from '../../interfaces/Restaurant';
import { getQueryParameterFromUrlByName } from '../../utils/url';
import { GetDataFromInfinityFetchResponseFunctionType } from '../../hooks/useInfinityFetch';

export const PAGE_SIZE = 10;

export const getKey = (
  pageIndex: number,
  previousPageData?: Restaurant[] | null,
) => {
  if (previousPageData && !previousPageData.length) {
    return null;
  }

  return `/restaurants?page=${pageIndex + 1}&limit=${PAGE_SIZE}`;
};

export type RestaurantsListResponse = {
  pagination: { total: number; per_page: number };
  data: APIResponseRestaurant[];
};

export const getData: GetDataFromInfinityFetchResponseFunctionType<
  RestaurantsListResponse,
  Restaurant[]
> = (response) => {
  let reachedEnd = false;
  const numberOfPages = Math.ceil(
    response.data.pagination.total / response.data.pagination.per_page,
  );

  if (
    parseInt(
      getQueryParameterFromUrlByName('page', response.config.url || '') || '0',
      10,
    ) >= numberOfPages
  ) {
    reachedEnd = true;
  }

  return {
    reachedEnd,
    data: response.data.data.map((restaurant) => ({
      ...restaurant,
      priceRange: restaurant.price_range,
      paymentMethods: restaurant.payment_methods,
      openingHours: restaurant.opening_hours,
    })),
  };
};
