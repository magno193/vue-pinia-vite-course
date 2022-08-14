<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3 class="title">{{ counterData.title }}:</h3>

    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Editar título</h4>
      <input v-model="counterData.title" type="text">
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const appTitle = 'App de exemplos Vue'

const counterData = reactive({
  counter: 0,
  title: 'Meu contador'
})

const increaseCounter = () => {
  counterData.counter++
}
const decreaseCounter = () => {
  counterData.counter--
}
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