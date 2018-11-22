import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Product from './views/Products.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/Products',
      name: 'Products',
      component: Product,
    },
  ],
});
