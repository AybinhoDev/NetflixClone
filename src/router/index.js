import Vue from 'vue'
import VueRouter from 'vue-router'
import Research from '../views/Research.vue';
import Home from '../views/Home.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  }
]

const router = new VueRouter({
  routes
})

export default router
