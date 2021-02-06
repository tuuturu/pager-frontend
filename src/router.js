import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Events from './views/Events.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/feed', component: Events },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
