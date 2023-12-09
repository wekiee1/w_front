import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/MainLayout'
import DevelopPlan from '../views/DevelopPlan'
// const DevelopPlan = () => import('../views/DevelopPlan')

const routes = [
  {
    path: '/',
    redirect: "/w/plan"
  },
  {
    path: '/w/plan',
    component: DevelopPlan,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
