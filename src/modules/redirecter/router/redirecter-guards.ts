import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const isValidShortUrl = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const { shortUrl } = to.params;
    if (shortUrl.length === 8) next();

    next({ name: 'invalidshorturl' });
}