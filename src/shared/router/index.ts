export default {
    name: 'pagenotfound',
    component: () => import(/* webpackChunkName: "PageNotFound" */'@/shared/PageNotFoundView.vue'),
    children: []
}