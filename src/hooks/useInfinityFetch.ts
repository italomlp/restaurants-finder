import { useSWRInfinite } from 'swr';
import api from '../services/api';

export function useInfinityFetch<Data = unknown, Error = unknown>(
  getKey: Parameters<typeof useSWRInfinite>[0],
) {
  return useSWRInfinite<Data, Error>(getKey, async (receivedUrl) => {
    const response = await api.get(receivedUrl);

    return response.data;
  });
}
