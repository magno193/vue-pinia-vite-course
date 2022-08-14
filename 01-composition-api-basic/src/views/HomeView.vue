<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3 class="title">{{ counterData.title }}:</h3>

    <div>
      <button class="btn" @click="decreaseCounter(accAmount)">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button class="btn" @click="increaseCounter(accAmount)">+</button>
    </div>

    <p>{{ oddOrEven }}</p>

    <div class="edit">
      <h4>Editar título</h4>
      <input v-model="counterData.title" type="text" v-autofocus>
      <h4>Quantidade de mudança (-/+)</h4>
      <input v-model.number="accAmount" type="number">
    </div>
  </div>
</template>

<script setup>
//#region imports
import { reactive, ref, computed, watch, onMounted } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus'
//#endregion

//#region app title
const appTitle = 'App de exemplos Vue'
onMounted(() => {
  console.log('Coisas relacionadas ao título')
})
//#endregion

//#region counter data
const counterData = reactive({
  counter: 0,
  title: 'Meu contador'
})
const accAmount = ref(1)

const oddOrEvenFunc = () => {
  return counterData.counter % 2 === 0
    ? 'Este contador é par'
    : 'Este contador é ímpar'
}
const oddOrEven = computed(oddOrEvenFunc)

const increaseCounter = (amount = 1) => {
  counterData.counter += amount
}
const decreaseCounter = (amount = 1) => {
  counterData.counter -= amount
}

const countSource = () => counterData.counter,
  countHandler = (counter, old) => counter === 20 ? alert('Você atingiu o marco 20!') : null
watch(countSource, countHandler)

onMounted(() => {
  console.log('Coisas relacionadas ao contador.');
})
//#endregion

//#region directives
// const vAutofocus = {
//   mounted(el) {
//     el.focus()
//   }
// }
//#endregion
</script>

<style>
.home {
  text-align: center;
  padding: 1rem;
}

.btn,
.counter {
  font-size: 3rem;
  margin: 1rem;
}

.edit {
  margin-top: 2rem;
}
</style>