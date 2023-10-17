import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import routerRedirecter from '@/modules/redirecter/router';

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
      path: '/:pathMatch(.*)*',
      component: () => import(/* webpackChunkName: "PageNotFound" */'@/shared/PageNotFoundView.vue'),
    }
  ]
});

export default router;