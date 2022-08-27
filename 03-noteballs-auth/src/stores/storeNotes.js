import { defineStore } from 'pinia'
import { db } from '../js/firebase'
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore'
export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [],
    collectionRef: collection(db, 'notes')
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
    async getNotes() {
      //#region real time db
      /**
       * onSnapshot: as mudanças fora da página são refletidas em real time
       */
      onSnapshot(this.collectionRef, querySnapshot => {
        let notes = []
        querySnapshot.forEach(doc => {
          let data = doc.data(); // {content: <...>}
          let dataKey = Object.keys(data).at(0) // "content"

          let note = {
            id: doc.id,
            [dataKey]: data[dataKey]
          }
          notes.push(note)
        })
        this.notes = notes
      })
      //#endregion
    },

    async addNote(content) {
      // o id precisa ser string
      const id = String(new Date().getTime())
      await setDoc(doc(this.collectionRef, id), {
        content
      })
    },

    async deleteNote(id) {
      await deleteDoc(doc(this.collectionRef, id))
    },

    updateNote(payload) {
      let idxFound = this.notes.findIndex(note => note.id === payload.id);
      this.notes.at(idxFound).content = payload.content
    }
  }
})