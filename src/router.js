import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'auth',
      component: () => import('./views/Auth.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('./views/Books.vue'),
    },
    {
      path: '/mybooks',
      name: 'mybooks',
      component: () => import('./views/MyBooks.vue'),
    },
    {
      path: '/myloans',
      name: 'myloans',
      component: () => import('./views/MyLoans.vue'),
    },
    {
      path: '/newbook',
      name: 'newbook',
      component: () => import('./views/NewBook.vue'),
    },
    {
      path: '/bookdetails/:id',
      name: 'bookdetails',
      component: () => import('./views/BookDetails.vue'),
    },
  ],
});
