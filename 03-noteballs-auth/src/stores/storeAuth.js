import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../js/firebase'
import { useStoreNotes } from './storeNotes'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    user: {}
  }),
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          this.router.replace('/auth')
          useStoreNotes().clearNotes()
          return this.user = {}
        }

        this.user.id = user.uid
        this.user.email = user.email
        this.router.push('/') // plugin router
        useStoreNotes().init()
      })
    },
    async registerUser(credentials) {
      try {
        const response = await createUserWithEmailAndPassword(
          auth, credentials.email, credentials.password
        )
        const user = response.user
        console.log('user: ', user);
      } catch (error) {
        console.log(`Erro: ${error.message}`);
      }
    },

    async loginUser(credentials) {
      try {
        const response = await signInWithEmailAndPassword(
          auth, credentials.email, credentials.password
        )
        const user = response.user
        console.log('user: ', user);
      } catch (error) {
        console.log(`Erro: ${error.message}`);
      }
    },

    logoutUser() {
      signOut(auth)
        .then(() => console.log('Usuário deslogado'))
        .catch(err => console.log(err));
    }
  }
})