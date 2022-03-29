import { createApp } from 'vue';
import App from './App.vue';
import { vant } from './plugin/vant.js';

const app = createApp(App);
vant(app);
app.mount('#app');
