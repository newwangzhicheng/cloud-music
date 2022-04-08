import axios from 'axios';

const service = axios.create({
  timeout: 20 * 1000,
  withCredentials: true,
  baseURL: window.config.BASE_URL
});

/** 请求拦截 */
service.interceptors.request.use(
  async (config) => {
    /** params是url参数 */
    config.params = {
      ...config.params,
      t: Date.now()
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/** 响应拦截 */
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Http = {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      service
        .get(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  post(url, params = {}) {
    return new Promise((resolve, reject) => {
      service
        .post(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
};

export default Http;
