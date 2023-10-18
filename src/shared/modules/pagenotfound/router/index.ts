export default {
    name: 'pagenotfound',
    component: () => import(/* webpackChunkName: "PageNotFound" */'@/shared/modules/pagenotfound/views/PageNotFoundView.vue'),
    children: []
}