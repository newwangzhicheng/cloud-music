import { createApp } from 'vue';
import App from '@/App.vue';
import { vant } from '@/plugin/vant.js';
import router from '@/router/index.js';
import Http from '@/utils/http';

Http.get('/hi').then((data) => {
  console.log('data :>> ', data);
});
Http.get('/hi').then((data) => {
  console.log('data :>> ', data);
});
Http.get('/hi').then((data) => {
  console.log('data :>> ', data);
});

const app = createApp(App);
vant(app);
app.use(router);
app.mount('#app');
