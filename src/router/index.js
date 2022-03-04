import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Articles from '@/views/Pads.vue'
import Pad from '@/views/Pad.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pads',
    name: 'Pads',
    component: Articles
  },
  {
    path: '/pads/:id',
    name: 'Pad',
    component: Pad
  },
  {
    path: '/manage',
    name: 'MyPads',
    component: ''
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
