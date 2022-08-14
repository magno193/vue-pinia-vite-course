<template>
  <div class="home">

    <h3 class="title">{{ counterTitle }}:</h3>

    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Editar título</h4>
      <input v-model="counterTitle" type="text">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const counter = ref(0),
  counterTitle = ref("Meu contador")
const increaseCounter = () => {
  counter.value++
}
const decreaseCounter = () => {
  counter.value--
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