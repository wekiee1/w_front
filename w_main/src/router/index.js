import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/MainLayout'

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
