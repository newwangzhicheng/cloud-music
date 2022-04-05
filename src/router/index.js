import { createRouter, createWebHashHistory } from 'vue-router';
import Pages from '@/router/pages.js';

const MyPage = () => import('@/views/my/MyPage.vue');

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: Pages.home,
      redirect: { name: Pages.my },
      component: MyPage,
      children: [
        {
          path: 'my',
          name: Pages.my,
          component: MyPage
        }
      ]
    }
  ]
});

export default router;
