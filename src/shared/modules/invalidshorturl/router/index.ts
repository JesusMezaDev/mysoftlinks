export default {
    name: 'invalidshorturl',
    component: () => import(/* webpackChunkName: "InvalidShortURL" */'@/shared/modules/invalidshorturl/views/InvalidShortURLView.vue'),
    children: []
}