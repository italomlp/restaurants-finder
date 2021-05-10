import { useSWRInfinite } from 'swr';
import { KeyLoader, SWRInfiniteConfiguration } from 'swr/dist/types';
import { AxiosResponse } from 'axios';
import { useState } from 'react';

import api from '../services/api';

export type GetDataFromInfinityFetchResponseFunctionType<
  Response = unknown,
  Data = unknown
> = (data: AxiosResponse<Response>) => { data: Data; reachedEnd: boolean };

export function useInfinityFetch<
  Data = unknown,
  Error = unknown,
  Response = unknown
>(
  getKey: KeyLoader<Data>,
  getDataFromResponse?: GetDataFromInfinityFetchResponseFunctionType<
    Response,
    Data
  >,
  swrOptions?: SWRInfiniteConfiguration<Data, Error>,
) {
  const [isReachEnd, setIsReachEnd] = useState(false);

  const swrResponse = useSWRInfinite<Data, Error>(
    getKey,
    async (receivedUrl) => {
      const response = await api.get(receivedUrl);

      if (getDataFromResponse) {
        const { data: parsedData, reachedEnd } = getDataFromResponse(response);
        setIsReachEnd(reachedEnd);
        return parsedData;
      }

      return response.data;
    },
    swrOptions,
  );

  return { ...swrResponse, isReachEnd };
}
