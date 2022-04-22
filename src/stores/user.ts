import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  state: () => ({
    isLogin: false
  })
});
