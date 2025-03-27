import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/screens/LandingPage.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

/*
router.beforeEach((to, from, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (window.location.protocol !== 'https:') {
      const httpsUrl = `https://${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}${window.location.pathname}${window.location.search}`;
      window.location.replace(httpsUrl); 
    } else {
      next();
    }
  } else {
    next(); 
  }
});*/

export default router;
