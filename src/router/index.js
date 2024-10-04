import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/screens/LandingPage.vue';
const routes = [
  {
    path: '/landingPage',
    name: 'landingPage',
    component: LandingPage
  },
  {
    path: '/',
    redirect: '/landingPage' 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
