import { createRouter, createWebHistory } from 'vue-router'
import main from '../layouts/main.vue'
import start from '../layouts/start.vue'
const routes = [
    { 
        path: '/',
        name: 'home',
        component: () => import('../pages/index.vue'),
        meta: main 
    },
    { 
        path: '/getstarted',
        name: 'getstarted',
        component: () => import('../pages/registration/index.vue'),
        meta: start
    }
]

let topPosition

if (window.innerWidth > 768) {
    topPosition = 190
} else {
    topPosition = 65
}

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
          return {
            el: to.hash,
            top: topPosition,
            behavior: 'smooth',
          }
        }
      }
  })

   
  export default router