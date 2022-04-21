import { defineStore } from 'pinia';

export const useModeStore = defineStore({
  id: 'mode',
  state: () => ({
    mode: 'light'
  }),
  getters: {
    isDarkMode() {
      return this.mode === 'dark';
    },
    isLightMode() {
      return this.mode === 'light';
    }
  },
  actions: {
    changeToDarkMode() {
      document.documentElement.className = 'dark';
      this.mode = 'dark';
    },
    changeToLightMode() {
      document.documentElement.className = '';
      this.mode = 'light';
    }
  }
});
