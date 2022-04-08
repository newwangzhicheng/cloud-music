import { defineStore } from 'pinia';

export const useLogin = defineStore('loginStatus', {
  state: () => ({
    loginStatus: false
  }),
  actions: {
    login() {
      this.loginStatus = true;
    },
    logout() {
      this.loginStatus = false;
    }
  }
});
