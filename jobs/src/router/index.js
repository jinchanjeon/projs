import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import jobs from '../views/jobs/jobs.vue'
import jobdetails from '../views/jobs/jobdetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: ()=>import('../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobdetails',
    component: jobdetails,
    props:true
  },
  //redirect
  {
    path: '/all-jobs',
    redirect:'/jobs'
  },

  //catchall 404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
