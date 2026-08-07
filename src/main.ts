import { createApp } from 'vue';
import { createPinia } from 'pinia';

import vuetify from './app/plugins/vuetify.ts';
import 'vuetify/styles';

import App from './app/App.vue';
import router from './app/router/index.ts';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
