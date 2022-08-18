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
})