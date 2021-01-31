import { createRouter, createWebHashHistory } from 'vue-router'

import Events from './views/Events.vue'

const routes = [
  { path: '/', component: Events },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
