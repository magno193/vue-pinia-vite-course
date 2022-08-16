<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3 class="title">{{ counter.title }}:</h3>

    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">--</button>
      <button @click="counter.decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">++</button>
    </div>

    <p>O contador é {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Editar título</h4>
      <input v-autofocus v-model="counter.title" type="text" />
    </div>
  </div>
</template>

<script setup>
//#region imports
import { ref, onMounted } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from "../stores/counter";
//#endregion

//#region app title
const appTitle = "App de exemplos Vue";
const appTitleRef = ref(null); // options acesso é this.$refs
onMounted(() => {
  // vira um objeto [object HTMLHeadingElement]
  console.log(
    `Ref esta à ${appTitleRef.value.offsetWidth} pixels de largura em relação ao layout`
  );
});
//#endregion

//#region counter data (pinia)
const counter = useCounterStore();
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
  font-size: 2.7rem;
  margin: 0.7rem;
}

.edit {
  margin-top: 2rem;
}
</style>
