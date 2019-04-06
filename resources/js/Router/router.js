import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login.vue'
import Signup from '../components/login/Signup.vue'
import Test from '../components/login/Test.vue'


const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/test', component: Test },
  ]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
  })

export default router