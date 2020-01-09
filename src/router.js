import VueRouter from 'vue-router';

import App from './App.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: App,
    props: { page: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: App,
    props: { page: 'About' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: App,
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
