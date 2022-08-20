import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [
      {
        id: "id1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ea voluptas dolore, voluptatibus velit eos iusto dignissimos accusantium molestias, ut magnam, debitis provident id harum?",
      },
      {
        id: "id2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, expedita.",
      }
    ]
  }),
  getters: {
    getNoteContent(state) {
      /**
       * Um getter com parâmetros precisa ser
       * uma arrow function
       */
      return (id) => state.notes.find(note => note.id === id).content
    },
  },
  actions: {
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