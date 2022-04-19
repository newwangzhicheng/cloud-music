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
      const res = await getLoginPhone(phone, md5_password);
      this.loginStatus = res.code === '200';
      if (this.loginStatus) {
        this.cookie = res.cookie;
        this.token = res.token;
        this.profile = res.profile;
        this.account = res.account;
      }
    },
    async checkLogin() {
      const res = await getLoginStatus();
      this.loginStatus = res.code === '200';
    },
    logout() {
      this.loginStatus = false;
    }
  }
});
