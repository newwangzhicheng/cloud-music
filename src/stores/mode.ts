import { defineStore } from 'pinia';

export const useModeStore = defineStore({
  id: 'mode',
  state: () => ({
    mode: 'light',
    light: '#f6f6f6',
    dark: '#222222'
  }),
  getters: {
    isDarkMode(): boolean {
      return this.mode === 'dark';
    },
    isLightMode(): boolean {
      return this.mode === 'light';
    }
  },
  actions: {
    changeToDarkMode(themeColor?: string) {
      this.mode = 'dark';
      document.documentElement.className = 'dark';
      const el = document.querySelector('meta[name="theme-color"]') as HTMLElement;
      const color = typeof themeColor !== 'undefined' ? themeColor : this.dark;
      el.setAttribute('content', color);
      sessionStorage.setItem('mode', this.mode);
    },
    changeToLightMode(themeColor?: string) {
      this.mode = 'light';
      document.documentElement.className = '';
      const el = document.querySelector('meta[name="theme-color"]') as HTMLElement;
      const color = typeof themeColor !== 'undefined' ? themeColor : this.light;
      el.setAttribute('content', color);
      sessionStorage.setItem('mode', this.mode);
    }
  }
});
