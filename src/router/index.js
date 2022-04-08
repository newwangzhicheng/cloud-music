import { createRouter, createWebHashHistory } from 'vue-router';
import Pages from '@/router/pages.js';

const MyPage = () => import('@/views/my/MyPage.vue');

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: Pages.home,
      redirect: { name: Pages.my }
    },
    {
      path: '/my',
      name: Pages.my,
      component: MyPage
    },
    {
      path: '/login',
      name: Pages.login,
      component: () => import('@/views/login/LoginPage.vue')
    }
  ]
});

export default router;
