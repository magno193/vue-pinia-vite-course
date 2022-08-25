import { defineStore } from 'pinia'
import { db } from '../js/firebase'
import { collection, getDocs } from 'firebase/firestore'

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
      const query = await getDocs(collection(db, 'notes'))
      query.forEach((doc) => {
        let data = doc.data(); // {content: <...>}
        let dataKey = Object.keys(data).at(0) // "content"

        let note = {
          id: doc.id,
          [dataKey]: data[dataKey]
        }

        this.notes = [...this.notes, note]
      })
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