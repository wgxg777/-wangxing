import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import ButtonDemo from './views/ButtonDemo.vue'
import TableDemo from './views/TableDemo.vue'
import TooltipDemo from './views/TooltipDemo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'Button',
    component: ButtonDemo
  },
  {
    path: '/table',
    name: 'Table',
    component: TableDemo
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: TooltipDemo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
