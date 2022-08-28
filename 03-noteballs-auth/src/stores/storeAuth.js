import { createUserWithEmailAndPassword } from 'firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../js/firebase'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
  }),
  actions: {
    async registerUser(credentials) {
      try {
        const response = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        const user = response.user
        console.log('user: ', user);
      } catch (error) {
        console.log(`Erro: ${error.message}`);
      }
    }
  }
})