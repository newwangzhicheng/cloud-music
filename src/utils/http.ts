import axios, { type AxiosRequestConfig } from 'axios';

console.log('import.meta.env.PROD :>> ', import.meta.env.PROD);
axios.defaults.baseURL = import.meta.env.PROD ? config.baseURL : '';
axios.defaults.timeout = 1000 * 20;
axios.withCredentials = true;

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.intercceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface;
