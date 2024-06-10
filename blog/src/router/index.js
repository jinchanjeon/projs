import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import details from '../views/details.vue'
import create from '../views/create.vue'
import tag from '../views/tag.vue'
import realtime from '../views/realtime.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'details',
    component: details,
    props:true
  },
  {
    path: '/create',
    name: 'create',
    component: create,
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: tag,
  },
  {
    path:'/realtime',
    name:'realtime',
    component:realtime
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
