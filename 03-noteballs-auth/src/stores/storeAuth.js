import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../js/firebase'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    user: {}
  }),
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (!user) return this.user = {}

        this.user.id = user.uid
        this.user.email = user.email
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
        // console.log(`Erro: ${error.message}`); 
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
        // console.log(`Erro: ${error.message}`);
      }
    },

    logoutUser() {
      signOut(auth)
        .then(() => console.log('Usuário deslogado'))
        .catch(err => console.log(err));
    }
  }
})