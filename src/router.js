import VueRouter from 'vue-router';

import ThePage from './components/ThePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: ThePage,
    props: { page: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: ThePage,
    props: { page: 'About' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ThePage,
    props: { page: 'Contact' }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { x: 0, y: 0 };
  }
});

export default router;
