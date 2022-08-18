import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import viewStats from '@/views/ViewStats.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: ViewNotes
    },
    {
      path: '/note/:id',
      name: 'edit-note',
      component: ViewEditNote
    },
    {
      path: '/stats',
      name: 'stats',
      component: viewStats
    },
  ]
})

export default router