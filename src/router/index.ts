import { createRouter, createWebHistory } from 'vue-router';

import routerRedirecter from '@/modules/redirecter/router';
import routerPageNotFound from '@/shared/modules/pagenotfound/router/index';
import routerInvalidShortUrl from '@/shared/modules/invalidshorturl/router/index';

import { isValidShortUrl} from '@/modules/redirecter/router/redirecter-guards'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/shortener/views/ShortenerView.vue'),
    },
    {
      path: '/:shortUrl',
      beforeEnter: [isValidShortUrl],
      ...routerRedirecter
    },
    {
      path: '/pagenotfound',
      ...routerPageNotFound
    },
    {
      path: '/invalidshorturl',
      ...routerInvalidShortUrl,
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/shared/modules/pagenotfound/views/PageNotFoundView.vue'),
    }
  ]
});

export default router;