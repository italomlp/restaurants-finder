import useSWR, { SWRConfiguration } from 'swr';
import { AxiosResponse } from 'axios';
import api from '../services/api';

export type GetDataFromFetchResponseFunctionType<
  Response = unknown,
  Data = unknown
> = (data: AxiosResponse<Response>) => Data;

export function useFetch<Data = unknown, Error = unknown, Response = unknown>(
  url: string,
  getDataFromResponse?: GetDataFromFetchResponseFunctionType<Response, Data>,
  swrOptions?: SWRConfiguration<Data, Error>,
) {
  return useSWR<Data, Error>(
    url,
    async (receivedUrl) => {
      const response = await api.get(receivedUrl);

      if (getDataFromResponse) {
        return getDataFromResponse(response);
      }

      return response.data;
    },
    swrOptions,
  );
}
