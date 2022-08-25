import { watch } from 'vue'

export function useWatchCharacters(toWatch, maxChars = 100) {
  watch(toWatch, (val) => {
    if (val.length >= maxChars) {
      alert(`Não queremos valores maiores que ${maxChars}!`)
    }
  })
}