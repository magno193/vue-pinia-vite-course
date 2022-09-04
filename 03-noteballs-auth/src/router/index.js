import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewAuth from '@/views/ViewAuth.vue'
import { useStoreAuth } from '../stores/storeAuth'
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
      component: ViewStats
    },
    {
      path: '/auth',
      name: 'auth',
      component: ViewAuth
    },
  ]
})

//#region Navigation Guards
router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth()
  console.log('to:', to);

  if (!storeAuth.user.id && to.name !== 'auth')
    return { name: 'auth' }

  if (storeAuth.user.id && to.name === 'auth')
    return false
})
//#endregion
export default router