import 'bootstrap/dist/css/bootstrap.min.css';
import '@tabler/icons-webfont/tabler-icons.min.css';

import { createApp } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);

app
    .use(createPinia())
    .use(router)
    .mount('#app');