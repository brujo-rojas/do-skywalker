import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/test1',
  },
  {
    path: '/test1',
    name: 'test1',
    component: () => import(/* webpackChunkName: "test1" */ '../views/TestView1.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import(/* webpackChunkName: "test2" */ '../views/TestView2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
