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
  },
  getters: {
    oddOrEven: (state) => {
      return state.count % 2 === 0 
        ? 'par'
        : 'ímpar'
    }
  }
})
