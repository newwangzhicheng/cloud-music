import axios from 'axios';
import { useUser } from '@/stores/user.js';
import { useRouter } from 'vue-router';
import Pages from '../router/pages';

// const baseURL = window.config.BASE_URL;
const baseURL =
  process.env.NODE_ENV === 'development' ? window.config.DEV_URL : window.config.BASE_URL;
console.log('baseURL :>> ', baseURL);
const service = axios.create({
  timeout: 20 * 1000,
  withCredentials: true,
  baseURL
});
/** 请求拦截 */
service.interceptors.request.use(
  async (config) => {
    /** params是url参数 */
    const user = useUser();
    if (!user.loginStatus) {
      const router = useRouter();
      router.push({ name: Pages.login });
    }
    config.params = {
      ...config.params
      // t: Date.now()
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
  get(url, params = {}, config = {}) {
    return new Promise((resolve, reject) => {
      service
        .get(url, {
          params,
          ...config
        })
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
