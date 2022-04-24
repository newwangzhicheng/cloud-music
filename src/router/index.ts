import { createRouter, createWebHashHistory } from 'vue-router';
import { Pages } from './pages';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Pages.home,
      redirect: { name: Pages.my }
    },
    {
      path: '/my',
      name: Pages.my,
      component: () => import('@/views/my/MyPage.vue')
    }
  ]
});

export default router;
