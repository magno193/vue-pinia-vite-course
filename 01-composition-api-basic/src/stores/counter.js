import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 3,
    title: 'App de contador'
  }),
  actions: {
    increaseCounter(amount) {
      this.count += isNaN(+amount) ? 1 : amount
    },
    decreaseCounter(amount) {
      this.count -= isNaN(+amount) ? 1 : amount
    }
  }
})
