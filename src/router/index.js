import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/bmicalculator',
      name: 'bmicalculator',
      component: () => import(/* webpackChunkName: "about" */ '@/views/BMICalculator.vue')
    }
  ]
})
