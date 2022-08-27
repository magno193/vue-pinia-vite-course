import { defineStore } from 'pinia'
import { db } from '../js/firebase'
import {
  collection, deleteDoc, doc,
  onSnapshot, addDoc, updateDoc,
  query, orderBy
} from 'firebase/firestore'

const collectionRef = collection(db, 'notes');
/** limit poder ser passado como terceiro parâmetro */
const collectionQuery = query(collectionRef, orderBy('date', 'desc'))

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    /** mapeado pelo Firestore */
    notes: [],
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

      onSnapshot(collectionQuery, querySnapshot => {
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
      const tmstamp = String(new Date().getTime())
      await addDoc(collectionRef, {
        content,
        date:tmstamp // order by precisa ser um campo do documento pra ser utilizado
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