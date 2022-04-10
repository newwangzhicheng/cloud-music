import { defineStore } from 'pinia';
import { getLoginPhone, getLoginStatus } from '@/utils/api.js';

export const useUser = defineStore('user', {
  state: () => ({
    loginStatus: false,
    token: '',
    cookie: '',
    account: {},
    profile: {}
  }),
  actions: {
    async login(phone, md5_password) {
      try {
        const res = await getLoginPhone(phone, md5_password);
        this.loginStatus = res.code === '200';
        if (this.loginStatus) {
          this.cookie = res.cookie;
          this.token = res.token;
          this.profile = res.profile;
          this.account = res.account;
        }
      } catch (e) {
        this.loginStatus = false;
        console.log('e :>> ', e);
        throw new Error('登陆失败');
      }
    },
    async checkLogin() {
      try {
        const res = await getLoginStatus();
        console.log('res :>> ', res);
        this.loginStatus = res.code === '200';
      } catch (e) {
        this.loginStatus = false;
        console.log('e :>> ', e);
        throw new Error('请求失败');
      }
    },
    logout() {
      this.loginStatus = false;
    }
  }
});
