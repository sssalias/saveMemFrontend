import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/IndexView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/CreateVew.vue')
  },
  {
    path: '/photo/upload',
    name: 'photoUpload',
    component: () => import('@/views/PhotoView.vue')
  },
  {
    path: '/album',
    name: 'album',
    component: () => import('@/views/AlbumView.vue')
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: () => import('@/views/QuotesView.vue')
  },
  {
    path: '/quotes/create',
    name: 'quotesCreate',
    component: () => import('@/views/CreateQuoteView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
