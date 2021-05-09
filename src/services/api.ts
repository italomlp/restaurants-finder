import axios from 'axios';

const BASE_URL = 'https://605d074f9386d200171ba209.mockapi.io/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
