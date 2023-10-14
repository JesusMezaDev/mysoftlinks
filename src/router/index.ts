import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import routerRedirecter from '@/modules/redirecter/router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "Shortener" */'@/modules/shortener/views/ShortenerView.vue'),
    },
    {
      path: '/:shortUrl',
      ...routerRedirecter
    },
    {
      path: '/pathMatch(.*)*',
      redirect: { name: 'shortener' }
    }
  ]
});

export default router;