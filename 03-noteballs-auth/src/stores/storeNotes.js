import { defineStore } from 'pinia'
import { db } from '../js/firebase'
import {
  collection, deleteDoc, doc,
  onSnapshot, addDoc, updateDoc,
  query, orderBy
} from 'firebase/firestore'
import { useStoreAuth } from './storeAuth'

let collectionRef,
  collectionQuery;

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    /** mapeado pelo Firestore */
    notes: [],
    notesLoaded: false,
  }),
  getters: {
    getNoteContent(state) {
      /**
       * Um getter com parâmetros precisa ser
       * uma arrow function
       */
      return (id) => state.notes.find(note => note.id === id).content
    },
    totalNotesCount: (state) => state.notes.length,
    totalCharacterNotesCount: (state) => state.notes.reduce((acc, note) => acc + note.content.length, 0)
  },
  actions: {
    init() {
      const storeAuth = useStoreAuth()

      collectionRef = collection(db, 'users', storeAuth.user.id, 'notes');
      collectionQuery = query(collectionRef, orderBy('date', 'desc'))
      this.getNotes()
    },
    async getNotes() {
      //#region real time db
      /**
       * onSnapshot: as mudanças fora da página são refletidas em real time
       */

      this.notesLoaded = false
      onSnapshot(collectionQuery, querySnapshot => {
        let notes = []
        querySnapshot.forEach(doc => {
          let data = doc.data(); // {[key]: data...}

          let note = {
            id: doc.id,
            /**
             * funcao anonima que auto-executa e posteriormente
             * realiza spread dos conteudos dentro do objeto data ~doc.data()
             */
            ...(() => {
              let obj = {}
              for (const key of Object.keys(data)) {
                obj[key] = data[key]
              }
              return obj
            })()
          }
          notes.push(note)
        })
        setTimeout(() => {
          this.notes = notes
          this.notesLoaded = true
        }, 500);
      })
      //#endregion
    },

    clearNotes(){
      this.notes = []
    },

    async addNote(content) {
      const tmstamp = String(new Date().getTime())
      await addDoc(collectionRef, {
        content,
        date: tmstamp // order by precisa ser um campo do documento pra ser utilizado
      })
    },

    async deleteNote(id) {
      await deleteDoc(doc(collectionRef, id))
    },

    async updateNote(payload) {
      await updateDoc(doc(collectionRef, payload.id), {
        content: payload.content
      })
    }
  }
})