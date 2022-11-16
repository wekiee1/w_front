import MainLayout from '@/layout/MainLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: MainLayout,
  },
  {
    path: '/api/home',
    component: () => import('@/views/Home')
  }

]

export default routes
