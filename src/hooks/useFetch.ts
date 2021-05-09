import useSWR from 'swr';
import api from '../services/api';

export function useFetch<Data = unknown, Error = unknown>(url: string) {
  return useSWR<Data, Error>(url, async (receivedUrl) => {
    const response = await api.get(receivedUrl);

    return response.data;
  });
}
