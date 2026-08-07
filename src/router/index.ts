import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AuthView from '@/views/AuthView.vue';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AuthenticatedLayout,
      children: [
        {
          path: '',
          component: HomeView,
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      component: DefaultLayout,
      children: [
        {
          path: '',
          component: AuthView,
        },
      ],
    },
  ],
});

export default router;
