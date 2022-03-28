import { createApp } from 'vue'
import App from './App.vue'
import { vant } from  './plugin/vant.js'
console.log('vant :>> ', vant);

const app = createApp(App);
vant(app);
app.mount('#app');
