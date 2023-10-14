export default {
    name: 'redirecter',
    component: () => import(/* webpackChunkName: "Redirecter" */'@/modules/redirecter/views/RedirecterView.vue'),
    children: []
}