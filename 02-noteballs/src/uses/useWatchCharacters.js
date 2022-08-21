import { watch } from 'vue'

export function useWatchCharacters(toWatch) {
  watch(toWatch, (val) => {
    if (val.length >= 100) {
     alert('Não queremos valores maiores que 100!') 
    }
  })
}