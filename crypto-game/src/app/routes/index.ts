import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../../pages/HomePage/ui/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  // другие маршруты
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;