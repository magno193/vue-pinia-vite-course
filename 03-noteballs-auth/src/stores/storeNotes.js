import { defineStore } from 'pinia'
import { db } from '../js/firebase'
import { collection, onSnapshot } from 'firebase/firestore'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: []
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
      const query = collection(db, 'notes');
      onSnapshot(query, querySnapshot => {
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
    addNote(content) {
      this.$state.notes.unshift({
        id: `${Date.now()}@`,
        content
      })
    },
    deleteNote(id) {
      this.notes =
        this.notes.filter(
          note => note.id !== id
        )
    },
    updateNote(payload) {
      let idxFound = this.notes.findIndex(note => note.id === payload.id);
      this.notes.at(idxFound).content = payload.content
    }
  }
})