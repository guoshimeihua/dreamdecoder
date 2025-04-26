import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './styles/index.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Analysis from './views/Analysis.vue'
import Privacy from './views/Privacy.vue'
import Terms from './views/Terms.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/analysis', component: Analysis },
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Terms }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

createApp(App)
  .use(router)
  .mount('#app')