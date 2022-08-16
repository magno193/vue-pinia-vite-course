import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import ViewNotes from '@/views/ViewNotes.vue'

import './assets/main.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: ViewNotes
    },
    {
      path: '/stats',
      name: 'stats',
      component: ViewNotes
    },
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
