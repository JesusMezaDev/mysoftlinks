import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import routerRedirecter from '@/modules/redirecter/router';
import routerPageNotFound from '@/shared/router/index';

const router = createRouter({
  history: createWebHashHistory(),
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
      path: '/pagenotfound',
      ...routerPageNotFound
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import(/* webpackChunkName: "PageNotFound" */'@/shared/PageNotFoundView.vue'),
    }
  ]
});

export default router;