import About from '@/views/About'
import Home from '@/views/Home.vue'
import Recover from '@/views/Authentication/Recover'
import Request from '@/views/Authentication/Request'
import SignIn from '@/views/Authentication/SignIn'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/recover',
    name: 'Recover',
    component: Recover
  },
  {
    path: '/request',
    name: 'Request',
    component: Request
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
