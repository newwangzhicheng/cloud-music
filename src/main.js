import { createApp } from 'vue';
import App from '@/App.vue';
import { vant } from '@/plugin/vant.js';
import router from '@/router/index.js';
import { createPinia } from 'pinia';

const app = createApp(App);
vant(app);
app.use(router);
app.use(createPinia());
app.mount('#app');
