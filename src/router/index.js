import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/',
        name: 'home',
        component: () => import('../pages/index.vue')
    },
    { 
        path: '/getstarted',
        name: 'getstarted',
        component: () => import('../pages/getstarted/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

   
  export default router